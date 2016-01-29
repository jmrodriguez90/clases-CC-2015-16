##Ejercicio 5: Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.

Mediante la creación de la aplicación vamos hacer el despliege a través de foreman sin necesidad tan solo ejecutando los distintos comandos que necesitamos:

Deberíamos crear un archivo llamado Procfile que lo que nos proporciona los comandos necesarios para que foreman haga magia. Con los siguientes ordenes conseguiremos que foreman funcione correctamente:

```sh
$ sudo gem install foreman  
$ echo "web: npm start" >> Procfile
$ foreman start web
```

Seguidamente actualizamos con git push nuestro repositorio de Heroku:

![imagen_push](https://dl.dropboxusercontent.com/s/vve7d13ucevoay8/Ejer5_img1.png?dl=0)

Vemos a continuación que se ha desplegado satisfactoriamente:
![imagen_success] (https://dl.dropboxusercontent.com/s/ruy56a7pr8dylfh/Ejer5_img2.png?dl=0)

Por último vemos como ejecutando nuestro foreman conseguimos que se nos despliegue en nuestro localhost nuestra aplicación de heroku:
![imagen_deploy] (https://dl.dropboxusercontent.com/s/i8kd0thfnlampzk/ejer5_img3.png?dl=0)


