async function cargarProductos() {
    const URLJSON = '../productos.json';
    const respuesta = await fetch(URLJSON);
    const json = await respuesta.json();
    return json.sneakers;
}

document.addEventListener('DOMContentLoaded', function() {
    const detalleProducto = document.getElementById('detalle-producto');

    const urlParams = new URLSearchParams(window.location.search);
    const productoId = urlParams.get('id');

    if (productoId) {
        cargarDetalleProducto(productoId);
    } else {
        detalleProducto.innerHTML = '<p>Producto no especificado</p>';
    }
});

async function cargarDetalleProducto(productoId) {
    const productos = await cargarProductos();
    const producto = productos.find(p => p.id == productoId);

    if (producto) {
        const detalleProducto = document.getElementById('detalle-producto');
        detalleProducto.innerHTML = `
            <img src="${producto.img}" alt="${producto.nombre}">
            <div class="containerDetalles">
                <h1>${producto.nombre}</h1>
                <p class="precio">$${producto.precio}</p>
            </div>
            <div class="talles">
                <h2>Talles Disponibles:</h2>
                <ul>
                    <li><button>35</button></li>
                    <li><button>36</button></li>
                    <li><button>37</button></li>
                    <li><button>38</button></li>
                    <li><button>39</button></li>
                    <li><button>40</button></li>
                    <li><button>41</button></li>
                    <li><button>42</button></li>
                    <li><button>43</button></li>
                    <li><button>44</button></li>
                </ul>
                <div class="botoncarrito">
                    <button class="comprarProd" id="${producto.id}" type="submit">
                        Finalizar Compra
                    </button>
                </div>
            </div>
            `;
                
    } else {
        const detalleProducto = document.getElementById('detalle-producto');
        detalleProducto.innerHTML = '<p>Producto no encontrado</p>';
    }
}


const botonFinalizarCompra = document.getElementsByClassName('comprarProd');

botonFinalizarCompra.onclick = ()=>{
    swal.fire({
        title:'gola'
    })
}