##Ejercicio5
Automatizar con grunt y docco (o algún otro sistema) la generación de documentación de la librería que se cree. Previamente, por supuesto, habrá que documentar tal librería.
_____

* Instalación de Grunt
 - sudo npm install -g grunt-cli

* Instalación de docco
 - npm install docco grunt-docco --save-dev

- Creación de archivo ```Gruntfile.js```
```
'use strict';

module.exports = function(grunt) {

  // Configuración del proyecto
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  docco: {
	  debug: {
	  src: ['src/*.js', 'src/lib/*.js'],
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

- Habiendo creado el archivo, lo siguiente es ejecutar la documetación automática con el comando ```grunt``` desde la terminal.

