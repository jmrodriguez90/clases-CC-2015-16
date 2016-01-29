##Ejercicio 8

Integración continua

###Pasos 

Vamos a la plataforma travis http://travis-ci.org/ y allí iniciamos sesion con nuestro git.

Buscamos nuestro respositorio a añadir y creamos el archivo .travis.yml

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/travis06.png)

Nuestro archivo .travis.yml contiene:

  language: node_js

  # version numbers, testing against two versions of node
  node_js:

    - "0.10"
    - "0.12"
    - "0.11"
    

Con el que obtenemos en travis:

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/travis07.png)

Esto es devido a la versión de nvm de la que dispongo puesto que ejecutando el test en terminal obtengo lo siguiente:

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/travis05.png)

Adicionalmente he encontrado la solucion al problema generando las carpetas que travis solicitaba para acceder a cada una de las versiones de sqlite3 para la versión especifica de node.

Se trata de cambiar la versión de node con:
  nvm use 0.12
  
Una vez cambiado ejecutamos:

  sudo npm install sqlite3 --target_arch=x64
 
Esto es debido a que me genera las carpetas de sqlite donde travis busca el archivo .node con otro nomtre en arquitectura.

Tras haberla instalado se debe actualizar git. Y con esto solucionamos el problema.
