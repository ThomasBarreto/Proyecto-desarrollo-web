//ZAPATILLAS:
//ZAPATILLAS:
let zapatillas = [];

async function cargarProductos() {
    const URLJSON = '../productos.json';
    const respuesta = await fetch(URLJSON);
    const json = await respuesta.json();
    zapatillas = json.sneakers;
    return zapatillas;
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

let nikeCheckbox = document.getElementById('nike');
let adidasCheckbox = document.getElementById('adidas');
let vansCheckbox = document.getElementById('vans');

nikeCheckbox.addEventListener('change', () => {
    const isChecked = nikeCheckbox.checked;
    const filteredSneakers = isChecked? filtrarZapatillasPorMarca('Nike') : zapatillas;

    const articleZapatillas = document.querySelector('.article__zapatillas');
    articleZapatillas.innerHTML = '';

    filteredSneakers.forEach(zapatilla => {
        const contenedorZapatilla = document.createElement('div');
        contenedorZapatilla.classList.add('contenidoimagen');

        contenedorZapatilla.innerHTML = `
            <a href="../pages/producto.html?id=${zapatilla.id}"><img src="${zapatilla.img}" alt="${zapatilla.nombre}"></a>
            <p class="nombrezapas">${zapatilla.nombre}</p>
            <p class="preciozapas">${zapatilla.precio}</p>
            <div class="botoncarrito">
                <button class='comprar' id=${zapatilla.id} type="submit"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        `;
        articleZapatillas.appendChild(contenedorZapatilla);
    });
});

adidasCheckbox.addEventListener('change', () => {
    const isChecked = adidasCheckbox.checked;
    const filteredSneakers = isChecked? filtrarZapatillasPorMarca('Adidas') : zapatillas;

    const articleZapatillas = document.querySelector('.article__zapatillas');
    articleZapatillas.innerHTML = '';

    filteredSneakers.forEach(zapatilla => {
        const contenedorZapatilla = document.createElement('div');
        contenedorZapatilla.classList.add('contenidoimagen');

        contenedorZapatilla.innerHTML = `
            <a href="../pages/producto.html?id=${zapatilla.id}"><img src="${zapatilla.img}" alt="${zapatilla.nombre}"></a>
            <p class="nombrezapas">${zapatilla.nombre}</p>
            <p class="preciozapas">${zapatilla.precio}</p>
            <div class="botoncarrito">
                <button class='comprar' id=${zapatilla.id} type="submit"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        `;
        articleZapatillas.appendChild(contenedorZapatilla);
    });
});

vansCheckbox.addEventListener('change', () => {
    const isChecked = vansCheckbox.checked;
    const filteredSneakers = isChecked? filtrarZapatillasPorMarca('Vans') : zapatillas;

    const articleZapatillas = document.querySelector('.article__zapatillas');
    articleZapatillas.innerHTML = '';

    filteredSneakers.forEach(zapatilla => {
        const contenedorZapatilla = document.createElement('div');
        contenedorZapatilla.classList.add('contenidoimagen');

        contenedorZapatilla.innerHTML = `
            <a href="../pages/producto.html?id=${zapatilla.id}"><img src="${zapatilla.img}" alt="${zapatilla.nombre}"></a>
            <p class="nombrezapas">${zapatilla.nombre}</p>
            <p class="preciozapas">${zapatilla.precio}</p>
            <div class="botoncarrito">
                <button class='comprar' id=${zapatilla.id} type="submit"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        `;
        articleZapatillas.appendChild(contenedorZapatilla);
    });
});


function filtrarZapatillasPorMarca(marca) {
    const filteredSneakers = zapatillas.filter(zapatilla => zapatilla.marca.toLowerCase() === marca.toLowerCase());
    return filteredSneakers;
}