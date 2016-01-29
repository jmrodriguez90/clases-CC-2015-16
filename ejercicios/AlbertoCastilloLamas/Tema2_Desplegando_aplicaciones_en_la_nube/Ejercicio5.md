# Ejercicio 5

## Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.

Primero vamos a comprobar que nuestra aplicación funciona antes de hacer nada con ella

![ejer5_img1](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio5_1.png)

Ahora vamos a preparar nuestra aplicación y la desplegamos en Heroku

![ejer5_img2](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio5_2.png)

![ejer5_img3](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio5_3.png)

Accesible desde **[aquí](https://apptema2.herokuapp.com/)**.

Pasamos a probarlo de forma local mediante **foreman**, por lo que antes de todo vamos a [instalarlo](https://rubygems.org/gems/foreman/versions/0.78.0) mediante *'gem'* un package manager para Ruby

![ejer5_img4](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio5_4.png)

`sudo gem install foreman`

![ejer5_img5](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio5_5.png)

Continuamos creando el archivo *Procfile* con su contenido correspondiente para indicar a foreamn que tiene que hacer

![ejer5_img6](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio5_6.png)

Vamos con **foreman**, ejecutamos el comando

`foreman start web`

![ejer5_img7](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio5_7.png)

En este caso podemos acceder a través de la dirección **http://127.0.0.1:5000/**.
Como podemos ver foreman usa el puesto 5000 como puerto por defecto. Tras comprobar que funciona nos queda volver a desplegar la aplicación en Heroku

`git push heroku master`

![ejer5_img8](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio5_8.png)