let listaDeAmigos = [];

function agregarAmigo() {
    let nombreDeAmigo = document.getElementById('amigo').value;
        if (nombreDeAmigo === "") {
            alert('Por favor, inserte un nombre');
            return;
        }

        listaDeAmigos.push(nombreDeAmigo);
        
    limpiarCampoEntrada();
    mostrarAmigosLista();            
}

function limpiarCampoEntrada() {
    document.querySelector('#amigo').value = '';
}

function agregarElementoaLista(texto, contenedor, esHTML = false) {
    let li = document.createElement('li');
    if (esHTML) {
        li.innerHTML = texto;
    } else {
        li.textContent = texto;
    }
    contenedor.appendChild(li);
}

function mostrarAmigosLista() {
    let listaVisible = document.getElementById('listaAmigos');
    listaVisible.innerHTML = '';

    listaDeAmigos.forEach(amigo => {
        agregarElementoaLista(amigo, listaVisible);
    }); 
}

function sortearAmigo(){
    let resultadoLista = document.getElementById('resultado');
    resultadoLista.innerHTML = "";

    if (listaDeAmigos.length === 0) {
        agregarElementoaLista('No hay amigos en la lista para sortear', resultadoLista);
        return;
    }

    let indiceAleatorio = Math.floor(Math.random()*listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    agregarElementoaLista(`El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`, resultadoLista, true);
}

function reiniciarJuego() {
    listaDeAmigos = [];
    // Limpiar el array
    limpiarCampoEntrada();
    // Limpiar lista de amigos en la UI
    document.getElementById('listaAmigos').innerHTML = '';
    // Limpiar el resultado del sorteo
    document.getElementById('resultado').innerHTML = '';
}