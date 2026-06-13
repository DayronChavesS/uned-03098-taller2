window.addEventListener('DOMContentLoaded', main)

var showButton; 
var dialog;
var closeButton;
var form;

function main(){
    capturarElementos();
    crearEventos();
}

function capturarElementos(){
    showButton = document.getElementById("pago");
    dialog = document.getElementById("dialog");
    closeButton = document.getElementById("cerrar-dialogo");
    form = document.getElementById("formulario-pago");
}

function crearEventos() {
    form.addEventListener("submit", detenerSubida);
    closeButton.addEventListener("click", cerrarDialogo);
}

function detenerSubida(event) {
    if (form.reportValidity()) {
        event.preventDefault();
        abrirDialogo();
    }
};

function abrirDialogo() {
    dialog.showModal();
}

function cerrarDialogo() {
    dialog.close();
    form.removeEventListener("submit", detenerSubida);
    showButton.click();
}



