function getAll() {
    const URL = "https://sqlitecontactos-60aff75a79ae.herokuapp.com/contactos/";
    var request = new XMLHttpRequest;
    request.open('GET', URL);
    request.send();

    request.onload = (e) => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("response: " + response);
        console.log("json: " + json);
        console.log("status_code: " + request.status);

        console.log("Email: " + json[0]["email"]);
        console.log("Nombre: " + json[0]["nombre"]);
        console.log("Telefono: " + json[0]["telefono"]);

        const tbody_contactos = document.getElementById("tbody_contactos");
        for (var i = 0; i < Object.keys(json).length; i++) {
            var tr = document.createElement("tr");
            var td_email = document.createElement("td");
            var td_nombre = document.createElement("td");
            var td_telefono = document.createElement("td");
            var td_opciones = document.createElement("td");  // Agrega esta línea para definir td_opciones

            td_email.innerHTML = json[i]["email"];
            td_nombre.innerHTML = json[i]["nombre"];
            td_telefono.innerHTML = json[i]["telefono"];

            console.log("Email: " + json[i]["email"]);

            var enlaceVer = document.createElement('a');
            enlaceVer.href = 'ver?email=' + json[i]["email"];
            enlaceVer.textContent = 'Ver';
            var enlaceEditar = document.createElement('a');
            enlaceEditar.href = 'editar?email=' + json[i]["email"];
            enlaceEditar.textContent = 'Editar';
            var enlaceBorrar = document.createElement('a');
            enlaceBorrar.href = 'borrar?email=' + json[i]["email"];
            enlaceBorrar.textContent = 'Borrar';

            td_opciones.appendChild(enlaceVer);
            td_opciones.appendChild(document.createTextNode('   |   ')); // Agregar un separador
            td_opciones.appendChild(enlaceEditar);
            td_opciones.appendChild(document.createTextNode('   |   ')); // Agregar un separador
            td_opciones.appendChild(enlaceBorrar);

            tr.appendChild(td_email);
            tr.appendChild(td_nombre);
            tr.appendChild(td_telefono);
            tr.appendChild(td_opciones);  // Agrega td_opciones a la fila
            tbody_contactos.appendChild(tr);
        }
    };
};
