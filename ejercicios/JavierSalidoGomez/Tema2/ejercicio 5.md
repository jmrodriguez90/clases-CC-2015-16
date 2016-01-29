## Ejercicio 5: Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.

1. Para instalar foreman usamos el comando:  
      sudo gem install foreman

2. Se crea un Procfile para indicar que ejecutará Heroku que contendrá la siguiente línea:  
      web: node cassandra.js

3. Finalmente para ejecutarlo de forma local usamos el comando:   
      foreman start web 
   
![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/foreman.png)

4. Plasmamos los cambios en heroku con  
      git push heroku master


