class Usuario{
    constructor (nombre,apellido,mail,contraseña){
        this.nombre=nombre;
        this.apellido=apellido;
        this.mail=mail;
        this.contraseña=contraseña;
        let carritoCompras=[
            {
                tipo:"Camioneta",
                nombre:"Volkswagen AMAROK",
                precio:"13000000",
                caracteristicas: "Modelo 2022, 0Km, 2.4, tdi, 4x4",
                img: "./img/Producto/camioneta/camioneta2.png",
                idProducto:14,
            },
            {
                tipo:"Camioneta",
                nombre:"Volkswagen AMAROK",
                precio:"4000000",
                caracteristicas: "Modelo 2021, 7.000km, V6",
                img: "./img/Producto/camioneta/camioneta3.png",
                idProducto:15,
            },
            {
                tipo:"Auto",
                nombre:"Toyota COROLLA",
                precio:"13000000",
                caracteristicas: "Modelo 2022, 0Km, 1.8",
                img: "./img/Producto/auto/auto2.png",
                idProducto:11,
            },
            {
                tipo:"Auto",
                nombre:"Toyota PRIUS",
                precio:"4000000",
                caracteristicas: "Modelo 2022, 0km, Hybrid",
                img: "./img/Producto/auto/auto3.png",
                idProducto:12,
            },  
        ];
        this.carritoCompras=carritoCompras;
        this.precioCarrito=0;
        const pagoEfectivo=0.8;
        const pagoDebito=1;
        const pagoCredito=1.6;
    }

}

let nombreUsuario =document.getElementById("nombreUsuario").value;
let apellidoUsuario =document.getElementById("apellidoUsuario").value;
let mail =document.getElementById("mail").value;
let contraseña =document.getElementById("contraseña").value;
let contraseña2 =document.getElementById("contraseña2").value;
let formularioRegistroUsuario =document.getElementById("formularioRegistroUsuario");

console.log("nombre usuario antes: "+nombreUsuario);

formularioRegistroUsuario.addEventListener("submit", validarUsuario);
function validarUsuario(evento){
    evento.preventDefault();
    usuario= new Usuario(nombreUsuario,apellidoUsuario,mail,contraseña);
    console.log("nombre usuario despues: "+nombreUsuario);
    console.log(usuario);

}



// registro
/// pendiente por aplicar
/*

let nombreUsuario =document.getElementById("nombreUsuario");
let apellidoUsuario =document.getElementById("apellidoUsuario");
let mail =document.getElementById("mail");
let contraseña =document.getElementById("contraseña");
let contraseña2 =document.getElementById("contraseña2");
let formularioRegistroUsuario =document.getElementById("formularioRegistroUsuario");

formularioRegistroUsuario.addEventListener("submit", validarUsuario);

function validarUsuario(evento){
    if(nombreUsuario.value==""||apellidoUsuario==""||mail.value==""||contraseña.value==""||contraseña2.value==""){
        evento.preventDefault();
        alert("LLENE TODOS LOS CAMPOS POR FAVOR")
    }else{
        evento.preventDefault();
       usuario= new Usuario(nombreUsuario,apellidoUsuario,mail,contraseña);
        return console.log(usuario);   
    }
}
*/
