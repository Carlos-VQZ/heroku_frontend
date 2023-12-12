function getOne(email) {
    var token = sessionStorage.getItem('token');
    console.log(sessionStorage.getItem('token'));

    const URL = "http://localhost:8000/contactos";
    var request = new XMLHttpRequest();
    request.open('GET', URL + "/" + email, true);
    request.setRequestHeader('Authorization', 'Bearer ' + token); // Agregar el token al encabezado
    request.send();

    request.onload = () => {
        const response = request.responseText;
        const json = JSON.parse(response);
        console.log("response: " + response);
        console.log("json: " + json);

        const tbody_contactos = document.getElementById("tbody_contactos");
        tbody_contactos.innerHTML = null;

        var tr = document.createElement("tr");
        var td_email = document.createElement("td");
        var td_nombre = document.createElement("td");
        var td_telefono = document.createElement("td");

        td_email.innerHTML = json["email"];
        td_nombre.innerHTML = json["nombre"];
        td_telefono.innerHTML = json["telefono"];

        tr.appendChild(td_email);
        tr.appendChild(td_nombre);
        tr.appendChild(td_telefono);

        tbody_contactos.appendChild(tr);
    };
}

function goBack() {
    window.history.back();
}