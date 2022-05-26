class Usuario{
    constructor (nombre,apellido,mail,contraseña){
        this.nombre=nombre;
        this.apellido=apellido;
        this.mail=mail;
        this.contraseña=contraseña;
        this.carritoCompras=carritoCompras;
        this.precioCarrito=0;
        const pagoEfectivo=0.8;
        const pagoDebito=1;
        const pagoCredito=1.6;
    }   
}
// formulario registro nuevo usuario
formularioRegistroUsuario.addEventListener("submit",validarFormulario);
let campoNombre =document.getElementById("nombreU");
let campoApellido =document.getElementById("apellidoU");
let campoMail =document.getElementById("mailU");
let campoContraseña =document.getElementById("contraseña");
let campoContraseña2 =document.getElementById("contraseña2");

campoNombre.oninput=()=>{
    if(!isNaN(campoNombre.value)){
        campoNombre.style.color="red";
    }else{
        campoNombre.style.color="black";
    }
}
campoApellido.oninput=()=>{
    if(!isNaN(campoApellido.value)){
        campoApellido.style.color="red";
    }else{
        campoApellido.style.color="black";
    }
}
campoMail.oninput=()=>{
    if(!isNaN(campoMail.value)){
        campoMail.style.color="red";
    }else{
        campoMail.style.color="black";
    }
}

function validarFormulario(evento){
    let u;
    evento.preventDefault();
    if(campoNombre.value==""||campoApellido.value==""||campoMail.value==""||campoContraseña.value==""||campoContraseña2.value==""){
        alert("todos los campos son obligatorios!")
    }else{
        u= new Usuario (campoNombre.value,campoApellido.value,campoMail.value,campoContraseña.value);
        sessionStorage.setItem(campoMail.value, JSON.stringify(u));
    }
}
