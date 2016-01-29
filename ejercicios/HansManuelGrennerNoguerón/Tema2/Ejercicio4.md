**Instalar y echar a andar tu primera aplicación en Heroku.**

Para empezar a trabajar con **Heroku** es necesario instalar el **heroku toolbelt**.

```wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh```

Una vez instalado nos ponemos conectar con nuestra cuenta.

```heroku login```

![figura1](https://i.gyazo.com/ab843525fb7edc5ada45aa28270d88a7.png)
> Figura 1. Login a heroku por consola.

Ahora clonamos la aplicación de ejemplo.

```git clone https://github.com/heroku/node-js-getting-started.git```

Y la desplegamos en Heroku mediante los siguientes comandos:

```
heroku create
git push heroku master
heroku open
```

A continuación se nos abrirá la [página](https://quiet-cliffs-9621.herokuapp.com/) con la aplicación en funcionamiento.

![despliegue_heroku](https://i.gyazo.com/abfcc232c90a6491bbc9d680a414b963.png)


