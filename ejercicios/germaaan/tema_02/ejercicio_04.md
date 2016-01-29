# Ejercicio 4
## Instalar y echar a andar tu primera aplicación en Heroku.
Una vez que nos hemos creado una cuenta desde la página de [Heroku](https://www.heroku.com/), lo primero que tenemos que hacer es instalar el cinturón de herramientas de Heroku (para lo que tenemos que asegurarnos que además tenemos instalado Ruby):

```
wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```

![eje04_img01.png](https://dl.dropboxusercontent.com/s/jrjbxa3e6w7ccg4/eje04_img01.png)

Lo siguiente es hacer login desde un terminal con `heroku login`:

![eje04_img02.png](https://dl.dropboxusercontent.com/s/n1u57mr65sfd7cl/eje04_img02.png)

Descargamos la aplicación de prueba hecha con Node.js desde su repositorio en GitHub y la desplegamos en Heroku:

```
git clone git@github.com:heroku/node-js-getting-started.git
cd node-js-getting-started
heroku apps:create --region eu prueroku
```

![eje04_img03.png](https://dl.dropboxusercontent.com/s/mbtmfnej2de7qdp/eje04_img03.png)

La aplicación ya está accesible siguiendo [este enlace](https://prueroku.herokuapp.com/).
