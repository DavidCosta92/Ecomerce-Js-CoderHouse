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

    agregarCarrito(producto){
        this.carritoCompras.push(producto)
    }

    
    finalizarCompra(){
        alert("Acontinuacion mostraremos el resumen de compra del usuario "+this.nombre+" "+this.apellido+"\n"+this.mostrarCarrito());       
    }

    
    mostrarCarrito(){
        let listaItemsCarrito="";
        for(producto of this.carritoCompras){
            listaItemsCarrito += "\n -"+producto.tipo +" "+producto.nombre+" $"+producto.precio;
            this.precioCarrito+=parseFloat(producto.precio);
         }
         return listaItemsCarrito+". \nEl precio TOTAL del carrito es de $"+this.precioCarrito;
    }
    mostrarUsuario(){
        alert("¡Bienvenido "+this.nombre+" "+this.apellido+"!")
    }

    mostrarCarritoTabla(){
        let tablaCarrito = document.createElement("table");
        tablaCarrito.className="table table-striped"
        let tTiulo=document.createElement("thead");
        let filaTitulo=document.createElement("tr");

        filaTitulo.innerHTML=`
        <th>ID Producto</th>
        <th>Nombre Producto</th>
        <th>Precio</th>`;
        tTiulo.appendChild(filaTitulo);
        tablaCarrito.appendChild(tTiulo);

        let tBody = document.createElement("tBody");
        let precioCarrito=0;   
        for(const producto of this.carritoCompras){
            precioCarrito+=parseInt(producto.precio);
            let fila=document.createElement("tr");
            fila.innerHTML=`
                        <td>${producto.idProducto}</td>
                        <td>${producto.tipo} ${producto.nombre}</td>
                        <td>$ ${+producto.precio}</td>`;
                        tBody.appendChild(fila);
        }
        
            let ultimaFila=document.createElement("tr");
            ultimaFila.innerHTML=`
                        <td colspan="2" class="sumaTablaPrecio">PRECIO TOTAL</td>
                        <td class="sumaTabla">$ ${+precioCarrito}</td>`;
                        tBody.appendChild(ultimaFila);

        tablaCarrito.appendChild(tBody);
        let dondeVaTabla=document.getElementById("agregarTablaCarrito");
        dondeVaTabla.appendChild(tablaCarrito);
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
        localStorage.setItem(campoMail.value, JSON.stringify(u));
    }
}
