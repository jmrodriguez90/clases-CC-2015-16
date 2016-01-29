Crear una aplicación mínima y usar un buildpack no estándar para desplegarla en Heroku.
======================================================================


1. Se usará para este ejercicio, la aplicación de ejemplo dada por Heroku y un buildpack que utiliza grunt para aplicar tareas sobre los procesos de compilación, revisión de código, etc.
 * `heroku apps:create herokunuevabuildpack --region eu --buildpack https://github.com/mbuchetics/heroku-buildpack-nodejs-grunt.git`

2. Actualizar la variable de entorno NODE-ENV, indicando que el ambiente es de producción:
 * `heroku config:set NODE_ENV=production`

3. Definir un archivo Gruntfile.js con una tarea específica llamada heroku, de la siguiente manera:
 * grunt.registerTask('heroku:development', ['auto_install', 'jshint']); (para ejecutar si el ambiente de despliegue es de desarrollo)
 * grunt.registerTask('heroku:production', ['auto_install', 'concat', 'uglify', 'jshint']); (actividades a ejecutar si el ambiente es de producción)

4. Añadir dependencias de Grunt en el package.json
```
"dependencies": {
  ...
  "grunt": "^0.4.5",
  "grunt-auto-install": "^0.3.0",
  "grunt-contrib-concat": "^0.5.1",
  "grunt-contrib-jshint": "^0.11.3",
  "grunt-contrib-uglify": "^0.10.0",
  ...
}
```

5. Se despliega el repositorio (con el Gruntfile.js) a Heroku:

`git push heroku master`

Para acceder a la app, se puede hacer desde [aquí](http://herokunuevabuildpack.herokuapp.com/)
