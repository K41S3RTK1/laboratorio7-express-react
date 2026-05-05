# Diferencias entre usar http nativo y Express en Node.js

## Introducción

En Node.js es posible crear servidores web utilizando la librería nativa `http`. Esta librería permite recibir solicitudes, analizar rutas y enviar respuestas directamente desde el servidor. Sin embargo, cuando una aplicación crece, manejar todas las rutas, estados, encabezados y errores manualmente puede volver el código más largo y difícil de mantener.

Express es un framework para Node.js que facilita la creación de servidores web y APIs. En este laboratorio se adaptó el servidor realizado anteriormente con `http` para que funcionara utilizando Express, manteniendo las mismas rutas y respuestas principales.

## Uso de http nativo

Con la librería `http`, el servidor se crea manualmente usando `http.createServer()`. Dentro de esa función se debe revisar la URL solicitada, decidir qué respuesta enviar, configurar encabezados como `Content-Type` y manejar los códigos de estado.

Por ejemplo, para responder una ruta con JSON usando `http`, se debe escribir manualmente el encabezado y convertir el objeto a texto con `JSON.stringify()`.

Esto da bastante control, pero también hace que el código tenga más instrucciones repetidas.

## Uso de Express

Con Express, el servidor se organiza mediante rutas como `app.get()`, `app.post()`, entre otras. Cada ruta tiene una función que recibe la solicitud y la respuesta.

Express simplifica tareas comunes, por ejemplo:

- Enviar texto con `res.send()`.
- Enviar JSON con `res.json()`.
- Manejar códigos de estado con `res.status()`.
- Definir rutas de forma más clara.
- Usar middleware como `express.json()`.

Esto permite que el código sea más ordenado y fácil de leer.

## Comparación general

La librería `http` es parte de Node.js y no requiere instalar dependencias externas. Es útil para entender cómo funciona un servidor desde una base más directa. Sin embargo, para proyectos más completos puede requerir mucho código manual.

Express, en cambio, es una dependencia externa, pero ofrece una forma más práctica de crear servidores y APIs. Permite separar mejor la lógica por rutas y reduce la cantidad de código repetido.

## Cambios realizados en el laboratorio

En este laboratorio se reemplazó el uso de `http.createServer()` por una aplicación de Express creada con `express()`.

También se cambiaron las respuestas manuales con `res.writeHead()` y `res.end()` por métodos propios de Express como `res.send()`, `res.json()` y `res.status()`.

Las rutas principales del laboratorio anterior se conservaron:

- `http://localhost:3000/`
- `http://localhost:3000/info`
- `http://localhost:3000/saludo`
- `http://localhost:3000/api/status`
- `http://localhost:3000/api/student`
- `http://localhost:3000/ruta-inexistente`

Además, se agregó un manejador para rutas no encontradas usando `app.use()`.

## Conclusión

Express permite crear servidores web de una manera más clara, ordenada y sencilla que usando únicamente la librería nativa `http`. Aunque `http` ayuda a comprender la base del funcionamiento de un servidor en Node.js, Express resulta más conveniente para construir aplicaciones web y APIs de forma práctica.
