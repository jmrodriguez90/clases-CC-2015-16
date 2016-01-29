# Ejercicio 5
## Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con `foreman`. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.
## *Como en todos los ejemplos anteriores, se puede cambiar “node” y “heroku” por la herramienta que se haya elegido.*
Lo primero es crear una aplicación Heroku con nuestra aplicación y después desplegar el código:

```
heroku apps:create --region eu califiroku
git push heroku master
```

![eje05_img01.png](https://dl.dropboxusercontent.com/s/59tdmzr0sva23bt/eje05_img01.png)

Para usar `foreman` primero tenemos que instalarlo, así lo instalamos como se instalan todas las gemas en Ruby. Una vez instalado, podremos ejecutar localmente nuestra aplicación siguiendo lo descrito en el archivo **Procfile**.

```
sudo gem install foreman
echo "web: npm start" >> Procfile
foreman start web
```

![eje05_img02.png](https://dl.dropboxusercontent.com/s/emd830b57avhba1/eje05_img02.png)

Para acceder a la aplicación, por defecto `foreman` usa el puerto 5000 para las aplicaciones desplegadas, asi que en este caso accederíaamos desde [localhost:5000](localhost:5000).

Para finalizar solo nos quedaría volver a desplegar la aplicación en Heroku, aunque primero deberemos volver a pasar los test para comprobar que todo funciona correctamente.

```
npm test
git push heroku master
```

![eje05_img03.png](https://dl.dropboxusercontent.com/s/y7ubady0v75hg6f/eje05_img03.png)

La aplicación está accesible desde [aquí](https://califiroku.herokuapp.com/).
