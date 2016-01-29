## Ejercicio 6: Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow.

1.En la página de heroku debemos encontrar el proyecto que hemos creado con heroku create, una vez reconocido nos vamos al apartado deploy y lo conectamos a nuestro repositorio en github. Además marcamos la opción "wait for ci to pass before deploy" y "enable automatic deploys" para automatizar el proceso.

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/deploy.png)


![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/deploy2.png)


2.Una vez hecho, comprobamos dentro de nuestro repositorio en GitHub la conexión con heroku dentro de Settings->Webhooks

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/deploy3.png)

3.Nos damos de alta en Snap-CI y nos autenticamos con nuestro GitHub, y seleccionamos un repositorio para las pruebas.

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/snapci.png)

4.Finalmente comprobamos que las pruebas pasan correctamente.

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/snapci2.png)



