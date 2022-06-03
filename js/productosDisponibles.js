// Funciones a llamar
//Busca un usuario activo, y luego obtiene el carrito de compras
let usuarioActivo=JSON.parse(sessionStorage.getItem("usuarioActivo"))
let carritoCompras;
obtenerCarrito();
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
// aplicar a futuro, para SUBIR PRODUCTOS DESDE LA PAGINA DE CARGA de productos en vez de array...
class Producto{
    constructor(tipo,nombre,precio,caracteristicas,img,idProducto){
        this.tipo=tipo;
        this.nombre=nombre;
        this.precio=precio;
        this.caracteristicas=caracteristicas;
        this.img=img;
        this.idProducto=idProducto;
        this.unidadesEnCarro=0;
    }
}

function obtenerCarrito(){
    carritoCompras=usuarioActivo?.carritoCompras; 
    // si el usuario no esta logueado, sigue permitiendo la ejecucion, para mostrar productos
}


function confirmacionBorrarDelCarro(idProductoPorBorrar){
    Swal.fire({
        title: '¿Estas seguro?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: 'rgba(60, 60, 167,0.9)', 
        confirmButtonText: 'Si, eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
            borrarDelCarrito(idProductoPorBorrar);
        }
      })
}

function borrarDelCarrito(idProductoPorBorrar){
    let productoPorBorrar;
    for(const producto of productosDisponibles){
        if(producto.idProducto==idProductoPorBorrar){
            productoPorBorrar=producto;
        }
    }

    //saber el indice del producto a borrar dentro del array carritoCompras, luego lo elimino y actualizo el carro
    let indexProductoPorBorrar= carritoCompras.findIndex(producto =>producto.idProducto==idProductoPorBorrar);
    let elementoBorrado= carritoCompras.splice(indexProductoPorBorrar,1);
    
    actualizarEstadoUsuarioSessionS(); 
    toastBorradoCarro(elementoBorrado); /////// =====>>>> AUN NO se muestra porque estoy recargando pagina.. <<<<===== //////
    location.reload();   /////// =====>>>> deberia poner metodo de borrado de elemento! <<<<===== //////
}
function agregarOtraUnidadEnCarro(){
    unidadesEnCarro++;
}
/* POR TERMINAR
estoy cargando un id de producto como id de tabla.. usar eso para corroborar
function agregarAlCarrito(idProductoPorAgregar){
    let productoPorAgregar;
    console.log(" mande el id "+idProductoPorAgregar+" para agregar al carro")
    console.log("el carro actualmente esta compuesto por "+carritoCompras);
    for(const productoEnCarro of carritoCompras){
        console.log("estoy iterando en carrito de compras..")
        if(productoEnCarro.idProducto==idProductoPorAgregar){
            agregarOtraUnidadEnCarro();
            sessionStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
            alert("Agreagaste otra unidad de "+productoEnCarro.nombre);

        } else{
             //logica de agregar un producto nuevo
            for(const producto of productosDisponibles){
                if(producto.idProducto==idProductoPorAgregar){
                    productoPorAgregar=producto;
                }
            }
            carritoCompras.push(productoPorAgregar);
            sessionStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));
            alert("Producto " +productoPorAgregar.nombre +" agregado al carrito correctamente")
        }
    } 
}
*/
function agregarAlCarrito(idProductoPorAgregar){
    let productoPorAgregar;
    for(const producto of productosDisponibles){
        if(producto.idProducto==idProductoPorAgregar){
            productoPorAgregar=producto;
        }
    }   
    usuarioActivo?.carritoCompras.push(productoPorAgregar)? actualizarEstadoUsuarioSessionS() : pedirLogin();
    usuarioActivo!=null && toastAgregarCarro(productoPorAgregar);
    usuarioActivo!=null && modificarBotonAgregar(idProductoPorAgregar);
}

function modificarBotonAgregar(idProductoPorAgregar){
    let botonAgregarPorCambiar=document.getElementById("agregar"+idProductoPorAgregar);
    botonAgregarPorCambiar.style.backgroundColor="rgba(60, 60, 167,0.9)";
    botonAgregarPorCambiar.innerHTML="En carrito";
}

function actualizarEstadoUsuarioSessionS(){
    sessionStorage.setItem("usuarioActivo", JSON.stringify(usuarioActivo));
}

function pedirLogin(){
    vex.dialog.prompt({
        message: 'Por favor coloca Usuario y contraseña para continuar',
        placeholder: 'Usuario',
        callback: function (usuarioIngresado) {
            if(usuarioIngresado==""){
                alert("Por favor coloca un usuario valido");
            } else {
                let usuarioRegistradoEnStorage= JSON.parse(localStorage.getItem(usuarioIngresado));
                if(usuarioRegistradoEnStorage){
                    //pedir contraseña
                    vex.dialog.prompt({
                    message: 'Por favor contraseña',
                    placeholder: 'Contraseña',
                    callback: function (value) {
                        if(value==usuarioRegistradoEnStorage.contraseña){
                        // si contraseña correcta, loguear y actualizar
                            alertaLoginExitoso();
                            sessionStorage.setItem("usuarioActivo", JSON.stringify(usuarioRegistradoEnStorage));
                            
                            }
                        }
                    })
                }
            }
        }
    })
}





function toastAgregarCarro(productoPorAgregar){
    Toastify({
        text: `${productoPorAgregar.tipo} ${productoPorAgregar.nombre} ¡Agregado al carrito!`,
        duration: 5000,
        destination: "views/carrito.html",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "rgba(60, 60, 167,0.9)",
        },
      }).showToast();
}

function toastBorradoCarro(elementoBorrado){
    Toastify({
        text: `${elementoBorrado.tipo} ${elementoBorrado.nombre} ¡Ha sido borrado del carrito!`,
        duration: 5000,
        destination: "carrito.html",
        newWindow: true,
        close: true,
        gravity: "bottom",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "rgba(255, 0, 13, 0.8);",
        },
      }).showToast();

}

function alertaLoginExitoso(){
    let timerInterval
    Swal.fire({
    title: 'Login Exitoso',
    html: '',
    timer: 800,
    timerProgressBar: true,
    didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft()
        }, 100)
    },
    willClose: () => {
        clearInterval(timerInterval)
    }
    }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
        window.location="./index.html";
    }
    })
}