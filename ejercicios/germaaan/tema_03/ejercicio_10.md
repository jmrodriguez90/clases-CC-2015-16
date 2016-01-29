# Ejercicio
## Crear un usuario propio e instalar nginx en el contenedor creado de esta forma.
En una imagen que tengamos descargada como puede ser la de Ubuntu, accedemos mediante `sudo docker run -i -t ubuntu /bin/bash` para iniciar un terminal en el interior de esa imagen. Una vez dentro, una de las primeras cosas que vamos a hacer en nuestro contenedor es crear un usuario propio, que por ejemplo se va a llamar **usudocker**, y además será añadido al grupo **sudo** para que pueda realizar tareas que necesitan permisos de administración, como puede ser instalar paquetes.

```
useradd -d /home/usudocker -m usudocker
passwd usudocker
adduser usudocker sudo
login usudocker
```

![https://dl.dropboxusercontent.com/s/gmxj3k2hw0xu4gn/eje10_img01.png](https://dl.dropboxusercontent.com/s/gmxj3k2hw0xu4gn/eje10_img01.png)

Y ya procedemos a instalar **nginx** como siempre:

```
sudo apt-get update
sudo apt-get install nginx
```

![https://dl.dropboxusercontent.com/s/teqfc4ywx7kusge/eje10_img02.png](https://dl.dropboxusercontent.com/s/teqfc4ywx7kusge/eje10_img02.png)
