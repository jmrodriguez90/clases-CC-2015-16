**Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow.**

Usaremos la misma aplicación del ejercicio anterior. Activamos en primer lugar en la aplicación de Heroku el estar conectado con github y una vez dados los permisos nos conectamos con nuestro repositorio.
Activaremos también la opción de que se espere pasar la integración contínua antes de realizar el despliegue automático en Heroku.

![despliegue_1](https://i.gyazo.com/f8bd5ba322d84cc437e61a30dde30d93.png)
> Configuración de Heroku.

Ahora procedemos a darnos de alta en Snap-CI e unir dicho sistema con el mismo repositorio que estamos usando para Heroku.

![despliegue_2](https://gyazo.com/c494df404db56b5b87b64ccc3cbfce97.png)
> Configuración de Snap-CI.

Comprobamos en nuestro repositorio de github que está todo correctamente enlazado con los Webhooks que acabamos de realizar.

![despliegue_3](https://i.gyazo.com/759dd696b08fde625493f82db466f5c0.png)
> Webhooks del repositorio en github.



