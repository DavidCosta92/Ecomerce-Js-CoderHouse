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

class Producto{
    constructor(tipo,nombre,precio,caracteristicas,img,idProducto){
        this.tipo=tipo;
        this.nombre=nombre;
        this.precio=precio;
        this.caracteristicas=caracteristicas;
        this.img=img;
        this.idProducto=idProducto;
    }
}
let carritoCompras=[];
function agregarAlCarrito(idProductoPorAgregar){
    let productoPorAgregar;
    for(const producto of productosDisponibles){
        if(producto.idProducto==idProductoPorAgregar){
            productoPorAgregar=producto;
        }
    }
    carritoCompras.push(productoPorAgregar);
    sessionStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
    alert("Producto " +productoPorAgregar.nombre +" agregado al carrito correctamente")
}

