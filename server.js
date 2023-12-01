const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const users = [];

app.post('/register', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Nombre de usuario y contraseña son requeridos' });
  }

  // Verificar si el usuario ya existe
  const existingUser = users.find(user => user.username === username);
  if (existingUser) {
    return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
  }

  // Agregar nuevo usuario
  const newUser = { username, password };
  users.push(newUser);

  res.status(201).json({ message: 'Usuario registrado correctamente' });
});

// Servir la página de registro
app.get('/registro', (req, res) => {
  res.sendFile(__dirname + '/registro.html');
});

// Iniciar el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor iniciado en http://localhost:3000');
});
