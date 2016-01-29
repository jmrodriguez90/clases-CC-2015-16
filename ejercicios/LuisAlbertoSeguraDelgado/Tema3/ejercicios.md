# Ejercicios del Tema 3

### Ejercicio 1

LXC instalado y perfectamente configurado, simplemente ejecutando `sudo apt-get install lxc`

![](http://imgur.com/1i7scES.png)


### Ejercicio 2

![](http://imgur.com/YsCkZoP.png)
![](http://imgur.com/WTRm24U.png)

Una vez descargado todo lo necesario e instalado, como podemos ver en la imágenes anteriores, ya tenemos nuestro contenedor listo para funcionar.

En la siguiente captura podemos ver las nuevas interfaces que se han creado:

![](http://imgur.com/W7FIZOw.png)

Como vemos, se han creado las interfaces lxcbr0 y vethNb38rk. Ambas son puentes que permiten la conexión a internet desde nuestro contenedor. De esta forma podemos simular los habituales eth0 y lo que permiten la conexión a internet. Con estas interfaces nuevas que se crean, el contenedor tiene acceso a internet y tiene un conexión con el host, de forma que pueden comunicarse entre ellos si fuese necesario. Para ello, se crea un red local simulada entre el host y el contenedor, y a través de esa red local se permite la conexión a Internet por parte del contenedor.


### Ejercicio 3

Para instalar un contenedor basado en Fedora, simplemente ha sido necesario indicar el comando `sudo lxc-create -t fedora -n fedora`. El único problema que ha dado ha sido que necesitaba tener curl y yum instalados en mi sistema principal para poder crear el contenedor. Con un simple `apt-get install yum curl` todo se ha resuelto, he vuelto a ejecutar el comando para que crease el contenedor y listo.

En la siguiente imagen podemos ver el contenedor Fedora iniciado y funcionando.

![](http://imgur.com/JjBtMSF.png)

### Ejercicio 4

Para instalar LXC-Webpanel solamente hace falta ejecutar el comando: `wget https://lxc-webpanel.github.io/tools/install.sh -O - | bash`

![](http://imgur.com/ePtX0IJ.png)
![](http://imgur.com/umg2z9e.png)

Depués para limitar la cantidad de memoria que puede usar el contenedor o el número de CPUs, solamente debemos hacer click sobre el en el menú de la izquierda y configurar lo que deseemos.

![](http://imgur.com/IOy3mCd.png)
![](http://imgur.com/Ga3jLxF.png)

### Ejercicio 5

Comparar nginx contenedor vs host


### Ejercicio 6

Para instalar Juju solamente hace falta añadir el repositorio correspondiente con: `add-apt-repository ppa:juju/stable`. Y después instalar con: `sudo apt-get install juju-core juju-local` (antes hay que hacer un update, evidentemente).

Una vez instalado, hay que indicarle que configure todo con los siguiente comandos:

```
juju initjuju switch localjuju bootstrap
```

OJO: Después de juju init, debemos editar el fichero que genera (y que nos avisa que ha creado) y modificar la linea `default:amazon` por `default:local`.

Para Ubuntu 12.04 parece que hay algunos problemas con el paquete cloud-image-utils, por lo que es necesario añadir sus repositorios e intalarlo con:
```
add-apt-repository cloud-archive:tools
apt-get update
apt-get install cloud-image-utils
```

Finalmente, para crear un contenedor con MySQL, ejecutamos `juju deploy mysql`. Y finalmente acabamos con  `juju expose mysql`.

### Ejercicio 7

Para crear una relación entre una maquina MySQL y otra con MediaWiki, debemos primero crear cada una de ellas con: `juju deploy mysql` y `juju deploy mediawiki`.
Depués, debemos crear una relación entre ellas con `juju add-relation mediawiki:db mysql`.

Finalmente, acabamos con `juju expose mediawiki`.

Un script para reproducir la configuración usada quedaría del siguiente modo:

```
juju bootstrap
juju deploy mysql
juju deploy mediawiki
juju add-relation mediawiki:db mysql
juju expose mediawiki
```

Ya podemos ver la maquina en el panel web de LXC.

![](http://i.imgur.com/CnGMvq2.png)


### Ejercicio 8

Ya tenía instalado Docker antes de hacer este ejercicio, pero en Mac OSX es muy fácil y viene explicado aquí: https://docs.docker.com/mac/step_one/

Simplemente hay que descargarse el instalador Docker Toolbox y ejecutarlo para instalar. Una vez instalado, cada vez que queramos usar Docker, necesitaremos ejecutarlo usando el ejecutable "Docker Quickstart Terminal". De esta forma se nos abrirá una terminal que ejecuta un script que, básicamente, configura todas las variables de entorno e inicializa docker para poder usarlo con los comandos habituales (es como iniciar el servicio de Docker con `docker -d &`).

### Ejercicio 9

Para instalar una imagen alternativa de Ubuntu podemos usar, por ejemplo `docker pull ubuntu:12.04`, que nos descargará la versión de Ubuntu 12.04.

Para instalar CentOS podemos usar `docker pull centos`, o instalar una versión alternativa que haya. Se pueden consultar las imágenes disponibles en: https://hub.docker.com/_/centos/

Para instalar una con MongoDB podemos usar la imagen oficial con `docker pull mongo`, que se puede consultar en: https://hub.docker.com/_/mongo/

![](http://i.imgur.com/EhydpoA.png)


### Ejercicio 10

Para crear un usuario propio en el contenedor, podemos usar el comando "useradd" de la siguiente forma: `useradd alberto`. Después podemos instalar nginx de forma normal, como si fuese un ordenar normal con Ubuntu (con `sudo apt-get install nginx`).

Aunque no podremos acceder al servidor a través del navegador de forma tan sencilla. Si hemos iniciado el contenedor con `docker run -i -t ubuntu /bin/bash` no se habrá expuesto ningún puerto para acceder desde la máquina host o desde cualquier otro lugar de internet.

Para que se pueda acceder a ese puerto desde la máquina host a través de la ip de la red simulada para el contenedor, será necesario iniciar con el comando: `docker run -p 8080:80 -i -t ubuntu /bin/bash`. De esta forma exponemos el puerto 80 del contenedor en el puerto 8080 de cara a la máquina host. De esta forma podremos acceder al servicio usando la ip del contenedor y el puerto 8080. Por otro lado, los cambios en el contenedor no son persistentes, así que tendremos que volver a instalar nginx.

![](http://i.imgur.com/3iiMDnF.png)

### Ejercicio 11

Como podemos ver en la imagen, para guardar el contenedor tal y como se encuentra en un momento determinado, solamente necesitamos hacer "commit". Para ello, necesitamos saber en identificador completo del contenerdor. Usando la orden `docker ps -a -notrunc` ó `docker ps -a --no-trunc`, podemos obtener el identificador completo del contendor. Una vez tenemos el identificador completo, podemos utilizar el comando `docker commit ID_CONTENEDOR NOMBRE_QUE_QUEREMOS_DAR`. Y ya nos aparecerá el contenedor como una nueva imagen en nuestras imágenes. Podemos ver las imágenes instaladas con `docker images`.

![](http://i.imgur.com/hgglio7.jpg)

### Ejercicio 12

En el [repositorio del proyecto de la asignatura](https://github.com/segura2010/CC-Proyecto-OpenSecureChat) podemos ver un fichero llamado [Dockerfile](https://github.com/segura2010/CC-Proyecto-OpenSecureChat/blob/master/Dockerfile). Los ficheros Dockerfile permiten especificar los servicios y demás elementos que necesitará nuestro contenedor para funcionar, de forma que simplemente usando el comando `docker build -t nombre_contenedor path/al/ficherodocker/` nos creará el contenedor.

Como se puede ver en el fichero, se indica el sistema operativo (la imagen) sobre el que se sostenta nuestra aplicación. Y después simplemente vamos indicando los recursos que necesitamos instalar en el sistema para que funcione. En este caso, como usamos Ubuntu, usamos `apt-get` para instalar los diferentes servicios. En mi caso necesito MongoDB, Redis, Git, NodeJS y NPM. Además de indicar los comandos para instalar los diferentes servicios que necesitamos, debemos indicar las condiguraciones que necesitemos. En nuestro caso, es necesario crear la carpeta en la que se guardarán los datos de la base de datos MongoDB (/data/db).

También se indica que debe clonar el repositorio de nuestro proyecto (en la rama production que será la que contenga la última versión estable). Y después de clonar se indica que el directorio en el que se ha clonado será el directorio de trabajo. Una vez hecho eso, terminamos de configurar nuestra aplicación instalando los paquetes de NodeJS necesarios con `npm install` y ejecutando las tareas de Grunt. Finalmente se indica con CMD cual es el comando principal que debe ejecutarse al iniciar el contenedor. Esto permite ejecutar el contenedor como un programa normal, simplemente usando `docker run -d -t osc`. Como podemos ver, lo que se ejecuta con CMD es un [script bash](https://github.com/segura2010/CC-Proyecto-OpenSecureChat/blob/master/docker_start.sh). Básicamente este script se encarga de iniciar la base de datos mongo y redis, y actualizar la aplicación en caso de que fuese necesario. Y finalmente, inicia la aplicación NodeJS.
