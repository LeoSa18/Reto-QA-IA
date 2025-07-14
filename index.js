// Importa el framework Express para crear la API
const express = require('express');
// Crea una instancia de la aplicación Express
const app = express();
// Define el puerto donde se ejecutará el servidor
const port = 3000;
 
// Middleware para leer JSON del body de las peticiones
app.use(express.json());
 
// Simulación de base de datos en memoria (arreglo de usuarios)
const usuarios = [];
 
// Ruta POST para crear un usuario
app.post('/usuarios', (req, res) => {
  // Extrae nombre y email del cuerpo de la petición
  const { nombre, email } = req.body;
 
  // Valida que ambos campos sean enviados
  if (!nombre || !email) {
    // Si falta algún campo, responde con error 400 y mensaje
    return res.status(400).json({ mensaje: 'Nombre y email son obligatorios' });
  }
 
  // Crea un nuevo usuario con un id autoincremental
  const nuevoUsuario = {
    id: usuarios.length + 1,
    nombre,
    email
  };
 
  // Agrega el nuevo usuario al arreglo de usuarios
  usuarios.push(nuevoUsuario);
 
  // Responde con código 201 y el usuario creado
  res.status(201).json({
    mensaje: 'Usuario creado exitosamente',
    usuario: nuevoUsuario
  });
});
 
// Ruta GET para listar todos los usuarios registrados
app.get('/usuarios', (req, res) => {
  // Responde con la lista de usuarios y un mensaje
  res.json({
    mensaje: 'Lista de usuarios',
    usuarios
  });
});
 
// Solo inicia el servidor si el archivo se ejecuta directamente (no cuando se importa en tests)
if (require.main === module) {
  app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
  });
}

// Exporta la app para poder usarla en los tests
module.exports = app;
