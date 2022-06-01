let precioCarrito=0; 
mostrarCarritoTabla();
function mostrarCarritoTabla(){
    let usuarioActivo=JSON.parse(sessionStorage.getItem("usuarioActivo"))
    let carritoCompras=usuarioActivo.carritoCompras;
    let leyendaCarroVacio=document.getElementById("carritoVacio");
    let metodosPagoCarroVacio=document.getElementById("metodosPagoCarroVacio");

    if(carritoCompras!=null){
        //Escoder leyenda carro vacio
        leyendaCarroVacio.classList.add("productoEscondido");
        metodosPagoCarroVacio.classList.remove("productoEscondido");

        let tablaCarrito = document.createElement("table");
        tablaCarrito.className="table table-striped"
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
       // let precioCarrito=0;   
    
        for(const producto of carritoCompras){
            precioCarrito+=parseInt(producto.precio);
            let fila=document.createElement("tr");
            fila.innerHTML=`
                        <td>${producto.idProducto}</td>
                        <td>${producto.tipo} ${producto.nombre}</td>
                        <td>$ ${+producto.precio}</td>
                        <td><button id="agregar${producto.idProducto}" type="button" onclick="borrarDelCarrito(${producto.idProducto})" class="btn btn-danger"> borrar </button></td>`;
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
    } if(carritoCompras==null||carritoCompras.length==0){
        //Mostrar leyenda carro vacio y esconder metodos de pago
        leyendaCarroVacio.classList.remove("productoEscondido");
        metodosPagoCarroVacio.classList.add("productoEscondido");

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

        for (let cuota=1; cuota<=12; cuota++){
            let filaCuota=document.createElement("tr");
            let valorCuota=Math.round((precioCarritoCuotas*(1+tasaMensualInteres*cuota))/cuota);
            filaCuota.innerHTML=`
                        <td>${cuota}</td>
                        <td>$ ${valorCuota}</td>
                        <td>$ ${valorCuota*cuota}</td>`;
                        tBodytablaCuotas.appendChild(filaCuota);
        }
        tablaCuotas.appendChild(tBodytablaCuotas);
        let dondeVaTablaCuotas =document.getElementById("importePagoCredito");
        dondeVaTablaCuotas.appendChild(tablaCuotas);
}
