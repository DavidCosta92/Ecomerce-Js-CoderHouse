//Obtener productos desde array
function arrayTipos(array,tipo){
    let arrayDelTipo=[];
    for(const producto of array){
        if(producto.tipo==tipo){
            arrayDelTipo.push(producto);
        }
    }
    return arrayDelTipo;
}

function cargarProductosDeArrayACards(array){
    let cardsDeProductos = document.getElementById("cardsDeProductos");
        for(const producto of array){
            let card = document.createElement("div");           
            card.innerHTML = `
            <div class="card text-center ${producto.tipo}" style="width: 18rem;"class="card text-center" style="width: 18rem;">
                <div class="card-body cartaProducto">
                    <div class="contenedorFotoProductoCard">
                        <img src="${producto.img}" id="" class="card-img-top img-fluid fotoProductoCard" alt="">
                    </div>
                    <h2 class="card-title">${producto.nombre}</h2>
                    <h5 class="card-subtitle mb-2 text-muted">${producto.caracteristicas}</h5>
                    <p class="card-text textoPrecioCardProducto">$${producto.precio}</p>
    
                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button id="agregar${producto.idProducto}" type="button" onclick="agregarAlCarrito(${producto.idProducto})" class="btn btn-success btnAgregarProducto"> Agregar </button>
                    </div>
                </div>
            </div>      
            `;
            cardsDeProductos.appendChild(card);
        }
}

function mostrarCategoria(categoria){
    document.getElementById("cardsDeProductos").innerHTML="";
    cargarProductosDeArrayACards(arrayTipos(productosDisponibles,categoria));
}

// buscar con nav y submit.. 
let busquedaCategoriaForm=document.getElementById("busquedaCategoria");
busquedaCategoriaForm.addEventListener("submit",busquedaCategoria);

function busquedaCategoria(evento){
    if(isNaN(campoBusqueda.value)&& campoBusqueda.value!=""){
        evento.preventDefault();
        let categoriaBusqueda=campoBusqueda.value;
        mostrarCategoria(categoriaBusqueda);
    } if(!isNaN(campoBusqueda.value)){
        campoBusqueda.oninput=()=>{
            document.campoDeBusqueda.style.color="red";
        }
    }
}

// BUSQUEDA AL ESCRIBIR LETRAS
let campoBusqueda=document.getElementById("campoDeBusqueda");
let textoBusquedaVacia=document.getElementById("textoBusquedaVacia");

campoBusqueda.onkeyup=()=>{
    let arrayResultadoBusqueda=[];
    for(const producto of productosDisponibles){
        let tipo = producto.tipo.toLowerCase();
        if(tipo.indexOf(campoBusqueda.value.toLowerCase()) !==-1){
            arrayResultadoBusqueda.push(producto)
        }
    }
    let contenedorDeCards = document.getElementById("cardsDeProductos");
    contenedorDeCards.innerHTML="";


    
    cargarProductosDeArrayACards(arrayResultadoBusqueda);
    textoBusquedaVacia.innerHTML="¡Lo lamentamos pero no tenemos el producto buscado..";

    
    if(contenedorDeCards==""){
        console.log("hola estoy vacio")
        textoBusquedaVacia.innerHTML="¡Lo lamentamos pero no tenemos el producto buscado..";
    }
}







