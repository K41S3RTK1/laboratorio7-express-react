# Laboratorio 6 - Node.js

## Descripción
En este laboratorio se corrigió un servidor con errores y luego se modificó para agregar nuevas rutas y respuestas en formato JSON.

## Parte 1: corrección del archivo original

### Errores encontrados
1. Había errores de sintaxis en la estructura general del servidor.
2. La ruta `/info` no estaba preparada correctamente para responder como se esperaba.
3. La ruta `/api/student` no leía correctamente el archivo JSON.
4. La respuesta 404 no estaba bien manejada.
5. Algunas rutas no funcionaban correctamente hasta corregir la lógica del servidor.

### Correcciones realizadas
1. Se corrigió la estructura general del servidor para que pudiera ejecutarse sin errores.
2. Se corrigió la lectura del archivo `datos.json` usando lectura asíncrona.
3. Se ajustó la respuesta de la ruta `/api/student` para devolver JSON correctamente.
4. Se corrigió el manejo de rutas no encontradas para devolver un 404.
5. Se verificó que todas las rutas respondieran correctamente desde un cliente.

## Parte 2: cambios realizados

### Ruta `/info`
Ahora responde un JSON con las propiedades:
- `mensaje`
- `curso`
- `tecnologia`

### Ruta `/saludo`
Se agregó una nueva ruta que responde con un mensaje.

### Ruta `/api/status`
Se agregó una nueva ruta que responde un JSON con:
- `ok`
- `status`
- `puerto`

### Ruta 404
Se modificó la respuesta 404 para mostrar la ruta que el usuario intentó visitar y no fue encontrada.

## Pruebas realizadas
Las pruebas se realizaron desde el navegador accediendo a `http://localhost:3000`.

### Prueba de `http://localhost:3000/`
Respuesta obtenida:
`Servidor activo`
<img width="672" height="173" alt="cap 1" src="https://github.com/user-attachments/assets/752f720a-8624-4186-b551-abb58fb8f5d0" />




### Prueba de `http://localhost:3000/info`
Respuesta obtenida:
Un JSON con el mensaje, el curso y la tecnología.

<img width="1029" height="193" alt="cap info" src="https://github.com/user-attachments/assets/295c1629-11de-4284-b2d0-f9edc804ce2a" />



### Prueba de `http://localhost:3000/saludo`
Respuesta obtenida:
Un mensaje de bienvenida en texto plano.

<img width="1017" height="133" alt="cap saludo" src="https://github.com/user-attachments/assets/035f2c45-2291-4059-affa-6ff6b2c94fd3" />


### Prueba de `http://localhost:3000/api/status`
Respuesta obtenida:
Un JSON con el estado del servidor y el puerto 3000.

<img width="1026" height="191" alt="cap api status" src="https://github.com/user-attachments/assets/c5cf8552-eab4-432a-b685-8570efb5042b" />


### Prueba de `http://localhost:3000/api/student`
Respuesta obtenida:
Un JSON con los datos almacenados en el archivo `datos.json`.

<img width="1015" height="204" alt="cap api student" src="https://github.com/user-attachments/assets/4c4d3f23-68c3-45dc-b2ce-0c97f38f50ae" />


### Prueba de ruta inexistente
Se probó una ruta inexistente y el servidor respondió mostrando la ruta no encontrada con código 404.

<img width="1016" height="135" alt="cap 404" src="https://github.com/user-attachments/assets/94a682ec-fcfb-4d84-b1dd-5dbc54687a5a" />


## Tecnologías usadas
- Node.js
- módulo `http`
- módulo `fs/promises`
- módulo `path`
