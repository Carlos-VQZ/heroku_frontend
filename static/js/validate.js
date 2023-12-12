function validateToken() {
    var token = sessionStorage.getItem('token');
    console.log(sessionStorage.getItem('token'));
  
    var request = new XMLHttpRequest();
    request.open('GET', 'http://localhost:8000/login', true);
    request.setRequestHeader('Authorization', 'Bearer ' + token);
    
    request.onload = function () {
      if (request.status === 200) {
        var responseData = JSON.parse(request.responseText);
        console.log('Acceso permitido:', responseData.mensaje);
        // Si la validación es exitosa, muestra una alerta y redirige a la página principal u otra página necesaria
        alert('¡Acceso permitido!');
        window.location.href = '/contactos'; // Cambia '/contactos' por la URL deseada
      } else {
        console.error("Error al validar el token. Código de estado:", request.status);
        // Si la validación falla, muestra una alerta y redirige a una página de error u otra acción necesaria
        alert('¡Acceso denegado o token inválido!');
        window.location.href = '/login'; // Cambia '/contactos' por la URL deseada
      }
    };
  
    request.onerror = function () {
      console.error("Error de conexión");
      // En caso de error de conexión, muestra una alerta y redirige a una página de error o maneja la situación
      alert('¡Error de conexión!');
      window.location.href = '/'; // Cambia '/error.html' por la URL deseada
    };
  
    request.send();
  }