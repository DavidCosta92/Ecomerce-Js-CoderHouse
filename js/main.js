// base de productos en forma de array
const productosDisponibles=[
    {
        tipo:"Notebook",
        nombre:"Bgh",
        precio:"20000",
        caracteristicas: "4gb ram, 256gb sdd, 12 pulgadas",
        img: "./img/Producto/note-bgh/note-bgh-1.png",
        idProducto:1,
    },
    {
        tipo:"Notebook",
        nombre:"Hp",
        precio:"30000",
        caracteristicas: "8gb ram, 1tb sdd, 14 pulgadas",
        img: "./img/Producto/note-bgh/note-bgh-1.png",
        idProducto:2 ,
    },
    {
        tipo:"Notebook",
        nombre:"Acer",
        precio:"4000",
        caracteristicas: "4gb ram, \n512gb sdd, \n17.1 pulgadas",
        img: "./img/Producto/note-bgh/note-bgh-1.png",
        idProducto:3,
    },
    {
        tipo:"SmartTV",
        nombre:"Philips",
        precio:"35000",
        caracteristicas: "40 pulgadas, Hdmi, 4K",
        img: "./img/Producto/smart-32/smartTv32.webp",
        idProducto:4,
    },
    {
        tipo:"SmartTV",
        nombre:"Next",
        precio:"130000",
        caracteristicas: "70 pulgadas, Hdmi, 8K",
        img: "./img/Producto/smart-32/smartTv32c.webp",
        idProducto:5,
    },
    {
        tipo:"SmartTV",
        nombre:"Lg",
        precio:"40000",
        caracteristicas: "27 pulgadas, FullHd",
        img: "./img/Producto/smart-32/smartTv32a.webp",
        idProducto:6,
    },
    {
        tipo:"SmartTV",
        nombre:"Lg",
        precio:"40000",
        caracteristicas: "27 pulgadas, FullHd",
        img: "./img/Producto/smart-32/smartTv32d.webp",
        idProducto:6,
    },
    {
        tipo:"Celular",
        nombre:"Xiaomi",
        precio:"20000",
        caracteristicas: "4gb ram, 256gb rom, 5,7 pulgadas",
        img: "./img/Producto/celular/cel1.png",
        idProducto:7,
    },
    
    {
        tipo:"Celular",
        nombre:"Motorola",
        precio:"30000",
        caracteristicas: "8gb ram, cuadruple camara, 5,2 pulgadas",
        img: "./img/Producto/celular/cel2.png",
        idProducto:8,
    },
    {
        tipo:"Celular",
        nombre:"Xiaomi",
        precio:"4000",
        caracteristicas: "4gb ram, \n512gb sdd, \n17.1 pulgadas",
        img: "./img/Producto/celular/cel4.png",
        idProducto:9,
    },
    {
        tipo:"Celular",
        nombre:"Iphone 11",
        precio:"4000",
        caracteristicas: "12gb ram, cuadruple camara, 5,2 pulgadas",
        img: "./img/Producto/celular/cel3.png",
        idProducto:9,
    },
    {
        tipo:"Auto",
        nombre:"Ford FOCUS",
        precio:"3500000",
        caracteristicas: "Modelo 2022, 1.8, 0km",
        img: "./img/Producto/auto/auto1.png",
        idProducto:10,
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
    {
        tipo:"Camioneta",
        nombre:"Ford RAPTOR",
        precio:"3500000",
        caracteristicas: "Modelo 2022, 2.0, 0km",
        img: "./img/Producto/camioneta/camioneta1.webp",
        idProducto:13,
    },
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
]

//PRODUCTOS
//Obtener productos desde array
function ArrayProductosParaViews(array){
    for(const producto of array){
        producto.img="."+producto.img;
    }
    return array;
}

function arrayTipos(array,tipo){
    let arrayDelTipo=[];
    for(const producto of array){
        if(producto.tipo==tipo){
            arrayDelTipo.push(producto);
        }
    }
    return arrayDelTipo;
}

function cargarProductosDeArrayACards(array){
    let cardsDeProductos = document.getElementById("cardsDeProductos");
        for(const producto of array){
            let card = document.createElement("div");           
            card.innerHTML = `
            <div class="card text-center ${producto.tipo}" style="width: 18rem;"class="card text-center" style="width: 18rem;">
                <div class="card-body cartaProducto">
                    <div class="contenedorFotoProductoCard">
                        <img src="${producto.img}" id="" class="card-img-top img-fluid fotoProductoCard" alt="">
                    </div>
                    <h2 class="card-title">${producto.nombre}</h2>
                    <h5 class="card-subtitle mb-2 text-muted">${producto.caracteristicas}</h5>
                    <p class="card-text textoPrecioCardProducto">$${producto.precio}</p>
    
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button id="agregar${producto.idProducto}" type="button" onclick="" class="btn btn-success"> Agregar </button>
                    </div>
                </div>
            </div>      
            `;
            cardsDeProductos.appendChild(card);
        }
}

function mostrarCategoria(categoria){
    let todosLosProductos=document.getElementsByClassName("card text-center")
    let categoriaCorrecta= document.getElementsByClassName(categoria);
    for(const producto of todosLosProductos){
       producto.classList.add("productoEscondido");
       
    }
    for(const producto of categoriaCorrecta){
        producto.classList.remove("productoEscondido");
        producto.style.display = "flex";
    }
}


// buscar con nav.. 
let busquedaCategoriaForm=document.getElementById("busquedaCategoria");
busquedaCategoriaForm.addEventListener("submit",busquedaCategoria);

function busquedaCategoria(evento){
    if(isNaN(campoDeBusqueda.value)&& campoDeBusqueda.value!=""){
        evento.preventDefault();
        let categoriaBusqueda=""+campoDeBusqueda.value;
        mostrarCategoria(categoriaBusqueda);
    } if(!isNaN(campoDeBusqueda.value)){
        campoDeBusqueda.oninput=()=>{
            document.campoDeBusqueda.style.color="red";
        }
    }
}

// mostrar categorias segun links nav
let catCelular = document.getElementById("catCelular");
let catComputadora = document.getElementById("catComputadora");
let catSmartTV = document.getElementById("catSmartTV");
let catAuto = document.getElementById("catAuto");
let catCamioneta = document.getElementById("catCamioneta");

catCelular.onclick=()=>(mostrarCategoria("Celular"));
catComputadora.onclick=()=>(mostrarCategoria("Computadora"));
catSmartTV.onclick=()=>(mostrarCategoria("SmartTV"));
catAuto.onclick=()=>(mostrarCategoria("Auto"));
catCamioneta.onclick=()=>(mostrarCategoria("Camioneta"));

/// CARRITO



/// USUARIO
/// CREACION DE USUARIO, EDITAR A FUTURO!!
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

    /// MODIFICAR PARA CREAR TABLA DE PRODUCTOS EN CARRITO CON BS
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
        for(const producto of this.carritoCompras){
            let fila=document.createElement("tr");
            fila.innerHTML=`
                        <td>${producto.idProducto}</td>
                        <td>${producto.tipo} ${producto.nombre}</td>
                        <td>$${+producto.precio}</td>`;
                        tBody.appendChild(fila);
        }

        tablaCarrito.appendChild(tBody);
        let dondeVaTabla=document.getElementById("agregarTablaCarrito");
        dondeVaTabla.appendChild(tablaCarrito);
    }      
       
}

let u1= new Usuario("david", "costa", "davidcst2991@gmail.com", "154647572");

u1.mostrarCarritoTabla();
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



function crearUsuario(){
    let nombre= pedirNombre();
    let apellido =pedirApellido();
    return new Usuario (nombre,apellido);
}

function pedirNombre(){
    let intento;
    let invalidez=true;
    do{
        intento=prompt("Ingresa tu Nombre");
        if(!isNaN(intento)){
            alert("No se pueden ingresar valores numericos")
        } if(intento.length<3){
            alert("Su nombre de usuario, debe ser mayor a 2 letras")
        }else if(intento.length>=3&&isNaN(intento)){
           invalidez=false;
           break;
        }
    }while(invalidez)
    return intento.toUpperCase();
}
function pedirApellido(){
    let intento;
    let invalidez=true;
    do{
        intento=prompt("Ingresa tu Apellido");
        if(!isNaN(intento)){
            alert("No se pueden ingresar valores numericos")
        } if(intento.length<3){
            alert("Su nombre de usuario, debe ser mayor a 2 letras")
        }
        else if(intento.length>=3&&isNaN(intento)){
            invalidez=false;
            break;
        }
    }while(invalidez)
    return intento.toUpperCase();
}

*/