
/// CREACION DE USUARIO, EDITAR A FUTURO!!
class Usuario{
    constructor (nombre,apellido){
        this.nombre=nombre;
        this.apellido=apellido;
        let carritoCompras=[];
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
//let u=crearUsuario();
//u.mostrarUsuario();