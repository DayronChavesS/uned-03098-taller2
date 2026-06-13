/*Ejecutar codigo tan pronto carga la pagina*/
window.addEventListener('DOMContentLoaded', main)

/**Facilidades para el manejo del LocalStorage**/
Storage.prototype.setObj = function (key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}

Storage.prototype.getObj = function (key) {
    return JSON.parse(this.getItem(key))
}

/**Esperar hasta que algun elemento exista**/
function waitForElementToExist(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

/* DECLARACION DE CLASES */

var elUsuario;

class Usuario {

    constructor(nombreCompleto, email, telefono, direccion, nombreUsuario, contraseña, repetirContraseña, tipoUsuario) {
        this.nombreCompleto = nombreCompleto;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
        this.nombreUsuario = nombreUsuario;
        this.contraseña = contraseña;
        this.repetirContraseña = repetirContraseña;
        this.tipoUsuario = tipoUsuario;
    }

}

function main() {
    if(!userNotLogged()){
        updateAccountInHeader();
    }
}

async function updateAccountInHeader() {
    const element = await waitForElementToExist('#cuenta-usuario'); //esperar hasta que header exista

    var headerContent;
    headerContent = document.getElementById("cuenta-usuario");

    /**Mostrar nombre y cerrar sesion**/
    headerContent.innerHTML = constructNewHTML();
}

function constructNewHTML(){
    elUsuario = localStorage.getObj("elUsuario");

    var nuevoHTML = "";
    nuevoHTML += "<a id='cuenta-opcion1'>"+ elUsuario.nombreUsuario +"</a>"
    nuevoHTML += "<a id='cuenta-opcion2' href='javascript:logout()'>Cerrar Sesion</a>"

    return nuevoHTML;
}

function userNotLogged() {
    return localStorage.getItem("elUsuario") === null;
}

function logout() {
    localStorage.removeItem("elUsuario");
    window.location.replace("/index.html");
}

