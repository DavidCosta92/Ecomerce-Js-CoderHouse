// Funciones a llamar
//Busca un usuario activo, y luego obtiene el carrito de compras
let usuarioActivo=JSON.parse(sessionStorage.getItem("usuarioActivo"))
let carritoCompras;

obtenerCarrito();
// base de productos en forma de array
/*function obtenerProductosAPI(){
    const URLGET="productos.json"
    fetch(URLGET,{
        mode: 'no-cors'
    })
        .then((resultado) => resultado.json())
        .then((info)=>{
            productosDisponibles=info;
            console.log(productosDisponibles);
        })
        
    return productosDisponibles;
}

obtenerProductosAPI();
*/
// aplicar a futuro, para SUBIR PRODUCTOS DESDE LA PAGINA DE CARGA de productos en vez de array...
class Producto{
    constructor(tipo,nombre,precio,caracteristicas,img,idProducto){
        this.tipo=tipo;
        this.nombre=nombre;
        this.precio=precio;
        this.caracteristicas=caracteristicas;
        this.img=img;
        this.idProducto=idProducto;
        this.cantidad=0;
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

    let indexProductoPorBorrar= carritoCompras.findIndex(producto =>producto.idProducto==idProductoPorBorrar);
    let elementoBorrado= carritoCompras.splice(indexProductoPorBorrar,1);
    
    actualizarEstadoUsuarioSessionS(); 
    toastBorradoCarro(elementoBorrado); 
    let filaABorrar= document.getElementById(`fila${idProductoPorBorrar}`);
    document.getElementById("tBodyCarrito").removeChild(filaABorrar);
    actualizarDatosCarrito();

}

function agregarAlCarrito(idProductoPorAgregar){
    let productoPorAgregar;
    if(usuarioActivo){
        let productoEnCarro;
        for(const producto of usuarioActivo.carritoCompras){
            if(producto.idProducto==idProductoPorAgregar){
                productoEnCarro=true;
            } else {
                productoEnCarro=false;
            }
        }


        if(!productoEnCarro){
            for(const producto of productosDisponibles){
                if(producto.idProducto==idProductoPorAgregar){
                    productoPorAgregar=producto;
                }
            }
            usuarioActivo.carritoCompras.push(productoPorAgregar)
            actualizarEstadoUsuarioSessionS()
            toastAgregarCarro(productoPorAgregar);
            modificarBotonAgregar(idProductoPorAgregar);
        }else if(productoEnCarro){
            for(const producto of usuarioActivo.carritoCompras){
                if(producto.idProducto==idProductoPorAgregar){
                    producto.cantidad++;
                    actualizarEstadoUsuarioSessionS();
                }
            }
        }
    } else {
        pedirLogin();
    }
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