#Ejercicio 5

Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.

##Aclaración

Aunque ya hice el getting started y la subida de mi aplicación inicial a heroku en el ![ejercicio 4](https://damp-lake-1537.herokuapp.com/). Repetiré el proceso para el ejercicio 5 con foreman.

###Proceso 

Accedo al directorio donde se encuentra mi actividad.

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW17.png)


LLevo a cabo la intalación de foreman mediante

    sudo gem install foreman
    
![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW19.png)

Tras este paso iniciamos mediante el comando 

    foreman start web
    
![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW20.png)

Despues de esto pasamos a llevar a cabo los test.

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW21.png)

Como ultimo paso actualizamos heroku.

    git add .
    git commit -am "un commit"
    git push heroku master
    git push
![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW22.png)


Para probar el uso de foreman llevamo a cabo

    foreman start web
![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/EjercicioHW35.png)






