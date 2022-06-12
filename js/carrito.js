let precioCarrito; 
let leyendaCarroVacio=document.getElementById("carritoVacio");
let metodosPagoCarroVacio=document.getElementById("metodosPagoCarroVacio");
let botonFinalizarCompraEfectivo=document.getElementById("botonFinalizarCompraEfectivo");
let botonFinalizarCompraCredito=document.getElementById("botonFinalizarCompraCredito");


carritoCompras.length==0 && mostrarCarroVacio();
carritoCompras.length>0 && mostrarCarroConProductos();

function calcularPrecioCarrito(){
    precioCarrito=0;
    for (const prod of carritoCompras){
        precioCarrito+=(prod.precio*prod.cantidad);  
    }
    return precioCarrito;
}

function actualizarDatosCarrito(){
    let precio=calcularPrecioCarrito();
     //actualiza todos los items que utilizan precio carrito
     document.getElementById("sumaTotalCarrito").innerHTML=`$ ${precio}`;
     let valorEfectivo = document.getElementById("importePagoEfectivo");
     valorEfectivo.innerHTML=`El precio del carrito pagando en efectivo es de $ ${calcularPrecioCarrito()*0.8}`
     document.getElementById("importePagoCredito").innerHTML="";
     tablaCuotas();
}

function mostrarCarroVacio(){
    //Mostrar leyenda carro vacio y esconder metodos de pago
   leyendaCarroVacio.classList.remove("productoEscondido");
   metodosPagoCarroVacio.classList.add("productoEscondido");
   botonFinalizarCompraEfectivo.classList.add("productoEscondido");
   botonFinalizarCompraCredito.classList.add("productoEscondido");
}
function mostrarCarroConProductos(){
    //Escoder leyenda carro vacio
    leyendaCarroVacio.classList.add("productoEscondido");
    metodosPagoCarroVacio.classList.remove("productoEscondido");
    mostrarCarritoTabla();
}

function mostrarCarritoTabla(){
    let usuarioActivo=JSON.parse(sessionStorage.getItem("usuarioActivo"))
    let carritoCompras=usuarioActivo.carritoCompras;
    
    if(carritoCompras.length>0){
        let tablaCarrito = document.createElement("table");
        tablaCarrito.className="table table-striped"
        tablaCarrito.id="tablaCarrito";
        let tTiulo=document.createElement("thead");
        let filaTitulo=document.createElement("tr");
    
        filaTitulo.innerHTML=`
        <th colspan="2">Producto</th>
        <th class="txtCenter">Cantidad</th>
        <th class="txtCenter">Precio Un</th>
        <th class="txtCenter">Precio Total</th>
        <th class="txtCenter">Acciones</th>`;
        tTiulo.appendChild(filaTitulo);
        tablaCarrito.appendChild(tTiulo);
    
        let tBody = document.createElement("tBody");
        tBody.id="tBodyCarrito";
    
        for(const producto of carritoCompras){
            precioCarrito+=parseInt(producto.precio);
            let fila=document.createElement("tr");
            fila.id=`fila${producto.idProducto}`;
            fila.innerHTML=`
                        <td colspan="2">${producto.tipo} ${producto.nombre}</td>
                        <td class="txtCenter" id="cantidadProducto${producto.idProducto}">${producto.cantidad}</td>
                        <td class="txtCenter">$ ${+producto.precio}</td>
                        <td class="txtCenter" id="precioTotal${producto.idProducto}">$ ${+producto.precio*producto.cantidad}</td>
                        <td class="botonesAccion">
                            <button type="button" onclick="agregarOtraUnidadAlCarro(${producto.idProducto})" class="btn btn-success btnAgregar"> + 1 </button>
                            <button type="button" onclick="quitarUnaUnidadDelCarro(${producto.idProducto})" class="btn btn-warning btnBorrar"> - 1 </button>
                            <button type="button" onclick="confirmacionBorrarDelCarro(${producto.idProducto})" class="btn btn-danger btnEliminar"> Eliminar </button>

                        </td>`;
                        tBody.appendChild(fila);
        }
       
            let ultimaFila=document.createElement("tr");
            ultimaFila.innerHTML=`
                        <td colspan="3" class="sumaTablaPrecio">PRECIO TOTAL</td>
                        <td colspan="2" class="sumaTabla" id="sumaTotalCarrito">$ ${calcularPrecioCarrito()}</td>
                        <td colspan="2" class="sumaTablaPrecio"></td>`;
                        tBody.appendChild(ultimaFila);
    
        tablaCarrito.appendChild(tBody);
        let dondeVaTabla=document.getElementById("agregarTablaCarrito");
        dondeVaTabla.appendChild(tablaCarrito);

        // carga de importes en metodos de pago efectivo
        let valorEfectivo = document.getElementById("importePagoEfectivo");
        valorEfectivo.innerHTML=`El precio del carrito pagando en efectivo es de $ ${calcularPrecioCarrito()*0.8}`
        let textoPagoEfectivo=document.getElementById("multiCollapseExample1");
        textoPagoEfectivo.appendChild(valorEfectivo);
    
        // carga tabla de importes en metodos de pago credito
        tablaCuotas();
    } 
}


function tablaCuotas(){
    let tablaCuotas = document.createElement("table");
        tablaCuotas.className="table table-striped textoTablaCuotas"
        let tTiulotablaCuotas=document.createElement("thead");
        let filaTitulotablaCuotas=document.createElement("tr");
    
        filaTitulotablaCuotas.innerHTML=`
        <th>Cantidad Cuotas</th>
        <th>Valor Cuotas</th>
        <th>Precio Total</th>`;
        tTiulotablaCuotas.appendChild(filaTitulotablaCuotas);
        tablaCuotas.appendChild(tTiulotablaCuotas);
    
        let tBodytablaCuotas = document.createElement("tBody");
        let precioCarritoCuotas=calcularPrecioCarrito();
        let tasaMensualInteres=0.05;   

        for (let cantidadCuota=1; cantidadCuota<=12; cantidadCuota++){
            let filaCuota=document.createElement("tr");
            let valorCuota=Math.round((precioCarritoCuotas*(1+tasaMensualInteres*cantidadCuota))/cantidadCuota);
            filaCuota.innerHTML=`
                        <td>${cantidadCuota}</td>
                        <td>$ ${valorCuota}</td>
                        <td>$ ${valorCuota*cantidadCuota}</td>`;
                        tBodytablaCuotas.appendChild(filaCuota);
        }
        tablaCuotas.appendChild(tBodytablaCuotas);
        let dondeVaTablaCuotas =document.getElementById("importePagoCredito");
        dondeVaTablaCuotas.appendChild(tablaCuotas);
}


function finalizarCompra(){
    Swal.fire({
        title: 'Excelente',
        text: "Seras redirigido a la pagina de pago, hasta pronto!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: 'green',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sii!'
      }).then((result) => {
        if (result.isConfirmed) {
            window.location.href="https://www.mercadopago.com.ar";
        }
      })
}