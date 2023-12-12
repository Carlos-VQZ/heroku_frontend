function getAll() {
    var token = sessionStorage.getItem('token');
    console.log(sessionStorage.getItem('token'));

    var requestToken = new XMLHttpRequest();
    requestToken.open('GET', 'http://localhost:8000/login', true);
    requestToken.setRequestHeader('Authorization', 'Bearer ' + token);

    requestToken.onload = () => {
        if (requestToken.status === 200) {
            const URL = "http://localhost:8000/contactos";

            var requestContacts = new XMLHttpRequest();
            requestContacts.open('GET', URL);
            requestContacts.setRequestHeader('Authorization', 'Bearer ' + token);

            requestContacts.onload = () => {
                if (requestContacts.status === 200) {
                    const responseContacts = JSON.parse(requestContacts.responseText);
                    console.log("response: ", responseContacts);

                    // Manejo de la respuesta para mostrar los contactos en tu aplicación
                    displayContacts(responseContacts);
                } else {
                    console.error("Error al obtener contactos. Código de estado:", requestContacts.status);
                    // Manejo de errores al obtener contactos
                }
            };

            requestContacts.send();
        } else {
            console.error("Error al obtener el token. Código de estado:", requestToken.status);
            // Manejo de errores al obtener el token
        }
    };

    requestToken.send();
}

function displayContacts(contacts) {
    const tbody_contactos = document.getElementById("tbody_contactos");

    // Limpiar tabla antes de agregar nuevos contactos
    tbody_contactos.innerHTML = "";

    contacts.forEach(contact => {
        var tr = document.createElement("tr");
        var td_email = document.createElement("td");
        var td_nombre = document.createElement("td");
        var td_telefono = document.createElement("td");
        var td_opciones = document.createElement("td");

        td_email.innerHTML = contact["email"];
        td_nombre.innerHTML = contact["nombre"];
        td_telefono.innerHTML = contact["telefono"];

        var enlaceVer = document.createElement('a');
        enlaceVer.href = 'ver?email=' + contact["email"];
        enlaceVer.textContent = 'Ver';
        var enlaceEditar = document.createElement('a');
        enlaceEditar.href = 'editar?email=' + contact["email"];
        enlaceEditar.textContent = 'Editar';
        var enlaceBorrar = document.createElement('a');
        enlaceBorrar.href = 'borrar?email=' + contact["email"];
        enlaceBorrar.textContent = 'Borrar';

        td_opciones.appendChild(enlaceVer);
        td_opciones.appendChild(document.createTextNode('   |   '));
        td_opciones.appendChild(enlaceEditar);
        td_opciones.appendChild(document.createTextNode('   |   '));
        td_opciones.appendChild(enlaceBorrar);

        tr.appendChild(td_email);
        tr.appendChild(td_nombre);
        tr.appendChild(td_telefono);
        tr.appendChild(td_opciones);
        tbody_contactos.appendChild(tr);
    });
}