
// formulario login, obtieene los datos del usuario guardado en el local y los guarda en el session como usuario activo

formularioLogin.addEventListener("submit",login);
let mailRegistrado =document.getElementById("mailRegistrado");

let contraseñaRegistrada =document.getElementById("contraseñaRegistrada");

function login(evento){
    evento.preventDefault();
    let usuarioRegistrado= JSON.parse(localStorage.getItem(mailRegistrado.value));

    if(usuarioRegistrado){
        usuarioRegistrado.contraseña==contraseñaRegistrada.value? iniciarSession():alert("CONTRASEÑA ERRONEA")
    } else{
        alert("ERROR: REVISE MAIL Y CONTRASEÑA")
    }
}

function iniciarSession(){
    let usuarioRegistradoEnStorage= JSON.parse(localStorage.getItem(mailRegistrado.value));
    sessionStorage.setItem("usuarioActivo", JSON.stringify(usuarioRegistradoEnStorage));
    alert("LOGIN EXITOSO");
}