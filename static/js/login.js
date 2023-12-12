function loginUser() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var credentials = {
    username: username,
    password: password
  };

  var request = new XMLHttpRequest();
  request.open('GET', 'http://localhost:8000/token/', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  // Codifica las credenciales en formato 'username:password' y conviértelas en Base64
  var encodedCredentials = btoa(username + ':' + password);
  request.setRequestHeader('Authorization', 'Basic ' + encodedCredentials);
  

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {
      try {
        var responseData = JSON.parse(request.responseText);
        console.log(responseData); // Imprimir la respuesta del servidor en la consola
        sessionStorage.setItem('token', responseData.token); // Almacenar el token en el almacenamiento local
        alert("Inicio de sesión exitoso");
        window.location.href = '/login'; // Redirige a la página de validación
      } catch (error) {
        console.error("Error al analizar la respuesta:", error);
      }
    } else {
      console.error("Error al obtener el token. Código de estado:", request.status);
    }
  };

  request.onerror = function () {
    console.error("Error de conexión");
  };

  request.send(JSON.stringify(credentials));
}

function goBackToRegistrationPage() {
  window.location.href = '/register'; // Redirección a la página de registro
}