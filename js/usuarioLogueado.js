// chequeo de usuario logueado
let nombreUsarioActivo=document.getElementById("nombreUsarioActivo");
let usuarioRegistrado=sessionStorage.getItem("usuarioActivo");
if(usuarioRegistrado){
    nombreUsarioActivo.style.fontSize="1.4rem";
    nombreUsarioActivo.style.fontWeight=800;
    nombreUsarioActivo.style.color="purple";
    let nombreUsuario=JSON.parse(usuarioRegistrado).nombre
    nombreUsarioActivo.innerHTML=`${nombreUsuario.toUpperCase()}`;
}