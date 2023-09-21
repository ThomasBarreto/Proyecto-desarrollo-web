//INDEX
let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
const containerCarrito = document.getElementsByClassName('carrito__compras')[0];
const containerCarritoResponsive = document.querySelector('.carrito__compras__responsive');
const botonCompra = document.getElementById('finalizarCompra');
const botonCompraResponsive = document.getElementById('finalizarCompraResponsive');
const botonVaciarCarrito = document.getElementById('vaciarCarrito');
const botonVaciarCarritoResponsive = document.getElementById('vaciarCarritoResponsive');



//CARRITO ABANDONADO
function dibujarCarrito(){
    for (const prod of carrito) {
        containerCarrito.innerHTML +=`
        <div class="container__carrito">      
            <div class="imagencarrito">
                <img src="${prod.img}" alt="${prod.nombre}">
            </div>
            <div class="descripcioncarrito">
                <p class="descripcion__nombre">${prod.nombre} <button id='borrar'><i class="fa-solid fa-trash-can"></i></button> </p>
                <p class="descripcion__precio">${prod.precio}</p>
            </div>
            <div class="inputcantidad">
                <input type="number" name="cantidad" placeholder="1">
            </div>
        </div>
        `;
        //RESPONSIVE
        containerCarritoResponsive.innerHTML += `
        <div class="container__carrito__responsive">      
            <div class="imagencarrito">
                <img src="${prod.img}" alt="${prod.nombre}">
            </div>
            <div class="descripcioncarrito">
                <p class="descripcion__nombre">${prod.nombre} <button id='borrarResponsive'><i class="fa-solid fa-trash-can"></i></button></p>
                <p class="descripcion__precio">${prod.precio}</p>
            </div>
            <div class="inputcantidad">
                <input type="number" name="cantidad" placeholder="1">
            </div>
        </div>
    `;
     //SUMA TOTAL ABANDONADA
        const subTotal = carrito.reduce((acumulador,producto) => acumulador+producto.precio,0);
        const botonCompra = document.getElementById('finalizarCompra');
        botonCompra.innerText ='Comprar - $' + subTotal;
    //SUMA TOTAL RESPONSIVE ABANDONADA
        const botonCompraResponsive = document.getElementById('finalizarCompraResponsive');
        botonCompraResponsive.innerText ='Comprar - $' + subTotal;
    }
}
if (carrito.length != 0) {
    dibujarCarrito();
}

function renderizarProductoSection1(productos) {
    const contenedorProdsSection1 = document.querySelector('.section1');

    // Obtener los primeros 4 productos del array
    const primerosCuatroProductos = productos.slice(0, 4);

    primerosCuatroProductos.forEach(producto => {
        const contenedorProductoSection1 = document.createElement('div');
        contenedorProductoSection1.classList.add('containerimg');

        contenedorProductoSection1.innerHTML = `
            <img class="carruselImagenes" src="${producto.img}" alt="${producto.nombre}">
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
            <img class="carruselImagenes2" src="${producto.img}" alt="${producto.nombre}">
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

//AGREGAR PRODUCTOS AL CARRITO
function agregarAlCarrito(producto) {
    carrito.push(producto);
    console.table(carrito);
    Swal.fire({
        html: `
        <div style="display: flex; align-items: center; justify-content:center;">
            <img src="${producto.img}" alt="${producto.nombre}" style="width: 120px; height: 150px;">
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
                <img src="${producto.img}" alt="${producto.nombre}">
            </div>
            <div class="descripcioncarrito">
                <p class="descripcion__nombre">${producto.nombre} <button id='borrar'><i class="fa-solid fa-trash-can"></i></button> </p>
                <p class="descripcion__precio">${producto.precio}</p>
            </div>
            <div class="inputcantidad">
                <input type="number" name="cantidad" placeholder="1">
            </div>
        </div>
    `;

    //CARRITO RESPONSIVE
    containerCarritoResponsive.innerHTML += `
        <div class="container__carrito__responsive">      
            <div class="imagencarrito">
                <img src="${producto.img}" alt="${producto.nombre}">
            </div>
            <div class="descripcioncarrito">
                <p class="descripcion__nombre">${producto.nombre} <button id='borrarResponsive'><i class="fa-solid fa-trash-can"></i></button></p>
                <p class="descripcion__precio">${producto.precio}</p>
            </div>
            <div class="inputcantidad">
                <input type="number" name="cantidad" placeholder="1">
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
    Swal.fire(
        'Gracias por tu compra',
        'Recibiras el envio en las proximas 48hs',
        'success'
        );
    carrito=[];
    containerCarrito.innerHTML='';
    botonCompra.innerText ='Comprar';
    localStorage.removeItem('carrito');
}
//FINALIZAR COMPRA RESPONSIVE:
botonCompraResponsive.onclick=()=>{
    Swal.fire('Gracias por tu compra','Recibiras el envio en las proximas 48hs','success');
    carrito=[];
    containerCarritoResponsive.innerHTML='';
    botonCompraResponsive.innerText ='Comprar';
    localStorage.removeItem('carrito');
}

// ELIMINAR ELEMENTOS CARRITO:

botonVaciarCarrito.onclick=()=>{
    carrito=[];
    containerCarrito.innerHTML='';
    botonCompra.innerText ='Comprar';
    localStorage.removeItem('carrito');
    Toastify({
        text: `Eliminaste todos los productos del carro 🛒`,
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


botonVaciarCarritoResponsive.onclick=()=>{

    carrito=[];
    containerCarritoResponsive.innerHTML='';
    botonCompraResponsive.innerText ='Comprar';
    localStorage.removeItem('carrito');
    Toastify({
        text: `Eliminaste todos los productos del carro 🛒`,
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







//COSAS POR HACER INDEX:
//-FALTA AGREGAR BOTON PARA ELIMINAR PRODUCTOS DEL CARRITO
//-FALTA QUE SE VAYAN SUMANDO LOS PRECIOS DE LOS PRODUCTOS EN EL CARRITO
//-FALTA QUE SE INCREMENTEN LOS PRODS EN CASO DE SER MAS DE 1 PERO QUE NO SE IMPRIMAN MAS VECES
//-FALTA QUE SE IMPRIMA UN MENSAJE CUANDO SE AGREGUE UN PRODUCTOS Y QUE NO SEA UN ALERT
//-FALTA AGREGARLE LOCALSTORAGE 'CARRITO ABANDONADO'

// COSAS POR HACER SECCION ZAPATILLAS:
// FILTROS EN SECCION DE ZAPATILLAS
