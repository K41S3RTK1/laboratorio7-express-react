# Laboratorio 7 - Express y React

## Descripción

Este repositorio contiene el desarrollo del Laboratorio 7 del curso Sistemas y Tecnologías Web.

El laboratorio se divide en dos partes principales:

1. Adaptar el servidor del Laboratorio 6 para utilizar Express en lugar de la librería nativa `http` de Node.js.
2. Crear una calculadora funcional utilizando React y Vite.

---

## Parte 1 - Servidor con Express

En esta parte se tomó como base el servidor desarrollado en el Laboratorio 6. Originalmente, el servidor utilizaba la librería nativa `http` de Node.js para manejar las solicitudes y respuestas.

Para este laboratorio, el servidor fue adaptado para utilizar Express. Esto permite manejar las rutas de una forma más clara, ordenada y fácil de mantener.

### Rutas disponibles

| Ruta | Descripción |
|---|---|
| `/` | Muestra un mensaje indicando que el servidor está activo |
| `/info` | Devuelve información general del laboratorio |
| `/saludo` | Devuelve un mensaje de saludo |
| `/api/status` | Devuelve el estado actual del servidor |
| `/api/student` | Lee y devuelve la información almacenada en `datos.json` |

### Ejecutar el servidor

Desde la raíz del proyecto, ejecutar:

```bash
npm install
npm start
```

El servidor se ejecuta en:

```text
http://localhost:3000
```

### Probar las rutas

Se pueden probar las rutas desde el navegador o usando `curl` en la terminal:

```bash
curl http://localhost:3000/
curl http://localhost:3000/info
curl http://localhost:3000/saludo
curl http://localhost:3000/api/status
curl http://localhost:3000/api/student
curl http://localhost:3000/ruta-inexistente
```

### Archivo de documentación

El archivo `DIFERENCIAS_HTTP_EXPRESS.md` contiene una explicación general sobre las diferencias entre utilizar la librería nativa `http` y utilizar Express en Node.js.

---

## Parte 2 - Calculadora con React y Vite

En esta parte se creó una calculadora utilizando React y Vite. La calculadora fue desarrollada con componentes separados para organizar mejor la interfaz y la lógica.

La calculadora permite realizar las operaciones básicas solicitadas:

- Suma
- Resta
- Multiplicación
- División

También se agregaron funciones adicionales:

- Limpiar la pantalla
- Borrar el último dígito
- Cambiar el signo del número
- Manejar la división entre cero

---

## Estructura de la calculadora

```text
calculadora-react/
├── src/
│   ├── components/
│   │   ├── ButtonPanel.jsx
│   │   └── Display.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
```

### Componentes principales

| Archivo | Descripción |
|---|---|
| `App.jsx` | Contiene la lógica principal de la calculadora |
| `Display.jsx` | Muestra la operación y el resultado |
| `ButtonPanel.jsx` | Contiene los botones de la calculadora |
| `App.css` | Contiene los estilos personalizados de la interfaz |
| `index.css` | Contiene estilos generales del proyecto |

---

## Ejecutar la calculadora

Desde la raíz del proyecto:

```bash
npm run dev:react
```

También se puede ejecutar entrando directamente a la carpeta de React:

```bash
cd calculadora-react
npm install
npm run dev
```

La aplicación normalmente se ejecuta en:

```text
http://localhost:5173/
```

---

## Generar build de React

Desde la raíz del proyecto:

```bash
npm run build:react
```

---

## Tecnologías utilizadas

- Node.js
- Express
- React
- Vite
- JavaScript
- HTML
- CSS

---

## Cambios principales realizados

- Se creó un nuevo repositorio para el Laboratorio 7.
- Se tomó como base el código del Laboratorio 6.
- Se instaló Express.
- Se reemplazó el servidor hecho con `http` por un servidor hecho con Express.
- Se conservaron las rutas principales del laboratorio anterior.
- Se creó documentación sobre las diferencias entre `http` y Express.
- Se creó un proyecto de React con Vite.
- Se implementó una calculadora funcional.
- Se personalizó la interfaz de la calculadora con CSS.

---
## Link de video: https://youtu.be/GVv8bae5m8M
---

## Autor

Daniel  
Curso: Sistemas y Tecnologías Web  
Universidad del Valle de Guatemala
