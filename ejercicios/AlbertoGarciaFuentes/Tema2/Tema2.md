##Ejercicio1

###Darse de alta en algún servicio PaaS tal como Heroku, Nodejitsu, BlueMix u OpenShift.

Nos damos de alta en la plataforma:

![img](https://dl.dropboxusercontent.com/s/kwmabhuvi85iveq/openshift.png?dl=0)

Y finalmente ya podemos crear nuestra primera aplicación:

![img](https://dl.dropboxusercontent.com/s/tifjoc6tdobo0oa/openshift2.png?dl=0)
 

##Ejercicio2
###Crear una aplicación en OpenShift y dentro de ella instalar WordPress. 

Dentro de Openshift seleccionamos la opción de crear una nueva aplicación. 

A continuación nos saldrán muchas opciones de aplicacaciones, en nuestro caso seleccionamos la de "WordPress":

![img](https://dl.dropboxusercontent.com/s/efx1axwkz7242sg/wordPress.png?dl=0)

Nos aparecerá la pantalla de configuración de la aplicación WordPress y la rellenamos:

![img](https://dl.dropboxusercontent.com/s/6pa0lx6fjmi3jds/wordpress2.png?dl=0)

Finalmente ya tenemos el sitio creado como vemos en esta imagen, además de sus "cartuchos" PHP y MySQL:

![img](https://dl.dropboxusercontent.com/s/vtnrn1ogsnlqld2/wordPress3.png?dl=0)

Para acabar vemos como ha quedado nuestro sitio nuevo y creamos una nueva entrada en el blog:

![img](https://dl.dropboxusercontent.com/s/qvc2lldwzb6xsex/wordPress4.png?dl=0)



##Ejercicio3
###Realizar una aplicación básica que use express para devolver alguna estructura de datos del modelo que se viene usando en el curso.



##Ejercicio4
###Instalar y echar a andar tu primera aplicación en Heroku.

Primero debemos de registrarnos en la página oficial de Heroku.

A continuación instalamos ruby en nuestro ordenador

```
sudo apt-get install ruby
```

Una vez instalado ruby podemos instalar las herramientas de Heroku con:

```
wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```

![img](https://dl.dropboxusercontent.com/s/z6knsznso75dm33/heroku.png?dl=0)


Ahora desde la terminal nos logeamos en Heroku:

```
heroku login
```

![img](https://dl.dropboxusercontent.com/s/oxbjhrfu7hd5fa2/heroku2.png?dl=0)


Para poner en marcha una aplicación de heroku nos basaremos en una aplicación de prueba ya hecha:

```
git clone https://github.com/heroku/node-js-getting-started.git
cd node-js-getting-started
heroku apps:create --region eu ccpruebaheroku
git push heroku master
```

![img](https://dl.dropboxusercontent.com/s/9sooohbetrn5pni/heroku3.png?dl=0)

Ya está disponible la pagina web:

https://ccpruebaheroku.herokuapp.com/

##Ejercicio5
###Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.
####Como en todos los ejemplos anteriores, se puede cambiar “node” y “heroku” por la herramienta que se haya elegido.

Vamos a usar nuestra aplicación del juego de la ETSIIT para hacer este ejercicio:

```
heroku apps:create --region eu juegoetsiit
git push heroku master
```

![img](https://dl.dropboxusercontent.com/s/ixfbnjo47tdgxaj/despligue.png?dl=0)


Para usar 'foreman' primero tenemos que instalarlo. Una vez instalado, podremos ejecutar localmente nuestra aplicación siguiendo lo descrito en el archivo Procfile.

```
sudo gem install foreman
foreman start web
```

![img](https://dl.dropboxusercontent.com/s/f5102ziwnjtmqg1/foreman.png?dl=0)

Para acceder a la aplicación, por defecto foreman usa el puerto 5000, asi que en este caso accedemos desde [localhost:5000](localhost:5000).

Finalmente vamos a volver a subir la aplicacion a heroku pero primero pasamos los test:

```
npm test
git push heroku master
```

La aplicación está disponible [aqui](https://juegoetsiit.herokuapp.com/)

##Ejercicio6
###Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow


##Ejercicio7
###Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido. 

Para desplegar la aplicación en heroku debemos de tener configurados los siguientes archivos:

- package.json: Aquí debemos de tener especificadas en dependences todas las dependencias que la aplicación necesita. Si no están bien especificadas el programa fallará. Al desplegar aplicaciones en la nube normalmente se hace un git clone del directorio y hace npm install para instalar todas las dependencias.

- Procfile: En nuestro caso hará 'node ServidorJuego.js' para ejecutar el programa servidor de la aplicación. Este fichero es importante en la definición de un despligue en la nube ya que es el comando que se hará por defecto.

- IP y puerto: tenemos que especificar la dirección IP y el puerto que nuestra aplicación escuchará para atender peticiones, como en principio no conocemos la dirección IP de nuestra aplicación en Heroku y sabemos que Heroku usa por defecto el puerto 5000, vamos a configurar nuestra aplicación para atienda peticiones de cualquier dirección IP y escuche el puerto 5000, u otros que le pasemos como parámetros desde línea de comandos.

  - _Especificación de dirección IP y puerto_

    ```
    httpServer.listen(process.env.PORT || 5000, process.env.IP || "0.0.0.0");
    ```

##Ejercicio8
###Crear una aplicación mínima y usar un buildpack no estándar para desplegarla en Heroku o un cartridge no estándar en OpenShift.




##Ejercicio9
### 1. Instalar o darse de alta en un servicio Redis en la nube y realizar sobre él las operaciones básicas desde el panel de control.

Instalamos Redis con 'sudo apt-get install redis-server'.

### 2. Instalar un cliente de línea de órdenes de Redis o un cliente REST y realizar desde él las operaciones básicas de creación y lectura de información.

Nos conectamos a la base de datos con 'redis-cli'.

Las operaciones de creación y lectura de información son:
- 'set': establece el valor de una variable en un par clave-valor,
- 'get': recupera el valor de una varible en un par clave-valor.
- 'hset': establece el valor de una varible en un par clave-valor dentro de un conjunto de pares clave-valor indexados.
- 'hget': recupera el valor de una varible en un par clave-valor dentro de un conjunto de pares clave-valor indexados.
- 'hkeys'`: recupera un listado con todas las claves de los pares clave-valor en un conjunto.

## 3. Ejecutar ejemplos de cualquier lenguaje de programación sobre la instalación realizada.

```
'use strict';

var redis = require('redis'),
    client = redis.createClient();

client.sadd('mylist', 1);
client.sadd('mylist', 2);
client.sadd('mylist', 3);

client.set('weight_1', 5);
client.set('weight_2', 500);
client.set('weight_3', 1);

client.set('object_1', 'foo');
client.set('object_2', 'bar');
client.set('object_3', 'qux');

client.sort('mylist', 'by', 'weight_*', 'get', 'object_*', redis.print);
// Prints Reply: qux,foo,bar
```

- Ejecución del programa:

```
export REDISCLOUD_URL=http://127.0.0.1:6379
npm install redis url
node sort
```

- Salida de la ejecución:

![img](https://dl.dropboxusercontent.com/s/dwlg5dhpv3zerb8/redis.png?dl=0)
