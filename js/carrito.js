let precioCarrito=0; 
let leyendaCarroVacio=document.getElementById("carritoVacio");
let metodosPagoCarroVacio=document.getElementById("metodosPagoCarroVacio");


carritoCompras.length==0 && mostrarCarroVacio();
carritoCompras.length>0 && mostrarCarroConProductos();


function mostrarCarroVacio(){
    //Mostrar leyenda carro vacio y esconder metodos de pago
   leyendaCarroVacio.classList.remove("productoEscondido");
   metodosPagoCarroVacio.classList.add("productoEscondido");
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
        <th>ID Producto</th>
        <th>Nombre Producto</th>
        <th>Precio</th>
        <th>Acciones</th>`;
        tTiulo.appendChild(filaTitulo);
        tablaCarrito.appendChild(tTiulo);
    
        let tBody = document.createElement("tBody");
    
        for(const producto of carritoCompras){
            precioCarrito+=parseInt(producto.precio);
            let fila=document.createElement("tr");
            fila.id=producto.idProducto;
            fila.innerHTML=`
                        <td>${producto.idProducto}</td>
                        <td>${producto.tipo} ${producto.nombre}</td>
                        <td>$ ${+producto.precio}</td>
                        <td><button id="agregar${producto.idProducto}" type="button" onclick="confirmacionBorrarDelCarro(${producto.idProducto})" class="btn btn-danger"> borrar </button></td>`;
                        tBody.appendChild(fila);
        }
       
            let ultimaFila=document.createElement("tr");
            ultimaFila.innerHTML=`
                        <td colspan="2" class="sumaTablaPrecio">PRECIO TOTAL</td>
                        <td colspan="2" class="sumaTabla">$ ${+precioCarrito}</td>`;
                        tBody.appendChild(ultimaFila);
    
        tablaCarrito.appendChild(tBody);
        let dondeVaTabla=document.getElementById("agregarTablaCarrito");
        dondeVaTabla.appendChild(tablaCarrito);

        // carga de importes en metodos de pago efectivo
        let valorEfectivo = document.getElementById("importePagoEfectivo");
        valorEfectivo.innerHTML=`El precio del carrito pagando en efectivo es de $ ${+precioCarrito*0.8}`
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
        let precioCarritoCuotas=precioCarrito;
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
