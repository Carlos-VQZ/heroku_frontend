function registerUser() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  var data = {
    username: username,
    password: password
  };

  var request = new XMLHttpRequest();
  request.open('POST', 'http://localhost:8000/register', true);
  request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

  // Codifica las credenciales en formato 'username:password' y conviértelas en Base64
  var encodedCredentials = btoa(username + ':' + password);
  request.setRequestHeader('Authorization', 'Basic ' + encodedCredentials);

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

function goBackToLoginPage() {
  window.location.href = '/'; // Ejemplo de URL de la página de registro
}