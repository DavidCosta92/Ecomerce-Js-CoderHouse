

// USUARIOS
class Usuario{
    constructor (nombre,apellido,dineroInicial){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dineroInicial=dineroInicial;
        this.dineroDisponible=dineroInicial;
        let carritoCompras=[];
        this.carritoCompras=carritoCompras;
        this.precioCarrito=0;
        const pagoEfectivo=0.8;
        const pagoDebito=1;
        const pagoCredito=1.6;
    }
    agregarCarrito(producto){
        this.dineroDisponible-=producto.precio;
        this.carritoCompras.push(producto)
    }
    puedeComprar(producto){
        return parseFloat(producto.precio)<=this.dineroDisponible;
    }
    
    finalizarCompra(){
        alert("Acontinuacion mostraremos el resumen de compra del usuario "+this.nombre+" "+this.apellido+"\n"+this.mostrarCarrito());       
        alert("\n El remanente de su deposito es de $ "+(this.dineroInicial-this.precioCarrito))
    }
    mostrarCarrito(){
        let listaItemsCarrito="";
        for(producto of this.carritoCompras){
            listaItemsCarrito += "\n -"+producto.tipo +" "+producto.nombre+" $"+producto.precio;
            this.precioCarrito+=parseFloat(producto.precio);
         }
         return listaItemsCarrito+". \nEl precio TOTAL del carrito es de $"+this.precioCarrito;
    }
}

function crearUsuario(){
    let nombre= pedirNombre();
    let apellido =pedirApellido();
    let dineroInicial=pedirDeposito();
    return new Usuario (nombre,apellido,dineroInicial);
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

function pedirDeposito(){
    let intento;
    let invalidez=true;
    do{
        intento=prompt("Ingresa el valor a depositar");
        if(isNaN(intento)){
            alert("Por favor ingresa valores numericos")
        } if(intento<=0){
            alert("Por favor, ingresa valores mayores a 0")
        }
        else if(intento>=0&&!isNaN(intento)){
           invalidez=false;
           break;
        }
    }while(invalidez);
    return intento;
}

function ofertarProductos(array,usuario){
    let arrayPrecioAscendente=ordenarPorPrecio(array);
    let leyendaFondosInsuficientes=false;
    for(producto of arrayPrecioAscendente){
        if(usuario.puedeComprar(producto)){
            ofertarProducto(producto,usuario);
        }else{
            leyendaFondosInsuficientes=true;
        }        
    }
    if(leyendaFondosInsuficientes){
        alert("No disponemos de productos dentro de su presupuesto, por favor ingrese mas dinero en su proxima sesion.")
    }
    usuario.finalizarCompra();
}

function ofertarProducto(producto,usuario){
    validarRespuesta(producto,usuario);
 }

function validarRespuesta(producto,usuario){
    do{
        let comprarProducto= prompt(usuario.nombre+", deseas agregar al carrito "+producto.tipo +" "+producto.nombre
        +" a precio especial de solo "+ producto.precio+"? \n con las siguientes caracteristicas: "
        +producto.caracteristicas+"\nPresione 'SI' o 'NO'");
        
        if(comprarProducto.toUpperCase()=="SI"){
            alert("¡Producto agregado! \nSeguiremos mostrando otros productos")
            usuario.agregarCarrito(producto);
            break;
        }else if(comprarProducto.toUpperCase()=="NO"){
            alert("¡Que lastima! \nSeguiremos mostrando otros productos")
            break;
        }else{
            alert("Disculpa, no pudimos entender, Escribe 'SI' o 'NO' por favor.")
        }
    }while(true)
}

function ordenarPorPrecio(array){
    return array.sort((a,b) => a.precio - b.precio);
}

function calcularTiposDeProducto(productosDisponibles){
    let tiposDeProducto=[];
    for(const producto of productosDisponibles){
        if(!tiposDeProducto.includes(producto.tipo)){
            tiposDeProducto.push(producto.tipo)
        }
    }   
    return tiposDeProducto;
}

function eleccionRubro(productosDisponibles){
    let tiposDeProducto= calcularTiposDeProducto(productosDisponibles);
    let productosAOfertar=[];
    let invalidezRespuesta=true;
    let listaDeTipos="";
    let indice=0;
    for(const tipo of tiposDeProducto){
        indice++;
        listaDeTipos+="\nRubro "+indice+": "+tipo;
    }
    do{
        let intentoRubro=parseInt(prompt("Por favor elije un rubro de producto, coloca solo el valor numerico por favor "+listaDeTipos)); 
        if(isNaN(intentoRubro)){
            alert("Por favor ingresa un valor numerico");
            invalidezRespuesta=true;
        }if(intentoRubro>0 && intentoRubro<=tiposDeProducto.length){
            let filtroTipo=tiposDeProducto[intentoRubro-1];
            productosAOfertar=productosDisponibles.filter((produc)=>produc.tipo==filtroTipo);
            invalidezRespuesta=false;
        }
        else{   
            alert("Por favor ingresa un valor DENTRO del rango de opciones de 1 a "+tiposDeProducto.length);
            invalidezRespuesta=true;
        }
    } while(invalidezRespuesta);
    return productosAOfertar;
}

function iniciar(){
    alert("¡Bienvenido a Fravega! Te pediremos que te registres para continuar por favor");
    const u1=crearUsuario();
    ofertarProductos(eleccionRubro(productosDisponibles),u1);
    alert("¡Hasta luego!");
}

//iniciar();




