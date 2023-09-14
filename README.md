# Proxy de Resolución de Problemas de CORS

## Descripción

Este proyecto es una aplicación Node.js que actúa como un proxy para resolver problemas de Cross-Origin Resource Sharing (CORS). Su propósito principal es permitir que los clientes realicen solicitudes a cualquier API externa sin restricciones de origen.

## Funcionamiento

La aplicación funciona de la siguiente manera:

* Escucha en el puerto 3001.
* Utiliza Express para configurar los encabezados CORS y permitir todas las solicitudes desde cualquier origen.
* Define una ruta en la raíz (/) que espera un parámetro llamado des en la consulta de la URL.
* Construye una URL de consulta a la API externa utilizando el parámetro des.
* Realiza una solicitud a la URL externa utilizando una biblioteca como axios o node-fetch.
* Transmite la respuesta de la URL externa directamente como respuesta al cliente.

## Uso
Para utilizar este proxy y hacer solicitudes a una API externa, sigue estos pasos:

Clona o descarga este repositorio en tu máquina.

Instala las dependencias necesarias utilizando el siguiente comando:

```
npm install
```

Inicia la aplicación ejecutando el siguiente comando:

```
npm start
```
Una vez que la aplicación esté en funcionamiento, puedes hacer solicitudes a la API externa utilizando la URL de la aplicación proxy, como se muestra a continuación:

http://localhost:3001/?des=nombre_del_recurso

Reemplaza nombre_del_recurso con el nombre del recurso que deseas consultar en la API externa.

## Licencia
Este proyecto se distribuye bajo la Licencia MIT. 