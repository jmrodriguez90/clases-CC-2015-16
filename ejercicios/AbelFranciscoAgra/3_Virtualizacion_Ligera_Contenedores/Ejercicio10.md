#Ejercicio 10

Crear un usuario propio e instalar _nginx_ en el contenedor creado de esta forma con _Docker_.

###Pasos realizados para la resolución del ejercicio:

1. Crear un pseudo-terminal para ejecutar comandos interactivamente en la imagen correspondiente de _Docker_

 `docker run -i -t <nombre_imagen_docker> /bin/bash`
 
2. Al estar conectados a la imagen de _Docker_, para crear un nuevo usuario

 `adduser <nombre_nuevo_usuario>`
 
3. Si es una imagen _Docker_ de _Ubuntu_, para instalar _nginx_

 `apt-get update`
 
 `apt-get install nginx`
 
4. De ser necesario, se puede iniciar el servicio de _nginx_ en la imagen _Docker_

 `service nginx start`