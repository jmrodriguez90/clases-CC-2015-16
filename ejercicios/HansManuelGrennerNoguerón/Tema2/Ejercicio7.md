**Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido.**

Dado que ya tenemos asociada la aplicación con nuestro repositorio de Github en Heroku sólo tenemos que realizar una pequeña modificación en el fichero **Procfile** creado. Es necesario indicar el puerto. Para ello añadimos la etiqueta *PORT* al fichero:

```web: python script.py $PORT```

Y lo declaramos en heroku.

```heroku config:set PORT=8080```

Ya podremos desplegar nuevamente la aplicación tras realizar un commit sobre los cambios.

```
git commit 
git push heroku master
```

Podremos ver la aplicación desplegada en el siguiente enlace : [https://projectcc-heroku.herokuapp.com/](https://projectcc-heroku.herokuapp.com/)

![pagina](https://i.gyazo.com/b83fbeb70bffe68a6a425021c0fd0d29.png)
> Figura 1. Aplicación desplegada en heroku.

