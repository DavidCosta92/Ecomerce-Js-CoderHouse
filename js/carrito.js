mostrarCarritoTabla();

function mostrarCarritoTabla(){
    let tablaCarrito = document.createElement("table");
    tablaCarrito.className="table table-striped"
    let tTiulo=document.createElement("thead");
    let filaTitulo=document.createElement("tr");

    filaTitulo.innerHTML=`
    <th>ID Producto</th>
    <th>Nombre Producto</th>
    <th>Precio</th>`;
    tTiulo.appendChild(filaTitulo);
    tablaCarrito.appendChild(tTiulo);

    let tBody = document.createElement("tBody");
    let precioCarrito=0;   
    let carritoCompras=JSON.parse(sessionStorage.getItem("carritoCompras"));

    for(const producto of carritoCompras){
        precioCarrito+=parseInt(producto.precio);
        let fila=document.createElement("tr");
        fila.innerHTML=`
                    <td>${producto.idProducto}</td>
                    <td>${producto.tipo} ${producto.nombre}</td>
                    <td>$ ${+producto.precio}</td>`;
                    tBody.appendChild(fila);
    }
    
        let ultimaFila=document.createElement("tr");
        ultimaFila.innerHTML=`
                    <td colspan="2" class="sumaTablaPrecio">PRECIO TOTAL</td>
                    <td class="sumaTabla">$ ${+precioCarrito}</td>`;
                    tBody.appendChild(ultimaFila);

    tablaCarrito.appendChild(tBody);
    let dondeVaTabla=document.getElementById("agregarTablaCarrito");
    dondeVaTabla.appendChild(tablaCarrito);


}




/// en vez de crear usuario, debo obtenerlo desde la sesion.. averiguar sobre usuario activo!!!
/*
let u1= new Usuario("david", "costa", "davidcst2991@gmail.com", "154647572");
u1.mostrarCarritoTabla();
*/