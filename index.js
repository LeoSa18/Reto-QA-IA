const express = require('express');
const app = express();
const port = 3000;

// Middleware para leer JSON del body
app.use(express.json());

// Simulación de base de datos en memoria
const usuarios = [];

// Ruta POST para crear un usuario
app.post('/usuarios', (req, res) => {
  const { nombre, email } = req.body;

  if (!nombre || !email) {
    return res.status(400).json({ mensaje: 'Nombre y email son obligatorios' });
  }

  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    email
  };

  usuarios.push(nuevoUsuario);

  res.status(201).json({
    mensaje: 'Usuario creado exitosamente',
    usuario: nuevoUsuario
  });
});

// 📥 Ruta GET para listar todos los usuarios
app.get('/usuarios', (req, res) => {
  res.json({
    mensaje: 'Lista de usuarios',
    usuarios
  });
});

// Servidor en marcha
app.listen(port, () => {
  console.log(`API escuchando en http://localhost:${port}`);
});
