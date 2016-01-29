##Ejercicio 4

Creación del package json.

###Contenido
Contenido del package json inicial.
   {
    "name": "EJ2",
    "version": "0.1.2",
    "description": "Aplicacion web Empresa-alumno-calificaciones",
    "main": "Gruntfile.js",
    "directories": {
      "doc": "docs",
      "test": "test"
    },
    "dependencies": {
      "body-parser": "~1.14.1",
      "docco": "~0.7.0",
      "express": "~4.13.3",
      "grunt": "~0.4.5",
      "grunt-docco": "~0.4.0",
      "sqlite3": "~3.1.1"
    },
    "devDependencies": {
      "mocha": "~2.3.3"
    },
    "scripts": {
      "test": "mocha test/test.js"
    },
    "repository": {
      "type": "git",
      "url": "https://github.com/lrdzero/EmpresasAlumnos.git"
    },
    "keywords": [
      "MASTER"
    ],
    "author": "Rosendo Ismael Fernández Pérez",
    "license": "BSD-2-Clause",
    "bugs": { 
      "url": "https://github.com/lrdzero/EmpresasAlumno/issues"
    }
  }
