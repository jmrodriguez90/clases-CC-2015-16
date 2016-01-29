##Ejercicio4
Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente.
_____

####Creado del archivo package.json
 - [X] El archivo contiene información referente al usuario propietario del archivo.
 - [X] Muestra la jerarquía de carpetas en la cual se encuentra el repositorio y el archivo sobre el cual trabajar.
 - [X] Permitirá poner a disposición del usuario sqlite3 y las versiones de node a soportar.
 - [X] Identifica la herramienta de test a utilizar
 - [X] DOcumentación del proyecto con Grunt


 * {
 *  "author": "JManuel Rodríguez <jmrodriguez90@correo.ugr.es> (https://github.com/jmrodriguez90)",
 *  "name": "Prueba",
 *  "description": "Calificar empresas",
 *  "version": "0.0.1",
 *  "repository": {
 *  "url": "https://github.com/jmrodriguez90/CalificarEmpresas.git"
 *  },
 *  "main": "./src/testCalificarEmpresas.js",
 *  "scripts": {
 *  "test": "mocha"
 *  },
 *  "dependencies": {"sqlite3": "~3.0"},
 *  "devDependencies": {
 *  "docco": "^0.7.0",
 *  "grunt": "^0.4.5",
 *  "grunt-docco": "^0.4.0",
 *  "mocha": "^2.3.3"
 *  },
 *  "optionalDependencies": {},
 *  "engines": {
 *  "node": ">=0.8"
 *  }
 * }

* Instalación de Grunt
 - sudo npm install -g grunt-cli

* Instalación de docco
 - npm install docco grunt-docco --save-dev
