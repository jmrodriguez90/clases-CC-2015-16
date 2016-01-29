// Programa de Prueba para utilizar operaciones básicas sobre Redis
//-------------------------------------------------------------------------

// **Autor:** Abel Josué Francisco Agra
// **Versión:** _0.1_

// El presente programa permite ejecutar algunas funcionalidades básicas sobre una 
// instalación local de Redis, utilizando node.js

// El presente programa constituye un ejercicio para la asignatura de Cloud Computing (CC),
// en el marco del Máster en Ingeniería Informática de la Universidad de Granada

// Cargar módulo de Redis
var redis = require('redis');

// Crear cliente para acceder al servidor Redis
// Conectar a base de datos "0" (default)
client = redis.createClient();
    
console.log("[INFO] Iniciando Ejecucion de Pruebas!!!");
console.log("");

// Realizar pruebas sobre algunas funciones de lectura y escritura de Redis
client.on("error", function (err) {

	console.log("Error Encontrado al acceder desde el cliente: " + err);

});

/**** Claves individuales ****/

// Asignar valor a clave 
client.set("test1", "test1", redis.print);

// Eliminar clave
client.del("test1", redis.print);

/**** Manejo de Listas ****/

// Agregar elemento al principio de la lista
client.lpush("lista1", "elem1", redis.print); 

// Agregar elemento al final de la lista
client.rpush("lista1", "elem2", redis.print); 

client.rpush("lista1", "elem3", redis.print); 
client.rpush("lista1", "elem4", redis.print); 
client.rpush("lista1", "elem5", redis.print); 
client.rpush("lista1", "elem6", redis.print); 
client.rpush("lista1", "elem7", redis.print);

// Tomar elementos 2 - 4 de la lista
client.lrange("lista1", 1, 3, redis.print);

// Determinar número de elementos en la lista
client.llen("lista1", redis.print);

// Tomar primer elemento de la lista
client.lpop("lista1", redis.print);

// Tomar último elemento de la lista
client.rpop("lista1", redis.print);

/**** Manejo de Conjuntos ****/

// Agregar elementos al conjunto
client.sadd("conjunto1", "elem1", redis.print);
client.sadd("conjunto1", "elem2", redis.print);
client.sadd("conjunto1", "elem3", redis.print);
client.sadd("conjunto1", "elem4", redis.print);

client.sadd("conjunto2", "elem5", redis.print);
client.sadd("conjunto2", "elem6", redis.print);
client.sadd("conjunto2", "elem7", redis.print);
client.sadd("conjunto2", "elem8", redis.print);

// Eliminar elementos del conjunto
client.srem("conjunto1", "elem1", redis.print);

// Determinar si elementos están en el conjunto
client.sismember("conjunto1", "elem3", redis.print);
client.sismember("conjunto1", "elem8", redis.print);

// Mostrar elementos en el conjunto
client.smembers("conjunto1", redis.print);

// Unir dos conjuntos
client.sunion("conjunto1", "conjunto2", redis.print);

/**** Manejo de Hash ****/

// Crear atributos de nuevo objeto test2:4000
client.hset("test2:4000", "atrib1", "val1", redis.print);
client.hset(["test2:4000", "atrib2", "val2"], redis.print);
client.hset("test2:4000", "atrib3", "val3", redis.print);

// Imprimir valores de atributos del objeto creado
client.hgetall("test2:4000", function (err, obj) {
    
    console.log(obj);
    
});

// Imprimir atributos del objeto creado
client.hkeys("test2:4000", function (err, replies) {
    console.log(replies.length + " Atributos:");
    
    replies.forEach(function (reply, i) {
        console.log("    " + i + ": " + reply);
    });
    
    client.quit();
    
    console.log("");
    console.log("[INFO] Terminando Ejecucion de Pruebas!!!");
});