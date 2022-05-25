
// formulario login

formularioLogin.addEventListener("submit",login);
let mailRegistrado =document.getElementById("mailRegistrado");

let contraseñaRegistrada =document.getElementById("contraseñaRegistrada");

function login(evento){
    evento.preventDefault();
    let usuarioRegistrado= JSON.parse(localStorage.getItem(mailRegistrado.value));
    if(usuarioRegistrado){
        if(usuarioRegistrado.contraseña==contraseñaRegistrada.value){
            alert("LOGIN EXITOSO")
        }else{
            alert("CONTRASEÑA ERRONEA")
        }
    } else{
        alert("ERROR: REVISE MAIL Y CONTRASEÑA")
    }
}
