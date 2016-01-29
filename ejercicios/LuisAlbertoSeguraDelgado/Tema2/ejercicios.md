# Ejercicios del Tema 2

### Ejercicio 1

**Darse de alta en algún servicio PaaS tal como Heroku, Nodejitsu, BlueMix u OpenShift.**

Para registranos en OpenShift debemos acceder a la [página de registro](https://www.openshift.com/app/account/new)

Una vez nos hayamos registrado tendremos acceso al panel de administración de OpenShift y podremos crear y configurar las aplicaciones que deseemos.

![](http://i.imgur.com/IYIaETq.png)

<br>
### Ejercicio 2

**Crear una aplicación en OpenShift y dentro de ella instalar WordPress**

Como hemos visto en el ejercicio 1, en el panel de creación de aplicaciones tenemos muchas opciones para instalar lo que necesitemos de forma automática sin necesidad de complicarnos la vida. Entre las opciones disponible tenemos Wordpress en su versión 4. La seleccionamos y podremos seleccionar diferentes opciones de configuración para nuestro Wordpress.

![](http://i.imgur.com/L4qPWcX.png)
![](http://imgur.com/gaua4h1.png)

Una vez hayamos configurado la base de datos, el dominio y demás, solo quedará acceder a nuestro blog e instalar wordpress como es habitual.

Ahora nos aparecerá la aplicación de Wordpress que hemos creado en nuestra pantalla principal de OpenShift.
![](http://i.imgur.com/68ATVNo.png)

Y podremos ver nuestro blog en la dirección indicada, en mi caso: [ESTA](http://wp-albertosegura.rhcloud.com)

<br>
### Ejercicio 3

**Realizar una aplicación básica que use express para devolver alguna estructura de datos del modelo que se viene usando en el curso. Realizar una app en express que incluya variables como en el caso anterior. Crear pruebas para las diferentes rutas de la aplicación.**

Para este ejercicio se hace uso de la aplicación de calificación de Empresas del tema anterior. El repositorio en el que se encuentra el código con los test y todo es [este](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas). Los tests son [estos](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas/blob/master/test/test.js). Y como se puede ver en el readme.md, los tests en Travis han pasado.

![](http://i.imgur.com/qvuvLGD.png)

### Ejercicio 4
**Instalar y echar a andar tu primera aplicación en Heroku.**

Primero debemos registrarnos en Heroku, obviamente, después necesitaremos instalar el software de consola para configurar las aplicaciones y su despliegue (no pongo imágenes de la instalación porque ya lo tenía instalado, pues lo uso en varias aplicaciones personales).
Después de instalar, tenemos que iniciar sesión en nuestra cuenta de Heroku en el directorio de la aplicación que vayamos a desplegar (solo es necesario hacerlo la primera vez). Además de iniciar la sesión, es necesario iniciar el repositorio remote de Heroku para poder hacer el despligue más tarde, simplemente haciendo un `git push`

![](http://i.imgur.com/0L1Mf11.png)

Para evitar tener muchas aplicaciones en Heroku (pues no tengo espacio al ser mi cuenta gratuita y tener varias subidas), desplegaré la aplicación de empresas de forma que sirve también para el resto de ejercicios.
La app está disponible en http://empresas-cc.herokuapp.com/

Aunque no tiene interfaz web, pero está desplegada y configurada con su base de datos mongo de MongoLab.

### Ejercicio 5
**Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.**

Lo primero es preparar el fichero Procfile para que Heroku sepa como iniciar la web. El Procfile de la aplicación de Empresas se puede consultar en [su repositorio](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas).
Una vez configurado, necesitamos instarlar foreman del siguiente modo:

![](http://imgur.com/ZpSQQWe.png)

Y finalmente, ejecutamos foreman para probar la web.

![](http://imgur.com/d22BOsi.png)


### Ejercicio 6
**Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow.**

Para realizar el despliegue automático a Heroku desde el sistema de Integración Continua una vez que los test hayan pasado he utilizado Travis-CI. Simplemente hace falta indicar el token de Heroku para que haga el despliegue automáticamente al pasar los tests.
Para ello es necesario tener instalada la herramienta de linea de comandos de Travis, para instalarla simplemente hace falta eejecutar `sudo gem install travis`

Una vez que tengamos el cliente de Travis y el cliente de Heroku, simplemente ejecutando el comando siguiente, se nos añadirá el token de Heroku cifrado (por seguridad) al archivo .travis.yml, de forma que se pueda desplegar la aplicación.

```
travis encrypt $(heroku auth:token) --add deploy.api_key
```

De este modo, simplemente haciendo push a nuestro repositorio de Github, se realizarán los tests en Travis, y si pasan, se desplegará la aplicación.

El fichero [.travis.yml](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas/blob/master/.travis.yml) configurado. Y cuidado con el sangrado en el archivo, porque sino el p*** travis no desplegará nuestra aplicación.

### Ejericio 7
**Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido.**

Como ya se ha visto en el resto de ejercicios, se ha desplegado la aplicación de calificación de empresas en Heroku.

Dentro del código del fichero main.js se han tenido en cuenta las variables de entorno necesarias para poder hacer funcionar la aplicación:

- PORT: Es necesario usar la variable de entorno de puerto para saber en que puerto debe escuchar el servidor web Express.
- MONGODB: He creado esta variable de entorno desde el panel web de configuración de heroku para indicar la url de la base de datos Mongo que uso para almacenar la información de la aplicación. La base de datos la he tomado de MongoLab.

![](http://i.imgur.com/SSWMm3u.png)

Como ya se ha dicho, también es necesario añadir el [Procfile](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas/blob/master/Procfile).

También es necesario añadir las dependencias de desarrollo `devDependencias` como dependencias normales en en fichero `package.json` en caso de que necesitemos alguna para construir la aplicación (como Gulp o Grunt), no nos vayamos a volver locos porque la puñetera aplicación no se contruye y no funciona, bastante tuve que pasar la primera vez que subí una aplicación a Heroku en la que necesitaba alguna de estás dependencias...


### Ejercicio 8

**Instalar o darse de alta en un servicio Redis en la nube y realizar sobre él las operaciones básicas desde el panel de control.**

No uso Redis en la aplicación de las empresas porque ya había empezado a usar MongoDB. Por lo que para esta aplicación me he registrado en MongoLab para usar una de sus bases de datos. Aunque para la aplicación del [Proyecto de la asignatura](https://github.com/segura2010/CC-Proyecto-OpenSecureChat) si que me he registrado en RedisLab para la base de datos de Redis que necesito.

**Instalar un cliente de línea de órdenes de Redis o un cliente REST y realizar desde él las operaciones básicas de creación y lectura de información**

Para esta parte usaré el cliente de linea de comandos que incluye la base de datos redis al instalarla en mi ordenador. Algunas de las operaciones de esta base de datos son:

- `set`: establece el valor de una variable en un par clave-valor,
- `get`: recupera el valor de una varible en un par clave-valor.
- `hset`: establece el valor de una varible en un par clave-valor dentro de un conjunto de pares clave-valor indexados.
- `hget`: recupera el valor de una varible en un par clave-valor dentro de un conjunto de pares clave-valor indexados.
- `hkeys`: recupera un listado con todas las claves de los pares clave-valor en un conjunto.

![](http://i.imgur.com/gXup0T9.png)

**Ejecutar ejemplos de cualquier lenguaje de programación sobre la instalación realizada**

En lugar de hacer un ejemplo concreto para este ejercicio, podemos usar como ejemplo el cógigo realizado para el proyecto de la asignatura, pues se utiliza Redis.
Se puede ver como se insertan objetos en la base de datos en el fichero de los [Chats](https://github.com/segura2010/CC-Proyecto-OpenSecureChat/blob/master/lib/Chat.js), y como conectar a la base de datos (preparado por si es en local o una base de datos externa configurada en una variable de entorno) en [el fichero principal](https://github.com/segura2010/CC-Proyecto-OpenSecureChat/blob/master/app.js) de la aplicación.
En esta aplicación también se puede ver como usar la base de datos Mongo.


### Ejercicio 9

**Realizar un pequeño programa, en el lenguaje elegido y sobre la base de datos "tradicional" elegida (PostgreSQL o cualquier otro online) que realice el ciclo básico de una base de datos. Puede ser la aplicación de calificación de empresas realizada anteriormente.**

La aplicación para este ejercicio se ha subido al [siguiente repositorio de Github](https://github.com/segura2010/CC-CalificacionEmpresas-PG).

Para realizarla me he registrado en [ElephantSQL](http://elephantsql.com/) para tener acceso a un BD Postgres.

Al igual que en los ejercicios anteriores con Mongo, es necesario usar una variable de entorno para la URL de la base de datos (que contiene también el usuario y contraseña).

Por simplicidad, en esta aplicación todas las opciones (añadir, editar, eliminar y listar) de las empresas se realizan por GET.

Para listar las empresas solamente tenemos que hacer una petición GET a la URL http://localhost:3000/empresas/

![](http://imgur.com/6WpV1GY.png)

O para añadir nuevas empresas ir a la URL: http://localhost:3000/empresa/add/nombre

![](http://imgur.com/AzDrHZX.png)

Y para el resto de operaciones se hace igual:
- http://localhost:3000/empresa/delete/id
- http://localhost:3000/empresa/update/id/nuevonombre

Internamente, cada vez que se llaman a estas operaciones, lo que se hace es ejecutar la setencia SQL correspondiente. Por ejemplo, para eliminar, la setencia es: `DELETE FROM empresas WHERE id=($1)`. Donde ($1) indica que se reemplaza por el valor del identificador indicado en la petición. (Esto se puede ver en el archivo de las [empresas](https://github.com/segura2010/CC-CalificacionEmpresas-PG/blob/master/lib/Empresa.js))

De igual forma, para la modificación de la empresa tenemos la sentencia: `UPDATE empresas SET nombre=($1) WHERE id=($2)`, y para insertar `INSERT INTO empresas(nombre, calificacion) VALUES($1, $2)`.

Pero no podemos olvidar que antes de insertar alguna empresa debemos crear la tabla de empresas para que todo funcione. Esto se hace con la sentencia `CREATE TABLE IF NOT EXISTS empresas (id SERIAL PRIMARY KEY, nombre VARCHAR(30) NOT NULL, calificacion INTEGER)`

