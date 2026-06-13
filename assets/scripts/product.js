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
    showButton = document.getElementById("añadir");
    dialog = document.getElementById("dialog");
    closeButton = document.getElementById("cerrar-dialogo");
    form = document.getElementById("form-add-cart");
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



