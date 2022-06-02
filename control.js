
let usuario = document.getElementById("usuario");
let clave = document.getElementById("clave");
let form = document.getElementById("form");

form.addEventListener("submit", (ev) => {

    ev.preventDefault();

    let regex = /@/;

    if(regex.test(usuario.value)) {
        console.log("Enviando");
    } else {
        alert("Falta el arroba en el usuario");
    }
    if(clave.length == 10) {
        console.log("Enviando");
    } else {
        alert("Clave incorrecta");}
});


