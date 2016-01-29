## Ejercicio 5

### Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.

Se utilizará **foreman** para indicarle a heroku que debe ejecutar de nuestra aplicación. Foreman actúa como un
 envoltorio para nuestra apliación, ejecutando todo lo necesario para que funcione.
 
 ```
 $ sudo gem install foreman
 $ echo "web: npm start" >> Procfile
 $ foreman start web
 ```
 
![foreman](https://dl.dropboxusercontent.com/s/tv0pkf71af8miae/Captura%20de%20pantalla%202015-12-12%2021.10.06.png)

En este caso, hay test que fallan. Esto es debido a que no se tenía la base de datos **MongoDB** iniciada.

![foreman2](https://dl.dropboxusercontent.com/s/10zd77xn5p9ntjq/Captura%20de%20pantalla%202015-12-12%2021.26.41.png)

Sólo faltaría desplegarlo de nuevo en **Heroku** con `git push heroku master`.

