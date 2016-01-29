# Ejercicio
## Instalar docker.

Antes de instalar **Docker** debemos saber que necesitas un *sistema* de **64 bits** con un *kernel* mínimo **3.10**. Podemos comprobar la versión de nuestro kernel con `uname -r`. Lo siguiente es añadir la clave del repositorio de Docker para que APT lo reconozca como un servidor de instalación verificado:

```
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D
```

Ahora creamos el archivo */etc/apt/sources.list.d/docker.list* e introducimos en su interior la línea del repositorio correspondiente a la versión de nuestra distribución:

```
echo 'deb https://apt.dockerproject.org/repo ubuntu-wily main' | sudo tee /etc/apt/sources.list.d/docker.list
```

![https://dl.dropboxusercontent.com/s/5fl4gepcv567a5c/eje08_img01.png](https://dl.dropboxusercontent.com/s/5fl4gepcv567a5c/eje08_img01.png)

Finalmente actualizamos la lista de paquetes e instalamos Docker.

```
sudo apt-get update
sudo apt-get install linux-image-extra-$(uname -r) docker-engine
```

![https://dl.dropboxusercontent.com/s/bn7np1ibygw0l3r/eje08_img02.png](https://dl.dropboxusercontent.com/s/bn7np1ibygw0l3r/eje08_img02.png)

Como comprobación, arrancaremos el demonio de Docker y verificaremos que se ha instalado correctamente instalando una imagen de prueba.

```
sudo service docker start
sudo docker run hello-world
```

![https://dl.dropboxusercontent.com/s/s8x1sjzbcusgmd9/eje08_img03.png](https://dl.dropboxusercontent.com/s/s8x1sjzbcusgmd9/eje08_img03.png)
