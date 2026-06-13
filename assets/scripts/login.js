window.addEventListener('DOMContentLoaded', main)

var form;
var ingresar;
var elUsuario;

function main(){
    capturarElementos();
    crearEventos();
}

function capturarElementos(){
    form = document.getElementById("formInicioSesion");
    ingresar = document.getElementById("ingresar");
}

function crearEventos() {
    form.addEventListener("submit", procesarLogin);
}

function procesarLogin(event){
    if (form.reportValidity()) {
        obtenerDatos();
        guardarDatos();
    }
}

function obtenerDatos(){
    elUsuario = new Usuario(
        null,
        null,
        null,
        null,
        document.getElementById("user").value,
        null,
        null,
        null
    );
}

function guardarDatos(){
    localStorage.setObj("elUsuario", elUsuario);
}