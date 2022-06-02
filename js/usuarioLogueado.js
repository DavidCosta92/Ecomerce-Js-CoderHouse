// chequeo de usuario logueado
let logoUsuario=document.getElementById("logoUsuario");
let usuarioRegistrado=sessionStorage.getItem("usuarioActivo");
if(usuarioRegistrado){
   // logoUsuario.style.display.none;
    logoUsuario.style.fontSize="1.1rem";
    logoUsuario.style.fontWeight=900;
    let nombreUsuario=JSON.parse(usuarioRegistrado).nombre
    logoUsuario.innerHTML=`Usuario ${nombreUsuario.toUpperCase()}`;
}