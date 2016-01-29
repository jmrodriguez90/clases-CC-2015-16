## Ejercicio 5

#### Automatizar con `grunt` y `docco` (o algún otro sistema) la generación de documentación de la librería que se cree. Previamente, por supuesto, habrá que documentar tal librería.

Primero instalamos `grunt` con `sudo npm install -g grunt-cli`.

Ahora creamos el archivo Gruntfile.js y en el especificamos qué archivos van a ser documentados:

```
'use strict';

module.exports = function(grunt) {

    // Configuración del proyecto
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        docco: {
            debug: {
                src: ['*.js', 'test/*.js'],
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

Ahora tenemos que instalar docco:

`npm install docco grunt-docco --save-dev`

Hemos dicho a Grunt que haga la documentación de los archivos .js que encuentre en la raíz.
Procedemos a ejecutar Grunt para que nos genere la documentación con `grunt`, `grunt docco` o `grunt docco:debug`.

![GRUNT-DOCCO](https://dl.dropboxusercontent.com/s/53wxj49sdoonba0/Captura%20de%20pantalla%202015-11-10%2013.31.08.png)

Y vemos la página .html generada por grunt donde ver la documentación del código.

![docGRUNT](https://dl.dropboxusercontent.com/s/lt8yqazzhd02mel/Captura%20de%20pantalla%202015-11-10%2013.33.33.png)

