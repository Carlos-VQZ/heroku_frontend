function insertarContacto() {
    var data = {
        email: document.getElementById('email').value,
        nombre: document.getElementById('nombre').value,
        telefono: document.getElementById('telefono').value
    };

    var request = new XMLHttpRequest();
    request.open('POST', 'https://sqlitecontactos-60aff75a79ae.herokuapp.com/contactos/', true);
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
            // Mostrar una alerta cuando los datos son insertados con éxito
            alert("Datos insertados con éxito");
            
            // Redirigir a la página index.html después de aceptar la alerta
            window.location.href = '/';
        } else {
            console.error("Error al insertar datos");
        }
    };

    request.onerror = function () {
        console.error("Error de conexión");
    };

    request.send(JSON.stringify(data));
}

function goBack() {
    window.history.back();
}