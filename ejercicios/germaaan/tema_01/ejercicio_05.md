## Ejercicio 5

#### Automatizar con `grunt` y `docco` (o algún otro sistema) la generación de documentación de la librería que se cree. Previamente, por supuesto, habrá que documentar tal librería.

Lo primero es instalar `grunt`.

```
sudo npm install -g grunt-cli
```

Creamos el `Gruntfile.js` indicando en `src` los archivos de los se va a realizar la documentación; en este caso, todos los archivos **.js** que se encuentran en la raíz y los archivos **.js** en la carpeta **lib**, que es la librería que he desarrollado.

```
'use strict';

module.exports = function(grunt) {

  // Configuración del proyecto
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    docco: {
      debug: {
        src: ['*.js', 'lib/*.js'],
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

Instalamos **docco** y **grunt-docco**, indicando además que se añadan a las **devDependencies** del archivo **package.json**.

```
npm install docco grunt-docco --save-dev
```

Generamos la documentación de la aplicación.

```
grunt docco
```

![eje05_img01](https://dl.dropboxusercontent.com/s/rfzpecz0fo5yt37/eje05_img01.png)

La documentación debería haberse generado en el directorio **docs** de raíz y verse así, como en el caso del archivo **empresa.js**:

![eje05_img02](https://dl.dropboxusercontent.com/s/1ddraq05tzw381j/eje05_img02.png)
