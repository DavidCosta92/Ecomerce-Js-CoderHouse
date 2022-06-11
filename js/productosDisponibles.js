//Busca un usuario activo, y luego obtiene el carrito de compras
let usuarioActivo=JSON.parse(sessionStorage.getItem("usuarioActivo"))
let carritoCompras;
let productosDisponibles=[];

obtenerProductosAPI();
obtenerCarrito();


// Obtener productos desde archivo JSON local
function obtenerProductosAPI(){
    const URLGET="js/productos.json"
    fetch(URLGET)
        .then((resultado) => resultado.json())
        .then((info)=>{
            productosDisponibles=info.productosDisponibles;
            cargarProductosDeArrayACards(productosDisponibles)
        })    
}

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



// si el usuario no esta logueado, sigue permitiendo la ejecucion, para mostrar productos
function obtenerCarrito(){
    carritoCompras=usuarioActivo?.carritoCompras; 
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
function agregarNuevoProducto(id){
    let productoPorAgregar;
    for(const producto of productosDisponibles){
        if(producto.idProducto==id){
            productoPorAgregar=producto;
        }
    }
    usuarioActivo.carritoCompras.push(productoPorAgregar)
    actualizarEstadoUsuarioSessionS()
    toastAgregarCarro(productoPorAgregar);
    modificarBotonAgregar(id);
}

function agregarOtraUnidadAlCarro(id){
    for(const producto of usuarioActivo.carritoCompras){
        if(producto.idProducto==id){
            producto.cantidad++;
            actualizarEstadoUsuarioSessionS();
            document.getElementById("cantidadProducto"+id).innerHTML=producto.cantidad;
            document.getElementById("precioTotal"+id).innerHTML=producto.cantidad*producto.precio;
            actualizarDatosCarrito();
            
        }
    }
}

function quitarUnaUnidadDelCarro(id){
    for(const producto of usuarioActivo.carritoCompras){
        if(producto.idProducto==id){
            if(producto.cantidad>1){
                producto.cantidad--;
                document.getElementById("cantidadProducto"+id).innerHTML=producto.cantidad;
                document.getElementById("precioTotal"+id).innerHTML=producto.cantidad*producto.precio;
                actualizarEstadoUsuarioSessionS();
                actualizarDatosCarrito();
            } if(producto.cantidad==1){
                confirmacionBorrarDelCarro(id);
            }
        }
    }

}

function agregarAlCarrito(idProductoPorAgregar){
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
            agregarNuevoProducto(idProductoPorAgregar);

        }else if(productoEnCarro){
            agregarOtraUnidadAlCarro(idProductoPorAgregar);

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
            let usuarioRegistradoEnStorage= JSON.parse(localStorage.getItem(usuarioIngresado));
            if(usuarioRegistradoEnStorage==null){
                //alert("Por favor coloca un usuario valido");
                vex.dialog.confirm({
                    message: 'El usuario no esta registrado, ¡Quieres registrarte?',
                    callback: function (value) {
                        if(value){
                            window.location="./views/nuevoUsuario.html";
                        } 
                    }
                })
            }else {
                vex.dialog.prompt({
                    message: 'Por favor, ingresa la contraseña',
                    placeholder: 'Contraseña',
                    callback: function (value) {
                        if(value==usuarioRegistradoEnStorage.contraseña){
                            alertaLoginExitoso();
                            sessionStorage.setItem("usuarioActivo", JSON.stringify(usuarioRegistradoEnStorage));
                            }
                        }
                    })
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