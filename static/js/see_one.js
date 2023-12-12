const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');
const token = sessionStorage.getItem('token');

function getContactDetails() {
    var requestToken = new XMLHttpRequest();
    requestToken.open('GET', 'http://localhost:8000/login');
    requestToken.setRequestHeader('Authorization', 'Bearer ' + token);
    requestToken.send();

    requestToken.onload = () => {
        if (requestToken.status === 200) {
            var request = new XMLHttpRequest();
            request.open('GET', "http://localhost:8000/contactos/" + email);
            request.setRequestHeader('Authorization', 'Bearer ' + token);
            request.send();

            request.onload = () => {
                if (request.status === 200) {
                    const response = request.responseText;
                    const json = JSON.parse(response);

                    // Actualizar el contenido de la página con los detalles del contacto
                    document.getElementById('email').textContent = json.email;
                    document.getElementById('nombre').textContent = json.nombre;
                    document.getElementById('telefono').textContent = json.telefono;
                    console.log(json.email);
                } else {
                    console.error("Error al obtener detalles del contacto. Código de estado:", request.status);
                    // Manejo de errores al obtener detalles del contacto
                }
            };
        } else {
            console.error("Error al validar el token. Código de estado:", requestToken.status);
            // Manejo de errores al validar el token
        }
    };
}

window.onload = getContactDetails;

function goBack() {
    window.location.href = "/contactos";
}