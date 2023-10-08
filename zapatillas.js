//ZAPATILLAS:
async function cargarProductos() {
    const URLJSON = '../productos.json';
    const respuesta = await fetch(URLJSON);
    const json = await respuesta.json();
    return json.sneakers;
    
}


async function renderizarProductoZapatillas(){
    const productos = await cargarProductos();
    const articleZapatillas = document.getElementsByClassName('article__zapatillas')[0];

    productos.forEach(producto => {
        const contenedorZapatilla = document.createElement('div');
        contenedorZapatilla.classList.add('contenidoimagen');
        
        contenedorZapatilla.innerHTML =`
        <a href="../pages/producto.html?id=${producto.id}"><img src="${producto.img}" alt="${producto.nombre}"></a>
        <p class="nombrezapas">${producto.nombre}</p>
        <p class="preciozapas">${producto.precio}</p>
        <div class="botoncarrito">
            <button class='comprar' id=${producto.id} type="submit"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        `;
        articleZapatillas.appendChild(contenedorZapatilla);
    });
    
    const botonesComprar = document.querySelectorAll('.comprar');
    for (const boton of botonesComprar) {
        boton.addEventListener('click', () => {
            console.log('Hiciste click en el boton cuyo id es ' + boton.id);
            const prodACarro = productos.find((producto) => producto.id == boton.id);
            agregarAlCarrito(prodACarro);
        });
    };
}

renderizarProductoZapatillas();



//filtros

