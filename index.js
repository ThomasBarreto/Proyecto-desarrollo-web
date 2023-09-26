function renderizarProductoSection1(productos) {
    const contenedorProdsSection1 = document.querySelector('.section1');

    // Obtener los primeros 4 productos del array
    const primerosCuatroProductos = productos.slice(0, 4);

    primerosCuatroProductos.forEach(producto => {

        const contenedorProductoSection1 = document.createElement('div');
        contenedorProductoSection1.classList.add('containerimg');

        contenedorProductoSection1.innerHTML = `
            <img class="carruselImagenes" src=".${producto.img.slice(2)}" alt="${producto.nombre}">
            <p class="nombre">${producto.nombre}</p>
            <p class="precio">$${producto.precio}</p>
            <div class="botoncarrito">
                <button class="comprar" id="${producto.id}" type="submit">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        `;

        contenedorProdsSection1.appendChild(contenedorProductoSection1);
    });

}

// Llamada a la función con los primeros 4 productos
renderizarProductoSection1(sneakers)

//RENDERIZAR PRODUCTOS EN LA SECTION 2
function renderizarProducto(productos) {
    const contenedorProds = document.querySelector('.section2');

    
    productos.forEach(producto => {

        const contenedorProducto = document.createElement('div');
        contenedorProducto.classList.add('container2');

        contenedorProducto.innerHTML = `
            <img class="carruselImagenes2" src=".${producto.img.slice(2)}" alt="${producto.nombre}">
            <p class="nombre">${producto.nombre}</p>
            <p class="precio">$${producto.precio}</p>
            <div class="botoncarrito">
                <button class="comprar" id=${producto.id} type="submit"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        `;
        contenedorProds.appendChild(contenedorProducto);
    });

    const botonesComprar = document.querySelectorAll('.comprar');
    for (const boton of botonesComprar) {
        //opcion 1 - addEventListener
        boton.addEventListener('click', () => {
            console.log('Hiciste click en el boton cuyo id es ' + boton.id);
            const prodACarro = productos.find((producto) => producto.id == boton.id);
            //cargar producto encontrado al carro
            agregarAlCarrito(prodACarro);
        });
    };
}

renderizarProducto(sneakers);
