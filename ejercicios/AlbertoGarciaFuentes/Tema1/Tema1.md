##Ejercicio 1

###Instalar alguno de los entornos virtuales de node.js y, con ellos, instalar la última versión existente, la versión minor más actual de la 0.12 y lo mismo para la 0.11 o alguna impar.Si no se usa habitualmente este lenguaje, hacer lo mismo con cualquier otro lenguaje de scripting.

Usaré n:

```
git clone https://github.com/tj/n.git
cd n
sudo make install
```


Instalamos las versiones *0.11.16* y *0.12.7*:

```
sudo n 0.11.16
sudo n 0.12.7
```



##Ejercicio 2
###Como ejercicio, algo ligeramente diferente: una web para calificar las empresas en las que hacen prácticas los alumnos. Las acciones serían crear empresa y listar calificaciones para cada empresa, crear calificación y añadirla (comprobando que la persona no la haya añadido ya), borrar calificación (si se arrepiente o te denuncia la empresa o algo) y hacer un ránking de empresas por calificación, por ejemplo. Crear un repositorio en GitHub para la librería y crear un pequeño programa que use algunas de sus funcionalidades. Si se quiere hacer con cualquier otra aplicación, también es válido.Se puede hacer un ejercicio equivalente, siempre que tenga operaciones similares: creación, listado, borrado, ciclo CRUD básico. El objetivo de este ejercicio es poner en práctica lo que viene a continuación, NO es un objetivo de la asignatura.

En este [repositorio](https://github.com/albertogarf91/Submodulo-Red-social-Juego.git) se encuentra el proyecto en el que estoy trabajando para la red social. Es correspondiente a la parte del juego de la red social. Se encuentran todos los ficheros necesarios para lanzar el servidor en node.js con todos los recursos necesarios y páginas html5.

El programa se trata de mostrar el sistema solar mientras se hacen unas serie de preguntas acerca de él.

Las respuestas obtenidas por los usuarios son almacenadas en una base de datos.

Las preguntas se crean, se listan y se borran en el servidor.

![imagen1](https://dl.dropboxusercontent.com/s/1m6rup3y9y8vgg2/Sistema%20solar.png?dl=0)

##Ejercicio 3

###Ejecutar el programa en diferentes versiones del lenguaje. ¿Funciona en todas ellas?

A continuación voy a ejecutar el programa en las dos distintas versiones:

![imagen2](https://dl.dropboxusercontent.com/s/1t3ardgodmpk99w/imagen1.png?dl=0)


![imagen3](https://dl.dropboxusercontent.com/s/6uuuuym7egwe6zz/imagen2.png?dl=0)

##Ejercicio 4
###Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente.


Para generar el archivo usamos 

```
npm init

```

El archivo package.json contiene lo siguiente:

```

{
  "name": "submodulo-juego",
  "version": "1.0.0",
  "description": "Submodulo encargado del juego de la Red social",
  "main": "ServidorJuego.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/albertogarf91/Submodulo-Red-social-Juego.git"
  },
  "keywords": [
    "cloud",
    "computing"
  ],
  "author": "Alberto Garcia Fuentes",
  "license": "GPL-2.0",
  "bugs": {
    "url": "https://github.com/albertogarf91/Submodulo-Red-social-Juego/issues"
  },
  "homepage": "https://github.com/albertogarf91/Submodulo-Red-social-Juego#readme"
}

```


##Ejercicio 5
###Automatizar con grunt y docco (o algún otro sistema) la generación de documentación de la librería que se cree.Previamente, por supuesto, habrá que documentar tal librería.

Instalamos grunt:

```
sudo npm install -g grunt-cli
```

A continuación creamos el Gruntfile.js

```
'use strict';

module.exports = function(grunt) {

  // Configuración del proyecto
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    docco: {
      debug: {
        src: ['*.js'],
        options: {
          output: 'docs/'
        }
      }
    }
  });

  // Carga el plugin de grunt para hacer esto
  grunt.loadNpmTasks('grunt-docco');

  // Tarea por omisión: generar la documentación
  grunt.registerTask('default', ['docco']);
};
```

Para la documentacion instalamos docco y grunt-docco y añadimos estas dos dependencias al package.json

```
npm install docco grunt-docco --save-dev
```

Para generar la documentacion automaticamente escribimos:

```
grunt docco
```

La documentación resultante se encontrará en la carpeta docs.


##Ejercicio 6
###Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).

Los siguientes asertos han sido programados para probar la funcionalidad, los 4 test son pasados correctamente.

```

'use strict';

var modulo = require('./ServidorJuego.js');
var assert = require("assert");

//Probar que con Jupiter se optiene la respuesta correcta
assert.equal(modulo.calcular("Jupiter"),"Respuesta correcta");

//Probar que con Marte no de como resultado nulo
assert.notEqual(modulo.calcular("Marte"), null);

//Probar que con Tierra no de como resultado nulo
assert.notEqual(modulo.calcular("Tierra"), null);

//Probar que con Saturno no de como resultado nulo
assert.notEqual(modulo.calcular("Saturno"), null);


console.log("Aserciones pasadas con exito");

```

Al ejecutar:

```
alberto@alberto-HP:~/Escritorio/proyectoCC$ node test.js
Servicio HTTP iniciado
Aserciones pasadas con exito
```

##Ejercicio 7
###Convertir los tests unitarios anteriores con assert a programas de test y ejecutarlos desde mocha, usando descripciones del test y del grupo de test de forma correcta. Si hasta ahora no has subido el código que has venido realizando a GitHub, es el momento de hacerlo, porque lo vamos a necesitar un poco más adelante.


Vamos a instalar mocha:

```
npm install mocha --save-dev
```

Editamos el archivo de test para agrupar todos los test, esto lo hacemos con la función `describe`. Cada test se llama con 'it' y para indicar que ha finalizado llamamos al método 'done'.

En el archivo package.json creamos un script para ejecutar `mocha`:

```
...
"scripts": {
  "test": "mocha"
},
...
```

Ya solo nos falta ejecutar 'mocha' y esperar que todos los test se pasen correctamente.

![imagen4](https://dl.dropboxusercontent.com/s/2s2xy8ri54tlgdj/test.png?dl=0)


##Ejercicio 8
###En mi caso para Travis:
###1- Darse de alta. Muchos están conectados con GitHub por lo que puedes usar directamente el usuario ahí. A través de un proceso de autorización, acceder al contenido e incluso informar del resultado de los tests.


Usare Travis CI para la integracion continua. Para ello vamos al sitio web de Travis CI e iniciamos sesion con nuestra cuenta de Github. A continuacion vamos a nuestros repositorios y activamos la integracion continua en nuestro submodulo.

![imagen5](https://dl.dropboxusercontent.com/s/o47vdyulvgtv2hj/travis.png?dl=0)


Ahora creamos el archivo .travis.yml . En el deberemos indicar el lenguage que tratamos y las versiones que queremos usar de el:

```
# language setting
language: node_js

# version numbers, testing against two versions of node
node_js:
  - "0.12"
  - "0.11"
  - "0.10"
```

Finalmente despues de ejecutarse todo obtendremos como resultado:

![imagen6](https://dl.dropboxusercontent.com/s/a3xjshdwtgligr4/resultadoFinal.png?dl=0)



