

/*UTILIZANDO FETCH PARA LLAMAR LOCALMENTE A PRODUCTOS.JSON*/

async function cargarProductos() {
    const URLJSON = 'productos.json';
    const respuesta = await fetch(URLJSON);
    const json = await respuesta.json();
    return json.sneakers;
}

async function renderizarProductoSection1() {
    const productos = await cargarProductos();
    const contenedorProdsSection1 = document.querySelector('.section1');

    const primerosCuatroProductos = productos.slice(0, 4);

    primerosCuatroProductos.forEach(producto => {
        const contenedorProductoSection1 = document.createElement('div');
        contenedorProductoSection1.classList.add('containerimg');

        contenedorProductoSection1.innerHTML = `
            <a href="pages/producto.html?id=${producto.id}"><img class="carruselImagenes" src="${producto.img.slice(1)}" alt="${producto.nombre}"></a>
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

async function renderizarProducto() {
    const productos = await cargarProductos();
    const contenedorProds = document.querySelector('.section2');

    productos.forEach(producto => {
        const contenedorProducto = document.createElement('div');
        contenedorProducto.classList.add('container2');

        contenedorProducto.innerHTML = `
            <a href="pages/producto.html?id=${producto.id}"><img class="carruselImagenes2" src="${producto.img.slice(1)}" alt="${producto.nombre}"></a>
            <p class="nombre">${producto.nombre}</p>
            <p class="precio">$${producto.precio}</p>
            <div class="botoncarrito">
                <button class="comprar" id="${producto.id}" type="submit"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        `;

        contenedorProds.appendChild(contenedorProducto);
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


renderizarProductoSection1();
renderizarProducto();