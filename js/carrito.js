mostrarCarritoTabla();
console.log(carritoCompras.length)

function mostrarCarritoTabla(){
    let carritoCompras=JSON.parse(sessionStorage.getItem("carritoCompras"));
    let leyendaCarroVacio=document.getElementById("carritoVacio");
    if(carritoCompras!=null){
        //Escoder leyenda carro vacio
        leyendaCarroVacio.classList.add("productoEscondido");

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
        let precioCarrito=0;   
    
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
    } if(carritoCompras==null||carritoCompras.length==0){
        //Mostrar leyenda carro vacio
        leyendaCarroVacio.classList.remove("productoEscondido");
    }
}

