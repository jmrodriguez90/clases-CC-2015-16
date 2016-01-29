##Ejercicio 5

Ejercicios para uso de la herramienta Grunt y Docco

###Pasos:

Primero instalamos grunt con el comando: 

*sudo npm install -g grunt-cli

Despues ejecutamos:

*npm install docco grunt-docco --save-dev


Con ello instalamos la herramienta docco, junto con el comando --save-dev indicamos que guarde la configuración correspondiente en package.json.


Una vez hecho esto pasamos a la creación del archivo Gruntfiles.js:

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/ejercicio5.png)

Ahora podemos ejecutar el comando grunt docco

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/ejercicio6.png)

Tras esto, la herramienta nos crear el directorio docs en donde encontraremos el archivo de comentación con extensión html.

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/ejercicio7.png)