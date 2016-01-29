Instalar y echar a andar tu primera aplicación en Heroku.
======================================================================

1. Descarga el cinturón de herramientas de Heroku
 * Para poder hacer esto, antes nos pide tener instalado Ruby, para lo cual ejecutaremos `sudo apt-get install ruby-full`
 * Instalado Ruby, ahora si, procedemos a descargar el cinturón de herramientas de Heroku con el siguiente comando `wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh`

2. Hacer login con `heroku login`, esto comenzará a realizar la primera configuración de manera automática del toolbelt y luego nos pedirá el email con el cual nos registramos seguido de la contraseña. Para saber que hemos terminado con éxito la operación, nos debe de aparecer en color verde nuestro correo electrónico de registro en Heroku.

3. Descarga la aplicación de ejemplo para node. Es una aplicación simple de node y express. Heroku tiene una serie de ejemplos para diferentes lenguajes de programación. Por ejemplo, para PHP. Heroku admite 7 lenguajes, Scala, Clojure, Java, Ruby y Python
 * Para descargar la aplicación de prueba de NodeJS usamos el comando `git clone git@github.com:heroku/node-js-getting-started.git`
 * A continuación, procedemos a crear la app en Heroku con el comando `heroku apps:create --region eu jmrodriguezherokuapp` y obtendremos como resultado:
```
Creating jmrodriguezherokuapp... done, region is eu
https://jmrodriguezherokuapp.herokuapp.com/ | https://git.heroku.com/jmrodriguezherokuapp.git
Git remote heroku added
```
*En caso de que la respuesta de la terminal, luego de la última instrucción sea* `!    Name is already taken`, *esto quiere decir que el nombre escogido ya está siendo usado y por lo tanto, se debe elegir otro nombre para la app*

 * Para finalizar, se usa el comando `git push heroku origin master` para poner en marcha la app

La aplicación es accesible desde el siguiente [**enlace**](https://jmrodriguezherokuapp.herokuapp.com/)
