Redis
======================================================================

1. Darse de alta en un servicio Redis en la nube y realizar sobre él las operaciones básicas desde el panel de control.
 + Para instalar Redis, usamos el comando `sudo apt-get install redis-server`

2. Instalar un cliente de línea de órdenes de Redis o una biblioteca cliente REST y realizar desde él las operaciones básicas de creación y lectura de información.
 + Para acceder a redis, usamos el comando `redis-cli`
 + Para escibir un valor dentro de una variable, usamos el comando `set uno 1`
 + Para leer el valor guardado usamos `get uno`

3. Ejecutar ejemplos de cualquier lenguaje de programación sobre la instalación realizada.
Antes de ejecutarlo deberemos exportar una varible de entorno con la dirección de acceso a la base de datos (en este caso estamos usando una instalación local, pero sería igual para una instalación en la nube). Recordar que es necesario instalar las dependencias antes de ejecutarlo.
`Código de Germán Martínez`
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

Para ejecutar el programa:
```
export REDISCLOUD_URL=http://127.0.0.1:6379
npm install redis url
node pruebaRedis
```

Y lo que se produce luego de la ejecución es:
```
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: '127.0.0.1:6379',
  port: '6379',
  hostname: '127.0.0.1',
  hash: null,
  search: null,
  query: null,
  pathname: '/',
  path: '/',
  href: 'http://127.0.0.1:6379/' }
Reply: OK
Get 
clave
Reply: 1
Reply: 1
hkeys
    0: campo1
    1: campo2
End 
```
