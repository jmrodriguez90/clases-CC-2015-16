##Ejercicio6
Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).
____

* Para que las aserciones, se usó el archivo [CalificarEmpresasconAsserts.js](https://github.com/jmrodriguez90/CalificarEmpresas/blob/master/src/CalificarEmpresasconAsserts.js)

* Se creó la base de datos [baseCalificarAsserts.db](https://github.com/jmrodriguez90/CalificarEmpresas) en sqlite3

* se usó el comando ```node CalificarEmpresasconAsserts.js``` para ejecutar la prueba de aserciones sin haber creado la base de datos y lanzó el siguiente error:

```
module.js:338
    throw err;
          ^
Error: Cannot find module '/home/jmrodriguez90/Escritorio/Ejercicios CC/CalificarEmpresas/node_modules/sqlite3/lib/binding/node-v0.11.16-linux-x64/node_sqlite3.node'
    at Function.Module._resolveFilename (module.js:336:15)
    at Function.Module._load (module.js:278:25)
    at Module.require (module.js:365:17)
    at require (module.js:384:17)
    at Object.<anonymous> (/home/jmrodriguez90/Escritorio/Ejercicios CC/CalificarEmpresas/node_modules/sqlite3/lib/sqlite3.js:4:15)
    at Module._compile (module.js:460:26)
    at Object.Module._extensions..js (module.js:478:10)
    at Module.load (module.js:355:32)
    at Function.Module._load (module.js:310:12)
    at Module.require (module.js:365:17)
```

* se usó el comando ```node CalificarEmpresasconAsserts.js``` para ejecutar la prueba de aserciones habiendo creado la base de datos y lanzó el siguiente mensaje:

```Todas las pruebas con aserciones fueron superadas con exito```
