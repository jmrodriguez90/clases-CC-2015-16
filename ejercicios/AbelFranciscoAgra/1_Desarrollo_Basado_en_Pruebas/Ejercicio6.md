#Ejercicio 6

Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir _tests_ para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (lo que viene siendo TDD).

###Pasos realizados para la resolución del ejercicio:

* Elaborar archivo [assertsCalificacionEmpresa.js](https://github.com/jfrancisco4490/calificacionEmpresa/blob/master/src/assertsCalificacionEmpresa.js) con una lista de aserciones de prueba para validar algunas funcionalidades de la librería para calificación de empresas.

 Este archivo presenta una (1) para cada uno de los siguientes casos:
 
  - Prueba de registro de nueva empresa
  - Prueba de registro de nueva calificación
  - Prueba de eliminación de valoración
 
* Para probar que falle una aserción, ejecutamos la aserción de prueba de registro de nueva empresa, cuando el código de dicha función de la librería (_crearEmpresa_) no ha sido finalizado. Al ejecutar la aserción, se tiene

```
assert.js:89
  throw new assert.AssertionError({
  ^
AssertionError: Creacion incorrecta de nueva empresa
   at Object.<anonymous> (<...>/assertsCalificacionEmpresa.js:36:8)
   at Module._compile (module.js:434:26)
   at Object.Module._extensions..js (module.js:452:10)
   at Module.load (module.js:355:32)
   at Function.Module._load (module.js:310:12)
   at Function.Module.runMain (module.js:475:10)
   at startup (node.js:118:18)
   at node.js:952:3
```

* Se completa el código de la función _crearEmpresa_, y se vuelven a ejecutar las aserciones, teniendo como salida

`Todas las pruebas con aserciones fueron superadas con exito!!!`

