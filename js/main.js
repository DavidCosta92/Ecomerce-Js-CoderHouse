//variables globales
let campoBusqueda=document.getElementById("campoDeBusqueda");
let textoBusquedaVacia=document.getElementById("textoBusquedaVacia");
let cardsDeProductos = document.getElementById("cardsDeProductos");

let iconoCategoriaTodo= document.getElementById("textoVerTodo");
let iconoCategoriaAuto= document.getElementById("auto");
let iconoCategoriaCamioneta= document.getElementById("camioneta");
let iconoCategoriaCelular= document.getElementById("celular");
let iconoCategoriaNotebook= document.getElementById("notebook");
let iconoCategoriaLineaBlanca= document.getElementById("lineaBlanca");
let iconoCategoriaTv= document.getElementById("tv");

//llamado funciones iniciales y eventos
// BUSQUEDA AL ESCRIBIR LETRAS
campoBusqueda.onkeyup=()=> busquedaPorLetra(campoBusqueda.value);

// ICONOS CATEGORIAS
iconoCategoriaTodo.onclick=()=> busquedaPorLetra("");
iconoCategoriaAuto.onclick=()=> busquedaPorLetra("auto");
iconoCategoriaCamioneta.onclick=()=> busquedaPorLetra("camioneta");
iconoCategoriaCelular.onclick=()=> busquedaPorLetra("celular");
iconoCategoriaNotebook.onclick=()=> busquedaPorLetra("notebook");
iconoCategoriaLineaBlanca.onclick=()=> busquedaPorLetra("lineaBlanca");
iconoCategoriaTv.onclick=()=> busquedaPorLetra("tv");



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

function arrayTipos(array,tipo){
    let arrayDelTipo=[];
    for(const producto of array){
        if(producto.tipo==tipo){
            arrayDelTipo.push(producto);
        }
    }
    return arrayDelTipo;
}

function mostrarCategoria(categoria){
    document.getElementById("cardsDeProductos").innerHTML="";
    cargarProductosDeArrayACards(arrayTipos(productosDisponibles,categoria));
}



function busquedaPorLetra(letra){
    let textoIngresado = letra.toLowerCase();
    console.log(textoIngresado);
    let arrayResultadoBusqueda=[];
    for(const producto of productosDisponibles){
        let tipo = producto.tipo.toLowerCase();
        if(tipo.indexOf(textoIngresado) !==-1){
            arrayResultadoBusqueda.push(producto)
        }
    }
    let contenedorDeCards = document.getElementById("cardsDeProductos");
    contenedorDeCards.innerHTML="";

    cargarProductosDeArrayACards(arrayResultadoBusqueda);
    if(arrayResultadoBusqueda.length==0 && textoIngresado!=""){ 
        textoBusquedaVacia.innerHTML="¡Lo lamentamos pero no tenemos el producto buscado..";
        cardsDeProductos.appendChild(textoBusquedaVacia);
    } if(textoIngresado==""){ 
        contenedorDeCards.innerHTML="";
        cargarProductosDeArrayACards(productosDisponibles);
    }
}
