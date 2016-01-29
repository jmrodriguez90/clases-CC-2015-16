Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow.
======================================================================

**De las opciones de deespliegue automático, usé CodeShip, para lo cual, realicé los siguientes pasos**

* Desde la web de Heroku, accedemos a la viñeta Elements y clicamos en add-ons, de las opciones que se nos presentan, escogeremos la de CodeShip, a la derecha se nos presentará la opción de install codeship y al llevar el puntero a esta opción, nos preguntará sobre qué aplicación instalar codeship, al seleccionarla, nos ŕeguntará que plan de uso queremos, gratuito o de pago, escogemos la opción deseada y presionamos en *Provision*

*Para poder crear la relación entre Heroku y CodeShip, con el plan gratuito, es necesario tener registrada una tarjeta de crédito en Heroku*

* Para poder integrar el código de la aplicación a integrar, es necesario entrar en codeship y este, nos permite hacerlo usando nuestra cuenta de GitHub. Hecho esto, nos dirá que podemos empezar a crear nuestra primera app y nos preguntará si queremos traer un proyecto de GitHub o de BitBucket, escogemos la primera opción y elegimos nuestro repositorio.

* Para la instalación de Node.js, de las dependencias de la aplicación y construcción de la misma:
```
nvm install 4.2.2
npm install
npm -g install gulp
gulp
```

* Para las pruebas:
`gulp test`

Tras configurar esto, presionamos el botón *Save and go to DashBoard*

Ahora vamos a indicar en qué plataforma está el origen del despliegue, que en nuestro caso, es Heroku.

Añadimos el nombre de nuestra aplicación en Heroku y nuestra clave API en Heroku para poder hacer el despliegue.
