const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

function getContactDetails() {
    var request = new XMLHttpRequest();
    request.open('GET', "http://localhost:8000/contactos/" + email);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);

        // Actualizar el contenido de la página con los detalles del contacto
        document.getElementById('email').textContent = json.email;
        document.getElementById('nombre').textContent = json.nombre;
        document.getElementById('telefono').textContent = json.telefono;
        console.log(json.email);
    };
}

function borrarContacto() {
    if (confirm("¿Estás seguro de que deseas borrar este contacto?")) {
        var request = new XMLHttpRequest();
        request.open('DELETE', "http://localhost:8000/contactos/" + email);
        request.send();

        // Redirigir a la página principal después de borrar el contacto
        window.location.href = "/";
    }
}

window.onload = getContactDetails;

function goBack() {
    window.history.back();
}
