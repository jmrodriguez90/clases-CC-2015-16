#Ejercicio 7

Convertir los tests unitarios anteriores con _assert_ a programas de _test_ y ejecutarlos desde _mocha_, usando descripciones del _test_ y del grupo de _test_ de forma correcta.

###Pasos realizados para la resolución del ejercicio:

* Instalar _mocha_ e incluirlo como dependencia de la aplicación (en _package.json_)

`npm install mocha --save-dev`

* Incluir tarea de Prueba con _mocha_ (_test_) en el archivo _package.json_

```
  "scripts": {
    "test": "mocha"
  },
```

* Definir el archivo [_test.js_](https://github.com/jfrancisco4490/calificacionEmpresa/blob/master/test/test.js), con las descripciones y grupos de _tests_ correspondientes

  - **_CalificacionEmpresa_Test_**: grupo de _test_ general que incluye a las pruebas de cada funcionalidad de la librería
  - **_Carga_**: descripción del primer _test_ para validar la carga de la librería a utilizar
  - **_Crear_Empresa_**: descripción del segundo _test_ para probar el registro de una nueva empresa
  - **_Registrar_Calificacion_**: descripción de la tercera prueba para validar el registro de una nueva calificación de usuario a empresa
  - **_Eliminar_Calificacion_**: descripción del último _test_ para probar la eliminación de una valoración

* Ejecutar el programa de _test_ desde _mocha_

`npm test`

* Resultado de la ejecución

```
> mocha

  CalificacionEmpresa_Test
    Carga

      ✓ Cargando libreria...
    Crear_Empresa

      ✓ Registrando Correctamente Empresa...
    Registrar_Calificacion

      ✓ Registrando Correctamente Calificacion...
    Eliminar_Calificacion

      ✓ Eliminando Correctamente Calificacion...

  4 passing (12ms)
```