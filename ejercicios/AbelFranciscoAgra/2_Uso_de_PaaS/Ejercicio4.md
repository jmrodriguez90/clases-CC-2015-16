#Ejercicio 4

Instalar y ejecutar una primera aplicación en _Heroku_.
 
###Pasos realizados para la resolución del ejercicio:

1. Instalar el _Heroku Toolbelt_, que provee acceso a la interfaz de Línea de Comandos de _Heroku_. Esta interfaz puede ser utilizada para manejar y escalar las aplicaciones que se hayan desplegado. 

2. Iniciar sesión con la cuenta de _Heroku_ creada, utilizando el comando

 `heroku login`

3. Clonar la aplicación de _node.js_ de prueba desde el repositorio correspondiente de _Heroku_

 `git clone https://github.com/heroku/node-js-getting-started.git`
 
4. Crear la aplicación en _Heroku_, lo que lo prepara para recibir el código fuente (y futuras modificaciones del mismo)

 `heroku apps:create --region eu example-nodejs`
 
5. Desplegar el código en _Heroku_

 `git push heroku master`
 
6. Para ver la aplicación desplegada accedemos a la _URL_ correspondiente. Se puede utilizar el comando:

 `heroku open`
 
La aplicación de prueba desplegada se puede observar en el siguiente enlace: [https://example-nodejs.herokuapp.com](https://example-nodejs.herokuapp.com)

**Nota:** Con la aplicación desplegada en _Heroku_, se pueden realizar cambios sobre el código fuente y desplegar dichas modificaciones, instalar complementos para la aplicación (_add-ons_), o incluso, ejecutarla localmente.