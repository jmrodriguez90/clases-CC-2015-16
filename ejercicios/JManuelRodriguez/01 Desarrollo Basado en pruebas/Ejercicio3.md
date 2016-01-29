##Ejercicio3
Ejecutar el programa en diferentes versiones del lenguaje. ¿Funciona en todas ellas?
_____

1. Creación del archivo package.json  para permitir que lo necesario para llevar a cabo las pruebas, esté instalado.
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
 *  "devDependencies": {},
 *  "optionalDependencies": {},
 *  "engines": {
 *  "node": ">=0.8"
 *  }
 * }



2. Ejecutar `npm install` en la carpeta que contiene el package.json. Con esto se instalará lo estípulado en el package

3. Ejecutar el testeo del CalificarEmpresas
 - `node testCalificarEmpresas.js`
 - Esto da como resultado lo siguiente:
	[INFO] Iniciando Ejecucion de Pruebas!!!

	[INFO] Prueba de Creacion de Empresa...
	[INFO] Finalizada con exito!!!

	[INFO] Prueba de Registro de calificaciones validas...
	[INFO] Finalizada con exito!!!

	[INFO] Prueba de Eliminacion de calificaciones...
	[INFO] Finalizada con exito!!!

	[INFO] Prueba de Listado de calificaciones por empresa...





	[INFO] Prueba de Ranking de empresas...
	[RES] Ranking de Empresas: 

	[INFO] Finalizada con exito!!!

	[INFO] Prueba de Registro de calificaciones duplicadas...
	[INFO] Finalizada con exito!!!

	[INFO] Terminando Ejecucion de Pruebas
	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database

	[ERR] Informacion completa del Error:
	   [SYS] SQLITE_NOTADB: file is encrypted or is not a database


	events.js:72
		throw er; // Unhandled 'error' event
		      ^
	Error: SQLITE_NOTADB: file is encrypted or is not a database

 - *Esta prueba se hizo bajo node v0.10.37*

**Repitiendo estos pasos con la única diferencia de cambiar la versión del node, a la versión 11 y la versión 12, se comprueba que en la versión 12 no hay ningún problema pero en la 11, no deja siquiera instalar el sqlite3**
	
