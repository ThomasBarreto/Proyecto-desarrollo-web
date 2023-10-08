// document.addEventListener('DOMContentLoaded', function() {
//     const formCompra = document.querySelector('.formCompra');
//     formCompra.addEventListener('click', validarFormulario);
// });

// function validarFormulario() {
//     const nombre = document.getElementById('nombre').value.trim();
//     const apellido = document.getElementById('apellido').value.trim();
//     const email = document.getElementById('email').value.trim();
//     const telefono = document.getElementById('telefono').value.trim();
//     const pais = document.querySelector('.selectPais').value;
//     const codigoPostal = document.getElementById('Codigo').value.trim();
//     const direccion = document.getElementById('direccion').value.trim();
//     const numeroTarjeta = document.getElementById('numeroTarjeta').value.trim();
//     const nombreTarjeta = document.getElementById('nombreTarjeta').value.trim();
//     const fechaExpiracion = document.getElementById('fechaExpiracion').value.trim();
//     const codigoSeguridad = document.getElementById('codigoSeguridad').value.trim();

//     if (
//         nombre === '' || apellido === '' || email === '' || telefono === '' || pais === 'Pais' ||
//         codigoPostal === '' || direccion === '' || numeroTarjeta === '' || nombreTarjeta === '' ||
//         fechaExpiracion === '' || codigoSeguridad === ''
//     ) {
//         alert('Por favor completa todos los campos');
//         return;
//     }

//     if (!isValidEmail(email)) {
//         alert('Por favor ingresa un correo electrónico válido');
//         return;
//     }

//     if (!isValidPhone(telefono)) {
//         alert('Por favor ingresa un número de teléfono válido');
//         return;
//     }

//     const inputFinalizarCompra = document.getElementsByClassName('inputCompra')[0];
//     inputFinalizarCompra.addEventListener('click', () => {
//         Swal.fire({
//             title: '¡Gracias por tu compra!',
//             text: 'Estamos procesando tu pedido y te mantendremos informado sobre el estado de entrega.',
//             icon: 'success',
//             width: '400px',
//             height: '200px',
//         }).then((result) => {
//             if (result.isConfirmed) {
//                 window.location.href = '../index.html';
//             }
//         });
//     })
// }

// function isValidEmail(email) {

//     return email.includes('@') && email.includes('.');
// }

// function isValidPhone(phone) {

//     return !isNaN(phone) && phone.length === 10; // 
// }


document.addEventListener('DOMContentLoaded', function() {
    const inputFinalizarCompra = document.getElementsByClassName('inputCompra')[0];
    inputFinalizarCompra.addEventListener('click', finalizarCompra);
});
function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const pais = document.querySelector('.selectPais').value;
    const codigoPostal = document.getElementById('Codigo').value.trim();
    const direccion = document.getElementById('direccion').value.trim();
    const numeroTarjeta = document.getElementById('numeroTarjeta').value.trim();
    const nombreTarjeta = document.getElementById('nombreTarjeta').value.trim();
    const fechaExpiracion = document.getElementById('fechaExpiracion').value.trim();
    const codigoSeguridad = document.getElementById('codigoSeguridad').value.trim();

    if (
        nombre === '' || apellido === '' || email === '' || telefono === '' || pais === 'Pais' ||
        codigoPostal === '' || direccion === '' || numeroTarjeta === '' || nombreTarjeta === '' ||
        fechaExpiracion === '' || codigoSeguridad === ''
    ) {
        Toastify({

            text: "Por favor completa todos los campos",
            duration: 1500,
            backgroundColor: "rgba(128, 128, 128, 0.5)",
            position: "center", 
            style: {
                boxShadow: 'none',
                fontWeight: 'bold',
                color:'black'
            }
            }).showToast();
        return false; // Cambio aquí, agregando un return false para evitar la propagación del evento
    }

    if (!isValidEmail(email)) {
        Toastify({

            text: "Por favor ingresa un Correo electronico valido",
            duration: 1500,
            backgroundColor: "rgba(128, 128, 128, 0.5)",
            position: "center", 
            style: {
                boxShadow: 'none',
                fontWeight: 'bold',
                color:'black'
            }
            }).showToast();
        return false; // Cambio aquí, agregando un return false para evitar la propagación del evento
    }

    if (!isValidPhone(telefono)) {
        Toastify({

            text: "Por favor ingresa un número de teléfono válido",
            duration: 1500,
            backgroundColor: "rgba(128, 128, 128, 0.5)",
            position: "center", 
            style: {
                boxShadow: 'none',
                fontWeight: 'bold',
                color:'black'
            }
            }).showToast();
        return false; // Cambio aquí, agregando un return false para evitar la propagación del evento
    }

    return true; // Devolvemos true si todas las validaciones pasan
}

function finalizarCompra() {
    if (validarFormulario()) {
        Swal.fire({
            title: '¡Gracias por tu compra!',
            text: 'Estamos procesando tu pedido y te mantendremos informado sobre el estado de entrega.',
            icon: 'success',
            width: '400px',
            height: '200px',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = '../index.html';
            }
        });
    }
}

function isValidEmail(email) {
    return email.includes('@') && email.includes('.');
}

function isValidPhone(phone) {
    return !isNaN(phone) && phone.length === 10;
}
