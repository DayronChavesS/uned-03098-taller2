window.addEventListener('DOMContentLoaded', main)

var dialog;


function main() {
    capturarElementos();

    if (userNotLogged()) {
        if (welcomeNotSeen()) {
            dialog.showModal();
            localStorage.setObj("welcomeSeen", true);
        }
    }
}

function capturarElementos() {
    dialog = document.getElementById("dialog");
}

function userNotLogged() {
    return localStorage.getItem("elUsuario") === null;
}

function welcomeNotSeen() {
    return localStorage.getItem("welcomeSeen") === null;
}
