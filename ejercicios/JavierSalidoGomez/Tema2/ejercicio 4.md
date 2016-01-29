## Ejercicio 4:Instalar y echar a andar tu primera aplicación en Heroku. 

Estos son los pasos a seguir para desplegar la aplicación en Heroku:

1. Nos registramos dentro de la página de [Heroku](https://dashboard.heroku.com/)
2. Instalamos las herramientas de Heroku con el comando

        wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh  


3. Usamos el comando heroku login para hacer login con el correo registrado y la correspondiente contraseña.

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/heroku_login.png)

4. Una vez hecho esto, pasamos a usar el comando heroku create para crear la aplicación en Heroku.

5. Para poner en marcha esta aplicación, se usar el comando git push heroku master y adicionalmente en el manual ofrecido por Heroku recomienda usar el comando heroku ps:scale web=1

6. Finalmente abrimos la página de nuestra aplicación con el comando heroku open

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/eje4.png)










