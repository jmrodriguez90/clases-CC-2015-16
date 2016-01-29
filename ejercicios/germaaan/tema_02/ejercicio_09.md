# Ejercicio 9
## 1. Instalar o darse de alta en un servicio Redis en la nube y realizar sobre él las operaciones básicas desde el panel de control.
Instalamos **Redis** con `sudo apt-get install redis-server`.

## 2. Instalar un cliente de línea de órdenes de Redis o un cliente REST y realizar desde él las operaciones básicas de creación y lectura de información.
Nos conectamos a la base de datos con `redis-cli`. Las operaciones de creación y lectura de información son:
- `set`: establece el valor de una variable en un par clave-valor,
- `get`: recupera el valor de una varible en un par clave-valor.
- `hset`: establece el valor de una varible en un par clave-valor dentro de un conjunto de pares clave-valor indexados.
- `hget`: recupera el valor de una varible en un par clave-valor dentro de un conjunto de pares clave-valor indexados.
- `hkeys`: recupera un listado con todas las claves de los pares clave-valor en un conjunto.

![eje09_img01.png](https://dl.dropboxusercontent.com/s/0n5gl61siohj2cu/eje09_img01.png)

## 3. Ejecutar ejemplos de cualquier lenguaje de programación sobre la instalación realizada.
Podemos reproducir lo mismo que hemos hecho en el apartado anterior con un [pequeño programa en Node.js](src/pruebaRedis.js), pero antes de ejecutarlo deberemos exportar una varible de entorno con la dirección de acceso a la base de datos (en este caso estamos usando una instalación local, pero sería igual para una instalación en la nube). Recordar que es necesario instalar las dependencias antes de ejecutarlo.
- Código del programa:

```
#!/usr/bin/env node

var redis = require('redis');
var url = require('url');

var redisURL = url.parse(process.env.REDISCLOUD_URL);
console.log(redisURL);
var client = redis.createClient(redisURL.port, redisURL.hostname, {
  no_ready_check: true
});

client.set("prueba", "clave", redis.print);
client.get("prueba", function(err, reply) {
  console.log('Get ');
  if (err) {
    console.log(err);
  } else {
    console.log(reply.toString());
  }
});

client.hset("cosa", "campo1", "hola", redis.print);
client.hset("cosa", "campo2", "mundo", redis.print);
client.hkeys("cosa", function(err, replies) {
  console.log('hkeys');
  replies.forEach(function(reply, i) {
    console.log("    " + i + ": " + reply);
  });
  console.log("End ");
  client.end();
});
```

- Ejecución del programa:

```
export REDISCLOUD_URL=http://127.0.0.1:6379
npm install redis url
node pruebaRedis
```

- Salida de la ejecución:

![eje09_img02.png](https://dl.dropboxusercontent.com/s/n991eoucpfoaguj/eje09_img02.png)
