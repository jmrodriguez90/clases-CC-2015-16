**José Cristóbal López Zafra - Ejercicios del [tema 2](http://jj.github.io/CC/documentos/temas/PaaS)**

##Ejercicio1

###Darse de alta en algún servicio PaaS tal como Heroku, Nodejitsu, BlueMix u OpenShift.

 Accedemos a la web de [OpenShift](https://www.openshift.com/) y nos registramos.

[Dentro](http://i.imgur.com/pM22hgv.png) podremos gestionar nuestras aplicaciones o cambiar la configuración, por ejemplo.

##Ejercicio2
###Crear una aplicación en OpenShift y dentro de ella instalar WordPress. 

Dentro de OpenShift vamos al botón ["Add Aplication..."](https://openshift.redhat.com/app/console/application_types) para crear nuestra primera apliación.

Escogemos de la lista WordPress:

![lista de aplicaciones](https://i.gyazo.com/6d4c4b5a4f4c95317d32d871a5d3138f.png)

Escogemos el nombre que queremos, y nos queda:

![aplicación](http://i.imgur.com/AhXucv0.png)


Vamos a nuestra aplicación mediante el enlace que nos da y nos registramos en WordPress:

![WordPress](http://i.imgur.com/PfKMINP.png)

Y ya está instalado, configurado y disponible para publicar entradas:

![entrada0](http://i.imgur.com/6vm3VUi.png)


##Ejercicio3
###Realizar una aplicación básica que use express para devolver alguna estructura de datos del modelo que se viene usando en el curso.

Usamos la aplicación de ejemplo, la generamos con `express prueba-rest` y  ejecutamos `cd prueba-rest && npm install`.

[Pantallazo de la salida](https://i.gyazo.com/f2a00ef1eb8e2f406e32560665063d63.png)

###Realizar una app en express que incluya variables como en el caso anterior
 
Tendremos que modificar el fichero index.js o añadir los ficheros que se necesiten, para ajustarlo [al ejemplo](https://github.com/JJ/node-app-cc).

###Crear pruebas para las diferentes rutas de la aplicación

Creamos un test con el código:

```
#!/usr/bin/env nodejs

var request = require("supertest");
var app = require('../index.js');

describe('Pruebas de acceso a rutas', function() {
  it("Porras actuales", function(done) {
    request(app)
      .get("/porras")
      .expect(200, done);
  });
});
```

y lo [ejecutamos](https://i.gyazo.com/cf4b66be04268cfd48bc685e618c7447.png).


##Ejercicio4
###Instalar y echar a andar tu primera aplicación en Heroku.

Instalamos el cinturon de heroku con `wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh ` y `heroku login`

Nos logueamos y clonamos una [aplicación de ejemplo](https://github.com/heroku/node-js-getting-started): `git clone git@github.com:heroku/node-js-getting-started.git`.

La instalamos y arrancamos con `npm install` y `npm start`. Podemos ver que se está ejecutando en http://localhost:5000/

Y para desplegar en Heroku:

`heroku create`
`git push heroku master`
`heroku open`

Accedemos al [dashboard de Heroku](https://dashboard.heroku.com/apps) y comprobamos que [la hemos creado](https://i.gyazo.com/2b43b50d4da76fb9a65008b883217770.png).

En mi caso puedo ver la aplicación desplegada en: https://dry-meadow-8186.herokuapp.com/ 

##Ejercicio5
###Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.
####Como en todos los ejemplos anteriores, se puede cambiar “node” y “heroku” por la herramienta que se haya elegido.

Para probarla en local ejecutamos `foreman start web` (con `web: python script.py` dentro del archivo *Procfile*)

![preba con foreman](https://i.gyazo.com/76fc316245f393826a4522a19376d927.png)


Cremos la aplicación (especificando el buildpack python) en Heroku con `heroku apps:create --region eu --buildpack heroku/python periodicointeractivo-heroku1-1` (ejecutando dentro del directorio de la aplicación)

(O si ya la teníamos en Heroku, clonamos con `heroku git:clone -a periodicointeractivo-heroku1-1`)

![app creada](https://i.gyazo.com/cd7c6d39b1d23fb19f604b195379771d.png)

Después tendremos que modificar el *Procfile* para ajustar la ejecución de la aplicación. Añadimos un archivo *Procfile* con `web: python script.py`. 

Guardamos cambios ( `git add Procfile` `git commit` y `git push heroku master`)

[Aplicación con cambios guardados](https://i.gyazo.com/44e75f6ee25b60a90b25415b12ae22c5.png)

##Ejercicio6
###Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow

Para trabajar con la aplicación de [ejemplo](https://github.com/heroku/node-js-getting-started) que hemos usado tenemos que borrar el origen inicial `git remote rm origin` y ajustar el de un repositorio propio con `git remote add origin git@github.com/JCristobal/node-js-getting-started.git`.

(O trabajar con [nuestro propio fork](https://github.com/JCristobal/node-js-getting-started))

Primero probaremos la [integración con GitHub](https://devcenter.heroku.com/articles/github-integration#enabling-github-integration): Nos vamos al panel de control y en Deploy seleccionamos "GitHub Connect to GitHub".

Seleccionamos el repositorio y continuamos, y nos queda:

![integracion github](https://i.gyazo.com/b00664dce5a814fb818830d0fa260727.png)

Debajo activamos los despliegues automáticos a la rama del respositorio que queramos.

Y dentro de GitHub (respositorio asociado) > Settings > Webhooks & Services, buscamos y añadimos el servicio de *HerokuBeta* y rellenamos los datos que piden.

[Aplicación con el despliegue automático después de algunos cambios](https://i.gyazo.com/30dfed21186ee73ef0bb152c9a60a338.png): https://dry-meadow-8186.herokuapp.com/


También pruebo con Snap CI. Para ello me registro con mi perfil de GitHub y escojo el repositorio en que estamos trabajando:

![snap test](https://i.gyazo.com/717a84beda6e5b3e25787403883753cf.png)

Podemos cambiar la [configuración](https://i.gyazo.com/242f28a9320467bae25916df52823c62.png), y para asociarlo con Heroku creamos un nuevo "Stage".

![snap heroku](https://i.gyazo.com/b17d0c5bb1fa5b2abb3cc098ef0ad2be.png)

Vemos el nuevo "stage":

![snap heroku passed](https://i.gyazo.com/9800997f2c13e1cfea4cbb986b38440c.png)

##Ejercicio7
###Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido. 

Continuamos con Heroku. Con la aplicación asociada a su repositorio de GitHub:

![connect to github](https://i.gyazo.com/a5f90d999de240911f180bbb6da855f0.png)


Creo la aplicación en Heroku (dentro del directorio de nuestra aplicación) con `heroku apps:create --region eu --buildpack heroku/python periodicointeractivo`.

Añadimos un archivo *Procfile* con `web: python script.py $PORT` (con PORT declarada en mi caso `heroku config:set PORT=8080`)

Guardamos los cambios con git y podemos ver como actualizamos la aplicación y desplegamos (también podemos enviar los cambios a Heroku con `git push heroku`):

![Actualizamos y desplegamos](https://i.gyazo.com/2919a39da50ca0d8a9944f02e0fcab40.png)

Se puede ver desplegada correctamente en [Heroku](https://periodicointeractivo.herokuapp.com/).

##Ejercicio8
###Crear una aplicación mínima y usar un buildpack no estándar para desplegarla en Heroku o un cartridge no estándar en OpenShift.

Los buildpack [estándar de Heroku](https://devcenter.heroku.com/articles/buildpacks) son Ruby, Node.js, Python ... pero para este ejercicio usaremos Erlang, lenguaje que no soporta por defecto.

Usamos una [aplicación básica], y dentro de su directorio especificamos nuestro buildpack con `heroku create --buildpack "https://github.com/heroku/heroku-buildpack-erlang.git"`.
Para la aplicación especificamos la versión con `echo OTP-17.5.1 > .preferred_otp_version`, `git commit` para guardar los cambios y la creamos con `git push heroku master`

[Información de la aplicación](https://i.gyazo.com/153a1c6512853c005b6e510d3f7c9341.png)

En mi caso se puede ver desplegada en http://intense-ridge-8674.herokuapp.com/ 


##Ejercicio9
###Instalar o darse de alta en un servicio Redis en la nube y realizar sobre él las operaciones básicas desde el panel de control.

Para instalarlo ejecutamos `sudo apt-get install redis-server`.

###Instalar un cliente de línea de órdenes de Redis o un cliente REST y realizar desde él las operaciones básicas de creación y lectura de información.

Nos conectamos a la base de datos con `redis-cli`. Las operaciones básicas para gestionar la información son:


- set 'clave' 'valor': *establece el valor de una variable en un par clave-valor*
- get 'clave': *recupera el valor de una varible en un par clave-valor*
- hset 'variable' 'clave' 'valor': *stablece el valor de una varible en un par clave-valor dentro de un conjunto de pares clave-valor indexados*
- hget 'variable' 'clave': *recupera el valor de una varible en un par clave-valor dentro de un conjunto de pares clave-valor indexados*
- hkeys 'clave': *recupera un listado con todas las claves de los pares clave-valor en un conjunto*


![algunas operaciones](https://i.gyazo.com/7decda74855cbf089441e2ddbd8f948c.png)

###Ejecutar ejemplos de cualquier lenguaje de programación sobre la instalación realizada.

Usaremos el programa de NodeJS "pruebaRedis" (una versión del compañero [Germán Martínez](https://github.com/germaaan/))con el código:

```
#!/usr/bin/env node
var redis = require('redis');
var url = require('url');

var redisURL = url.parse(process.env.REDISCLOUD_URL);
console.log(redisURL);
var client = redis.createClient(redisURL.port, redisURL.hostname, {
  no_ready_check: true
});

client.set("var", "variable", redis.print);
client.get("var", function(err, reply) {
  console.log('Get ');
  if (err) {
    console.log(err);
  } else {
    console.log(reply.toString());
  }
});

console.log("End ");
client.end();
```

Exporto la variable de entorno de la dirección de la BD: `export REDISCLOUD_URL=http://127.0.0.1:6379`

Instalo `npm install redis url` y ejecuto el programa: `nodejs pruebaRedis`

Con lo que obtengo:

![salida](https://i.gyazo.com/3a845f7de1bbcef2ae818b9af30cf36f.png)


También pruebo con más profundidad el [tutorial interactivo web](http://try.redis.io/). Además se encuentra disponible para usarlo [en Azure](https://azure.microsoft.com/es-es/services/cache/) y en muchas plataformas, por lo que será una alternativa con mucho peso a la hora de usar o cambiar a una BD en cualquier proyecto.






