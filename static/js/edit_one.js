const urlParams = new URLSearchParams(window.location.search);
const email = urlParams.get('email');

function getContactDetails() {
    var token = sessionStorage.getItem('token');
    console.log(sessionStorage.getItem('token'));

    var request = new XMLHttpRequest();
    request.open('GET', "http://localhost:8000/contactos/" + email);
    request.setRequestHeader('Authorization', 'Bearer ' + token); // Agregar el token al encabezado
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);

        document.getElementById('email').value = json.email;
        document.getElementById('nombre').value = json.nombre;
        document.getElementById('telefono').value = json.telefono;
    };
}

window.onload = getContactDetails;

function goBack() {
    window.history.back();
}

function editarContacto() {
    var newEmail = document.getElementById('email').value;
    var newNombre = document.getElementById('nombre').value;
    var newTelefono = document.getElementById('telefono').value;

    if (confirm("¿Estás seguro de que deseas actualizar este contacto?")) {
        var token = sessionStorage.getItem('token');

        var request = new XMLHttpRequest();
        request.open('PUT', "http://localhost:8000/contactos/" + email);
        request.setRequestHeader('Authorization', 'Bearer ' + token); // Agregar el token al encabezado
        request.setRequestHeader("Content-Type", "application/json");

        var updatedData = {
            email: newEmail,
            nombre: newNombre,
            telefono: newTelefono
        };

        request.send(JSON.stringify(updatedData));

        request.onload = (e) => {
            alert("Contacto actualizado exitosamente");
            window.history.back();
        };
    }
}
