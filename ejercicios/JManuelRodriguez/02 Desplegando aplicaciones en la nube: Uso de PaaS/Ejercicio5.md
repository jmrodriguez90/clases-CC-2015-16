Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.
======================================================================

1. Accedemos a la [aplicación](https://github.com/jmrodriguez90/Tema3_CalificarEmpresas) que usamos en el ejercicio anterior y la desplegamos en Heroku con los siguientes comandos
 - `heroku apps:create --region eu jmrodriguezherokucalifica`
 - `git push heroku master`
2. Al tener la aplicación desplegada en Heroku, procedemos a instalar foreman
 - `sudo gem install foreman`
3. Para que Heroku sepa qué ejecutar, creamos el archivo Procfile
 - `echo "web: npm start" >> Procfile`
4. Por último, iniciamos la aplicación en foreman, cuyo despliegue lo podremos ver en el puerto 5000 del LocalHost
 - `foreman start web`

*Volvemos a pasar los test y desplegamos la aplicación en Heroku*
 - `npm test`
 - `git push heroku master`

Con este [**enlace**](https://jmrodriguezherokucalifica.herokuapp.com/) se puede visualizar la app
