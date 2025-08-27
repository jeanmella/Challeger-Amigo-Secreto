let amigos = [];

// Funciones de botones inicio
function agregarAmigo() {

    let nombreAmigo = document.getElementById("txtAmigo").value;

    if(validarNombreAmigo(nombreAmigo)) {
        nombreAmigo = darFormatoAmigo(nombreAmigo);

        limpiarResultado();

        if(validarNombreUnico(nombreAmigo)) {
            amigos.push(nombreAmigo);
            document.getElementById("txtAmigo").value = "";
            mostrarEnLista();
        } else alert("El nombre ya se encuentra registrado. Inserte un nuevo nombre.");
    } else alert("Por favor, inserte un nombre.");
    document.getElementById("txtAmigo").focus();
}

function sortearAmigo() {
    if(validarLista()) {
        let elegido = generarNumeroRandom();
        let amigoElegido = amigos[elegido];
        mostrarSorteado(amigoElegido);
        reiniciarSorteo();
    } else alert("Por favor, agregue amigos.");
}
// Funciones de botones FIN

// Funciones de validación INICIO
function darFormatoAmigo(amigo) {
    amigo = amigo.trim();
    return;
}

function validarNombreAmigo(amigo) {
    if(amigo.trim() === "") return false;
    else return true;
}

function validarLista() {
    if(validarNombreAmigo(document.getElementById("txtAmigo").value)) {
        if(confirm("Confirme para insertar el nombre.")) {
            agregarAmigo();
        }
    }
    if(amigos.length === 0) return false;
    else return true;

}

function validarNombreUnico(amigo) {
    return !amigos.includes(amigo);
}
// Funciones de validación FIN

// Funciones secundarias INICIO
function generarNumeroRandom() {
    return Math.floor(Math.random() * amigos.length);
}

function mostrarEnLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach(elem => lista.innerHTML += `<li>${elem}</li>`);
}

function mostrarSorteado(amigo) {
    let lista = document.getElementById("resultado");
    document.getElementById("listaAmigos").innerHTML = "";
    lista.innerHTML = `<li> El amigo secreto Ganador es ${amigo}.</li>`;
}

function reiniciarSorteo() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
}

function limpiarResultado() {
    document.getElementById("resultado").innerHTML = "";
}
// Funciones secundarias FIN