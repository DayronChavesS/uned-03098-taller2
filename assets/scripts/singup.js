window.addEventListener('DOMContentLoaded', main)

var form;
var campoContraseña;
var campoRepetirContraseña;

function main(){
    capturarElementos();
    crearEventos();
}

function capturarElementos(){
    form = document.getElementById("form-singup");
    campoContraseña = document.getElementById("password");
    campoRepetirContraseña = document.getElementById("password-validate");
}

function crearEventos() {
    form.addEventListener("submit", validarContraseña);
}

function validarContraseña(event){
    if (form.reportValidity()) {
        if(!contraseñaEsValida()){
            event.preventDefault();
            alert("La contraseña no es la misma.");
        }
    }
}

function contraseñaEsValida(){
    var primeraContraseña;
    var segundaContraseña;

    primeraContraseña = campoContraseña.value;
    segundaContraseña = campoRepetirContraseña.value;

    return primeraContraseña === segundaContraseña;
}