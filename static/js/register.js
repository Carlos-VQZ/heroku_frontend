document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        document.getElementById('message').textContent = 'Usuario registrado correctamente';
      } else {
        document.getElementById('message').textContent = data.message || 'Error al registrar usuario';
      }
    } catch (error) {
      console.error('Error:', error);
    }
  });
  