//INDEX
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const containerCarrito = document.getElementsByClassName('carrito__compras')[0];
const containerCarritoResponsive = document.querySelector('.carrito__compras__responsive');
const botonCompra = document.getElementById('finalizarCompra');
const botonCompraResponsive = document.getElementById('finalizarCompraResponsive');
const botonVaciarCarrito = document.getElementById('vaciarCarrito');
const botonVaciarCarritoResponsive = document.getElementById('vaciarCarritoResponsive');
//CARRITO ABANDONADO
function dibujarCarrito() {
    for (const prod of carrito) { 
        const currentURL = window.location.href;
        let img;
        if ((currentURL.includes('index.html')) || currentURL == ('https://thomasbarreto.github.io/Proyecto-desarrollo-web/')){
            img = `${prod.img.slice(1)}`;
        } else {
            img = `${prod.img}`;
        }

        containerCarrito.innerHTML += `
        <div class="container__carrito">      
            <div class="imagencarrito">
                <img src="${img}" alt="${prod.nombre}">
            </div>
            <div class="descripcioncarrito">
                <p class="descripcion__nombre">${prod.nombre} <button id='borrar'><i class="fa-solid fa-trash-can"></i></button> </p>
                <p class="descripcion__precio">${prod.precio}</p>
            </div>
            <div class="cantidad">
                <p id="parrafoCantidad_${prod.id}">${prod.cantidad}</p>
            </div>
        </div>
        `;
        //RESPONSIVE
        containerCarritoResponsive.innerHTML += `
        <div class="container__carrito__responsive">      
            <div class="imagencarrito">
                <img src="${img}" alt="${prod.nombre}">
            </div>
            <div class="descripcioncarrito">
                <p class="descripcion__nombre">${prod.nombre} <button id='borrarResponsive'><i class="fa-solid fa-trash-can"></i></button></p>
                <p class="descripcion__precio">${prod.precio}</p>
            </div>
            <div class="cantidad">
                <p id="parrafoCantidad_${prod.id}">${prod.cantidad}</p>
            </div>
        </div>
    `;
        //SUMA TOTAL ABANDONADA
        const subTotal = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
        const botonCompra = document.getElementById('finalizarCompra');
        botonCompra.innerText = 'Comprar - $' + subTotal;
        //SUMA TOTAL RESPONSIVE ABANDONADA
        const botonCompraResponsive = document.getElementById('finalizarCompraResponsive');
        botonCompraResponsive.innerText = 'Comprar - $' + subTotal;
    }
}
if (carrito.length != 0) {
    dibujarCarrito();
}


function agregarAlCarrito(producto) {

    //VERIFICAR ESTA VALIDACION
    const currentURL = window.location.href;
    let img;
    if ((currentURL.includes('index.html')) || currentURL == ('https://thomasbarreto.github.io/Proyecto-desarrollo-web/')){
        img = `${producto.img.slice(1)}`;
    } else {
        img = `${producto.img}`;
    }

    carrito.push(producto);
    console.table(carrito);
    Swal.fire({
        html: `
        <div style="display: flex; align-items: center; justify-content:center;">
            <img src="${img}" alt="${producto.nombre}" style="width: 120px; height: 150px;">
            <p style="margin-left: 10px;">Agregaste ${producto.nombre} al carro 🛒</p>
        </div>
    `,
    position: 'top',
    showConfirmButton: false,
    timer: 1500,
    })
    //AGREGAR EL PRODUCTO AL CONTAINER DEL CARRIT   
    containerCarrito.innerHTML += `
        <div class="container__carrito">      
            <div class="imagencarrito">
                <img src="${img}" alt="${producto.nombre}">
            </div>
            <div class="descripcioncarrito">
                <p class="descripcion__nombre">${producto.nombre} <button id='borrar'><i class="fa-solid fa-trash-can"></i></button> </p>
                <p class="descripcion__precio">${producto.precio}</p>
            </div>
            <div class="cantidad">
                <p id="parrafoCantidad_${producto.id}">${producto.cantidad}</p>
            </div>
        </div>
    `;

    //CARRITO RESPONSIVE
    containerCarritoResponsive.innerHTML += `
        <div class="container__carrito__responsive">      
            <div class="imagencarrito">
                <img src="${img}" alt="${producto.nombre}">
            </div>
            <div class="descripcioncarrito">
                <p class="descripcion__nombre">${producto.nombre} <button id='borrarResponsive'><i class="fa-solid fa-trash-can"></i></button></p>
                <p class="descripcion__precio">${producto.precio}</p>
            </div>
            <div class="cantidad">
                <p id="parrafoCantidad_${producto.id}">${producto.cantidad}</p>
            </div>
        </div>
    `;

    //SUMA TOTAL DEL CARRITO:
    const subTotal = carrito.reduce((acumulador,producto) => acumulador+producto.precio,0);
    console.log(subTotal);
    botonCompra.innerText ='Comprar - $' + subTotal;
    botonCompraResponsive.innerText ='Comprar - $' + subTotal;
    
    //LOCAL STORAGE:
    localStorage.setItem('carrito',JSON.stringify(carrito));
    
}


