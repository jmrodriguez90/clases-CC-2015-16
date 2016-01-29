# Ejercicios del Tema 1

### Ejercicio 1

**Instalar alguno de los entornos virtuales de node.js y, con ellos, instalar la última versión existente, la versión minor más actual de la 0.12 y lo mismo para la 0.11 o alguna impar. Si no se usa habitualmente este lenguaje, hacer lo mismo con cualquier otro lenguaje de scripting**

Para este ejercicio he instalado en entorno **nodeenv**. En mi caso, lo he instalado facilmente con el script que proporcionan en su [Github](https://github.com/creationix/nvm).

```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
```

Una vez instalado, vamos a instalar la versión minor más actual de node.js 0.12, para ello, primero comprobamos cual es esa versión con:

```
nvm ls-remote
```

Esto nos indica todas las versiones disponibles de node.js, la que tenemos que instalar es la 0.12.7. Para instalarla usamos:

```
nvm install v0.12.7
```

Por último, una vez que está instalada solo queda seleccionarla para que sea la versión por defecto que usamos. En realidad nada más instalarla nos la seleccionara por defecto, si no es así, la podemos seleccionar con:

```
nvm use v0.12.7
```

Para volver a la versión que teníamos (la versión por defecto de nuestro sistema) podemos usar:

```
nvm use system
```

Para la versión 0.11 hacemos lo mismo, miramos la mas actual y la instalamos igual:

```
nvm ls-remote
nvm install v0.11.16
nvm use v0.11.16
```

![](http://i.imgur.com/oMmHJZJ.png)

<br>
### Ejercicio 2

**Como ejercicio, algo ligeramente diferente: una web para calificar las empresas en las que hacen prácticas los alumnos. Las acciones serían crear empresa y listar calificaciones para cada empresa, crear calificación y añadirla (comprobando que la persona no la haya añadido ya), borrar calificación (si se arrepiente o te denuncia la empresa o algo) y hacer un ránking de empresas por calificación, por ejemplo. Crear un repositorio en GitHub para la librería y crear un pequeño programa que use algunas de sus funcionalidades. Si se quiere hacer con cualquier otra aplicación, también es válido.
Se puede hacer un ejercicio equivalente, siempre que tenga operaciones similares: creación, listado, borrado, ciclo CRUD básico. El objetivo de este ejercicio es poner en práctica lo que viene a continuación, NO es un objetivo de la asignatura.**

Este ejercicio junto con otros ejercicios que se basan en este están disponibles en este [repositorio](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas). En este repositorio ya se incluyen los test y demás elementos que se piden en el resto de ejercicios.

<br>
### Ejercicio 3

**Ejecutar el programa en diferentes versiones del lenguaje. ¿Funciona en todas ellas?**

![](http://i.imgur.com/V3MqQHQ.png)

Como podemos ver en la imagen, nuestra aplicación de empresas funciona en todas las versiones, pero en las dos nuevas que hemos instalado indica que se está usando una versión de pura en JavaScript para uno de los módulos (los módulos de mongodb para la base de datos). Esto es porque las versiones del sistema de paquetes (npm) son diferentes y las versiones que ha descargado y preparado no son compatibles con las versiones que se usan en las  versiones de node.js y npm que hemos instalado. Podemos comprobar que si eliminamos la carpeta "node_modules" en la que se instalan los módulos necesarios y usamos ```npm install``` con la versión que vamos a usar, ya no da ningún problema.

<br>
### Ejercicio 4

**Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente.**

En el [repositorio](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas) de la aplicación de empresas se puede ver el [package.json](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas/blob/master/package.json)

En este fichero, como se puede ver, se ha indicado el título, la descripción, el autor, la versión de la aplicación/módulo etc. Además, se han indicado las dependencias de la aplicación y las dependencias de desarrollo (para los test, la documentación etc).

<br>
### Ejercicio 5

**Automatizar con grunt y docco (o algún otro sistema) la generación de documentación de la librería que se cree. Previamente, por supuesto, habrá que documentar tal librería**

En el [repositorio](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas) de la aplicación de empresas se puede ver el direcotio [docs](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas/tree/master/docs), en el que se generan los ficheros de documentación de Docco. Además, en el [Gruntfile](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas/blob/master/Gruntfile.js) se puede ver la configuración para la tarea de generación de la documentación con Grunt.

<br>
### Ejercicio 6

**Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).**

En el [repositorio](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas) de la aplicación de empresas se puede ver el direcotio [test](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas/tree/master/test), en el que se pueden encontrar los archivos que contienen los tests. Concretamente podemos ver el archivo [test.js](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas/blob/master/test/test.js) que contiene los test de prueba que he preparado para este y para el ejercicio 7.


<br>
### Ejercicio 7

**Convertir los tests unitarios anteriores con assert a programas de test y ejecutarlos desde mocha, usando descripciones del test y del grupo de test de forma correcta. Si hasta ahora no has subido el código que has venido realizando a GitHub, es el momento de hacerlo, porque lo vamos a necesitar un poco más adelante.**

Los test del [repositorio](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas) de la aplicación de empresas son test unitarios para ejecutar desde mocha usando ```npm test```.

Se pueden ver estos tests en el fichero [test.js](https://github.com/segura2010/CC-Tema1-Ejercicio2-CalificacionEmpresas/blob/master/test/test.js).


<br>
### Ejercicio 8

**El ejercicio se resume en: Usar un sistema de integración continua como Travis.**

Para este ejercicio no nos fijaremos en la aplicación de empresas sino en el proyecto de la asignatura, que ya esta funcionando con Travis. El repositorio del proyecto es [este](https://github.com/segura2010/CC-Proyecto-OpenSecureChat). Para evitar problemas con los commits, se puede ver concretamente [este commit](https://github.com/segura2010/CC-Proyecto-OpenSecureChat/tree/c6ce03b190f030e8b5d03b04ba86f51308682e91). Se puede ver el [fichero de Travis](https://github.com/segura2010/CC-Proyecto-OpenSecureChat/blob/c6ce03b190f030e8b5d03b04ba86f51308682e91/.travis.yml)

Además, se ha añadido al fichero README la "chapita" de Travis que indica si ha pasado correctamente los tests.
