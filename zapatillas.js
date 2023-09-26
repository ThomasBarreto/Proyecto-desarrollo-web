//ZAPATILLAS:
function renderizarProductoZapatillas(productos){
    const articleZapatillas = document.getElementsByClassName('article__zapatillas')[0];

    productos.forEach(producto => {
        const contenedorZapatilla = document.createElement('div');
        contenedorZapatilla.classList.add('contenidoimagen');
        
        contenedorZapatilla.innerHTML =`
        <img src="${producto.img}" alt="${producto.nombre}">
        <p class="nombrezapas">${producto.nombre}</p>
        <p class="preciozapas">${producto.precio}</p>
        <div class="botoncarrito">
            <button class='comprar' id=${producto.id} type="submit"><i class="fa-solid fa-cart-shopping"></i></button>
        </div>
        `;
        articleZapatillas.appendChild(contenedorZapatilla);
    });
    
}

renderizarProductoZapatillas(sneakers);