//FINALIZAR COMPRA:
botonCompra.onclick=()=>{
    if (carrito.length !== 0) {
        Swal.fire({
            title: '¡Aún no hemos terminado!',
            text: 'Por favor, completa los siguientes datos para finalizar tu compra:',
            icon: 'success',
            width: '400px',
            height: '200px',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '../pages/finalizarCompra.html';
            }
        });
        } else {
        Swal.fire({
            title: 'No hay productos en el carrito🛒',
            icon: 'error',
            width: '400px',
            height: '200px',
        });
    }
    carrito=[];
    containerCarrito.innerHTML='';
    botonCompra.innerText ='Comprar';
    localStorage.removeItem('carrito');
}
//FINALIZAR COMPRA RESPONSIVE:
botonCompraResponsive.onclick=()=>{
    if (carrito.length !== 0) {
        Swal.fire({
            title: '¡Aún no hemos terminado!',
            text: 'Por favor, completa los siguientes datos para finalizar tu compra:',
            icon: 'success',
            width: '400px',
            height: '200px',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '../pages/finalizarCompra.html';
            }
        });
    } else {
        Swal.fire({
            title: 'No hay productos en el carrito🛒',
            icon: 'error',
            width: '300px',
            height: '100px',
        });
    }
    carrito=[];
    containerCarritoResponsive.innerHTML='';
    botonCompraResponsive.innerText ='Comprar';
    localStorage.removeItem('carrito');
}

// ELIMINAR ELEMENTOS CARRITO:

botonVaciarCarrito.onclick=()=>{
    if (carrito.length !== 0) {
        Toastify({
            text: `Eliminaste todos los productos del carrito🛒`,
            duration: 1500,
            close: false,
            style:{
                width:'300px',
                right:'420px',
                top:'50px',
                color:'black',
                background:'rgba(201, 201, 201, 0.7)',
                boxShadow: 'none',
                fontWeight:'bold'
            }
        }).showToast();
    } else {
        Toastify({
            text: `No hay productos en el carrito🛒`,
            duration: 1500,
            close: false,
            style:{
                width:'300px',
                right:'420px',
                top:'50px',
                color:'black',
                background:'rgba(201, 201, 201, 0.7)',
                boxShadow: 'none',
                fontWeight:'bold'
            }
        }).showToast();
    }
    carrito=[];
    containerCarrito.innerHTML='';
    botonCompra.innerText ='Comprar';
    localStorage.removeItem('carrito');
}


botonVaciarCarritoResponsive.onclick=()=>{
    if (carrito.length !== 0) {
        Toastify({
            text: `Eliminaste todos los productos del carrito🛒`,
            duration: 1500,
            close: false,
            style:{
                width:'300px',
                top:'50px',
                color:'black',
                background:'rgba(201, 201, 201, 0.7)',
                boxShadow: 'none',
                fontWeight:'bold'
            }
        }).showToast();
    } else {
        Toastify({
            text: `No hay productos en el carrito🛒`,
            duration: 1500,
            close: false,
            style:{
                width:'300px',
                top:'50px',
                color:'black',
                background:'rgba(201, 201, 201, 0.7)',
                boxShadow: 'none',
                fontWeight:'bold'
            }
        }).showToast();
    }
    carrito=[];
    containerCarritoResponsive.innerHTML='';
    botonCompraResponsive.innerText ='Comprar';
    localStorage.removeItem('carrito');
}