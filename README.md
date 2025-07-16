# Reto-QA-AI

# Reto QA + IA – Automatiza una API con Ayuda de Inteligencia Artificial

Este proyecto fue realizado como parte del reto **"QA + IA"**, con el objetivo de aprender a colaborar con herramientas de inteligencia artificial para automatizar tareas técnicas de testing, incluso sin experiencia previa.

---

## Objetivo del Reto

- Crear un script automatizado que valide una API REST que crea un usuario.
- Usar IA generativa para asistir en la generación del código.
- Validar el flujo completo: request, response y contenido de datos.
- Mostrar resultados legibles y comprensibles.

---

## Herramienta de IA utilizada

- **ChatGPT**

### ¿Cómo me ayudó?

- Me guió en la creación de la API REST utilizando Express.
- Me asistió para definir la estructura del test con Jest y Axios.
- Me explicó buenas prácticas como:
  - Cómo exportar correctamente `app` para testear.
  - Cómo estructurar respuestas HTTP y validar errores.
- Me ayudó a pensar validaciones y cómo mostrar resultados de forma clara.

---

## Automatización de pruebas

El test automatiza el flujo de creación de un usuario mediante un `POST` a `/usuarios` y valida:

- El código de respuesta HTTP (`201`).
- Que el `nombre` y `email` del usuario coincidan con los enviados.
- Que se incluya un mensaje de éxito y un objeto `usuario`.
- Se imprimen los datos del usuario creado en consola.

---

## Bonus Track: API creada con IA

Además de automatizar el test, **la API también fue creada con ayuda de IA**:

- Se usó Express.js para definir el endpoint `POST /usuarios` y `GET /usuarios`.
- Los datos se almacenan en un arreglo en memoria (`usuarios[]`).
- La API valida que se reciban `nombre` y `email`.
- No requiere conexión a base de datos ni configuración extra.

---

## ¿Qué aprendí?

- Cómo levantar una API REST simple en Node.js.
- Cómo testear endpoints con Jest y Axios.
- Cómo estructurar un flujo de testing efectivo.
- La importancia de separar responsabilidades para facilitar testeo.
- Cómo usar IA en tareas técnicas.

---

## ¿Cómo correr el proyecto?

### 1. Clonar el repo

``bash
- git clone https://github.com/LeoSa18/Reto-QA-IA.git

### 2. Instalar dependencias

- npm install

### 3. Levantar el servidor

- node index.js

### 4. Ejecutar los tests

- npx jest

## Estructura del proyecto

├── index.js             → API REST con Express
├── usuarios.test.js     → Test automatizado con Jest + Axios
└── README.md            → Explicación del reto y aprendizajes
