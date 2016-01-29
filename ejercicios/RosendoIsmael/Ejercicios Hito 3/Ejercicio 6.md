#Ejercicio 6

Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow


###Pasos

Accedo a la plataforma Heroku y a mi app:

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW24.png)

Aquí accedo a deploy y despues a "Connec to GitHub", donde especifico el repositorio de mi aplicación

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW25.png)
![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW26.png)
![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW27.png)

Tras esto marco las casillas correspondiente y activo los deploys automáticos.

Tras esto vamos a nuestro repositorio en Github al apartado Webhooks

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW28.png)

Y comprobamos que esta activo. Ahora pasamos a darnos de alta en SNAP-CI y lo configuramos con un pipeline donde llevamos a cabo la instalación y pruebas.

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW30.png)

Ahora implementamos la nueva funcionalidad, añadimos un 4º boton de navegavilidad.
Antes de eso si probamos el metodo get nos dará fallo:

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW31.png)

Así que implementamos la nueva funcionalidad junto a sus test.

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW32.png)

Ahora lo añadimos a heroku y comprobamos el Activity Feed, tras un rato de espera la nueva funcionalidad esta activa.

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW33.png)

Y comprobamos que SNAP-CI funciona.

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW34.png)




