// Importa la librería axios para hacer peticiones HTTP
const axios = require('axios');

// Describe un grupo de pruebas para la API de usuarios
describe('API Usuarios', () => {
  // Define un caso de prueba para crear un usuario
  test('crear usuario', async () => {
    // URL del endpoint para crear usuarios
    const url = 'http://localhost:3000/usuarios';
    // Datos del usuario a crear
    const data = {
      nombre: 'Lucia',
      email: 'lucia@example.com',
    };

    // Realiza una petición POST al endpoint con los datos del usuario
    const response = await axios.post(url, data);

    // Verifica que el código de estado HTTP sea 201 (creado)
    expect(response.status).toBe(201);

    // Obtiene el cuerpo de la respuesta en formato JSON
    const json_data = response.data;
    // Verifica que la respuesta tenga la propiedad 'usuario'
    expect(json_data).toHaveProperty('usuario');
    // Verifica que el nombre del usuario en la respuesta sea igual al enviado
    expect(json_data.usuario.nombre).toBe(data.nombre);
    // Verifica que el email del usuario en la respuesta sea igual al enviado
    expect(json_data.usuario.email).toBe(data.email);
    // Verifica que la respuesta tenga la propiedad 'mensaje'
    expect(json_data).toHaveProperty('mensaje');
    // Verifica que el mensaje sea el esperado
    expect(json_data.mensaje).toBe('Usuario creado exitosamente');

    // Imprime en consola los datos del usuario creado
    console.log('\n Usuario creado correctamente:');
    console.log(`ID: ${json_data.usuario.id}`);
    console.log(` Nombre: ${json_data.usuario.nombre}`);
    console.log(` Email: ${json_data.usuario.email}`);
  });
});