# Ejercicio 6
## Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o [alguno de los otros servicios, como Codeship, mencionados en StackOverflow](http://stackoverflow.com/questions/17558007/deploy-to-heroku-directly-from-my-github-repository).
Voy a utilizar **Codeship** para realizar la integración continua de mi aplicación, y una vez que está se realice correctamente mediante tuberías de despliegue (deployment pipelines) voy a desplegar automáticamente la aplicación en Heroku. Lo primero que tenemos que hacer es añadirla Codeship a nuestra aplicación en Heroku instalándola desde [aquí](https://elements.heroku.com/addons/codeship).

**NOTA:** aunque Codeship es gratis, permitiendo realizar hasta 100 pruebas de construcción al mes, para poder instalarlo en necesario que añadamos una tarjeta de crédito a nuestra cuenta de Heroku.

![eje06_img01.png](https://dl.dropboxusercontent.com/s/99utny4jncrwiam/eje06_img01.png)

Ya con Codeship instalado en Heroku, accedemos a la [página de proyectos de Codeship](https://codeship.com/projects) y creamos un nuevo proyecto para nuestra aplicación. Codeship puede obtener los archivos de la aplicación desde aplicaciones **GitHub** o **Bitbucket**, siendo nuestro caso la primera opción.

![eje06_img02.png](https://dl.dropboxusercontent.com/s/lf5025s5qmoppfh/eje06_img02.png)

Una vez escogido el repositorio, para completar la configuración del proyecto tenemos que especificar los comandos de instalación y de prueba.
- Para la instalación de Node.js, de las dependencias de la aplicación y construcción de la misma:

```
nvm install 4.2.2
npm install
npm -g install gulp
gulp
```

- Para las pruebas:

```
gulp test
```

![eje06_img03.png](https://dl.dropboxusercontent.com/s/jkzegk8dxkfj6i3/eje06_img03.png)

Lo único que nos falta es que Codeship haga su primera construcción de nuestra aplicación, para lo que tendremos que hacer algún commit como puede ser por ejemplo añadir el `badge` de estado de construcción de Codeship al archivo README de nuestra aplicación. Si la construcción ha sido exitosa, veremos que aparecerá el commit en la página del proyecto marcado como `SUCCESS`.

![eje06_img04.png](https://dl.dropboxusercontent.com/s/pl7ajf0n8uuepsc/eje06_img04.png)

Si pulsamos sobre el commit, veremos el registro en detalle de la construcción; por ejemplo, podemos ver en detalle la ejecución de los tests.

![eje06_img05.png](https://dl.dropboxusercontent.com/s/3s8583za6l488n0/eje06_img05.png)

 Ahora que Codeship está integrado, solo nos queda añadir las tuberías de despliegue para que después de cada construcción exitosa automáticamente se despliegue la aplicación en Heroku; para ello desde la configuración del proyecto (_Project Settings_) accedemos a la opción de despliegue (_Deployment_). La primera parte consiste en indicar a que rama se tienen que hacer los commits para que se dispare la tubería de despliegue, que en esta caso es **master**.

![eje06_img06.png](https://dl.dropboxusercontent.com/s/k6dwni9xtoii7i1/eje06_img06.png)

Ahora tenemos que indicar que plataforma de entre todas las disponibles es el destino del despliegue, que en este caso es **Heroku**.

![eje06_img07.png](https://dl.dropboxusercontent.com/s/8z9lh4tkn0tcjl8/eje06_img07.png)

Añadimos el nombre de nuestra aplicación en Heroku y nuestra clave API en Heroku para poder hacer el despliegue.

![eje06_img08.png](https://dl.dropboxusercontent.com/s/rf9rszr61qdhejc/eje06_img08.png)

Ya tenemos el despliegue configurado completamente así que con el próximo commit que hagamos a la rama master del repositorio de nuestra aplicación, está se desplegará automáticamente en Heroku.

![eje06_img09.png](https://dl.dropboxusercontent.com/s/2o6mas9n2vr7umd/eje06_img09.png)

Si después de hacer el commit volvemos a la página del proyecto en Codeship veremos como se han añadido más entradas en el registro de las construcción, indicando que se ha realizado el despliegue correctamente.

![eje06_img10.png](https://dl.dropboxusercontent.com/s/k275uszkconitt9/eje06_img10.png)
