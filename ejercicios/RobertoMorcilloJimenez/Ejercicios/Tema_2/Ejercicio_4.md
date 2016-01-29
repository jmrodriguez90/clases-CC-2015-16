##Ejercicio 4: Instalar y echar a andar tu primera aplicación en Heroku.
Primeramente debemos de instalar la herrramientas necesarias con ruby de la siguiente manera:

```sh
$ wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh
```

Clonamos la aplicación de nodejs que trae por defecto heroku:

```sh
$ git clone https://github.com/heroku/node-js-getting-started.git (fetch)
```
![imagen_clone] (https://dl.dropboxusercontent.com/s/3h3l3mt7bb0dbji/Ejer4_img_2.png?dl=0)

No creamos un proyecto de tipo heroku mediante la siguiente orden:
```sh
$ heroku create
```
![imagen_create] (https://dl.dropboxusercontent.com/s/kocu0xflj8y4wb7/Ejer4_img_3.png?dl=0)

Aquí se ve como se crea:

![imagen_create] (https://dl.dropboxusercontent.com/s/aelpxhboelh6uew/Ejer_4_img_4.png?dl=0)

Vemos como a partir de las siguientes ordenes podemos asignarle una región para que coga el servidor nuestra aplicación y darle un nombre nuevo a nuestra aplicación en heroku.

```sh
$ heroku create --region eu nombre_de_la_aplicación
```
![imagen_region_server] (https://dl.dropboxusercontent.com/s/tk97kguxt8n40wj/Ejer_4_img_5.png?dl=0)

Finalmente vemos como se ha desplegado satisfactoriamente sin necesidad de hacer nada:

![imagen_creacion_success](https://dl.dropboxusercontent.com/s/u3mdcwf1esrukvl/Ejer4_img_6.png?dl=0)



