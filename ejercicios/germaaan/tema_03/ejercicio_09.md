# Ejercicio
## 1. Instalar a partir de docker una imagen alternativa de Ubuntu y alguna adicional, por ejemplo de CentOS.
Antes de poder instalar una imagen con Docker, tendremos que añadir nuestro usuario a su grupo:

```
sudo usermod -aG docker $USER
```

Podemos encontrar una gran cantidad de imagenes para Docker en su propio [repositorio](https://hub.docker.com/). Por ejemplo podemos instalar [esta](https://hub.docker.com/r/dorowu/ubuntu-desktop-lxde-vnc/) imagen de Ubuntu que integra OpenSSH y NoVNC; una vez que se haya terminado de descargar, la arrancamos.

```
docker pull dorowu/ubuntu-desktop-lxde-vnc
docker run -i -t -p 6080:6080 dorowu/ubuntu-desktop-lxde-vnc
```

![https://dl.dropboxusercontent.com/s/3dz8z8666soyxv1/eje09_img01.png](https://dl.dropboxusercontent.com/s/3dz8z8666soyxv1/eje09_img01.png)

Como el puerto que hemos indicado en el que arranque es el **6080**, si abrimos nuestro navegador y accedemos a la dirección [127.0.0.1:6080](127.0.0.1:6080) podremos acceder a la máquina con NoVNC mediante nuestro navegador.

![https://dl.dropboxusercontent.com/s/60c5jjdteus3ofp/eje09_img02.png](https://dl.dropboxusercontent.com/s/60c5jjdteus3ofp/eje09_img02.png)

Para loguearnos en una sesión por defecto solo tenemos que dejar el campo de contraseña vacio y pulsar **Connect**.

![https://dl.dropboxusercontent.com/s/rzzkvs8pvhvxv46/eje09_img03.png](https://dl.dropboxusercontent.com/s/rzzkvs8pvhvxv46/eje09_img03.png)

En cuanto a la imagen con CentOS, se haría de la misma forma por ejemplo con [esta imagen](https://hub.docker.com/r/berngp/docker-zabbix/) de CentOS con Zabbix instalado.

```
docker pull berngp/docker-zabbix
sudo docker run -d -p 10051:10051 -p 10052:10052 -p 80:80 -p 2812:2812 --name dockbbix berngp/docker-zabbix
```

![https://dl.dropboxusercontent.com/s/z5abya06b4pgvs1/eje09_img04.png](https://dl.dropboxusercontent.com/s/z5abya06b4pgvs1/eje09_img04.png)

Accesible también desde el navegador introduciendo la dirección del host local y el puerto al que hayamos indicado que vamos a redirigir el puerto 80 de la máquina Docker (recordando usar `sudo` si vamos a usar el puerto **80** al ser este un puerto protegido).

![https://dl.dropboxusercontent.com/s/g59fe3lflv2jt5b/eje09_img05.png](https://dl.dropboxusercontent.com/s/g59fe3lflv2jt5b/eje09_img05.png)

Si tenemos interés de probarlo, el usuario por defecto es **admin** y la contraseña **zabbix**.

![https://dl.dropboxusercontent.com/s/iwl4lnozfzk87mv/eje09_img06.png](https://dl.dropboxusercontent.com/s/iwl4lnozfzk87mv/eje09_img06.png)

## 2. Buscar e instalar una imagen que incluya MongoDB.
Si queremos instalar una imagen que incluye MongoDB podemos descargar la [imagen oficial](https://hub.docker.com/_/mongo/) que hay en Docker Hub. Podemos arrancar el demonio de MongoDB y ver como la imagen está arrancada.

```
docker pull mongo
docker run --name mongocker -d mongo
docker ps
```

![https://dl.dropboxusercontent.com/s/bykxltvqcnffz6o/eje09_img07.png](https://dl.dropboxusercontent.com/s/bykxltvqcnffz6o/eje09_img07.png)
