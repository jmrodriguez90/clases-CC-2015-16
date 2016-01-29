#Ejercicio 3

Crear pruebas para las diferentes rutas de la aplicación (Programa de Calificación de Empresas).
 
###Pasos realizados para la resolución del ejercicio:

1. Se define una estructura de aplicación _web_ utilizando _Express_

 `express calificacionEmpresas_2`
 
2. Se actualiza el archivo [index.js](https://github.com/jfrancisco4490/calificacionEmpresa_2/blob/master/routes/index.js) con la definición de las posibles operaciones soportadas en la aplicación. Estas operaciones son:

 - `PUT /empresa/<id>/<nombre>/<direccion>/<area>` que define una solicitud de creación de nueva empresa (enviando todos los parámetros asociados a la misma)
 - `PUT /calificacion/<empresa>/<alumno>/<valor>` que especifica la creación de una nueva calificación de alumno a empresa
 - `DELETE /calificacion/<empresa>/<alumno>` que indica la eliminación de una calificación ya registrada en la base de datos
 - `GET /ranking` que define el listado de las empresas mejor valoradas según las calificaciones de los alumnos
 - `GET /calificaciones/<empresa>` que especifica el listado de todas las calificaciones de alumnos asociadas a una determinada empresa
 
3. Se actualiza el archivo [test.js](https://github.com/jfrancisco4490/calificacionEmpresa_2/blob/master/test/test.js) con la especificación de las nuevas pruebas unitarias del sistema, utilizando la librería _supertest_. Se incluye una prueba de éxito para cada funcionalidad implementada.

4. Se incluyen en el archivo [package.json](https://github.com/jfrancisco4490/calificacionEmpresa_2/blob/master/package.json) las librerías de desarrollo correspondientes (especialmente _Express_ y _supertest_).

La estructura general del ejercicio se puede ver en el repositorio correspondiente: [Calificación Empresas 2](https://github.com/jfrancisco4490/calificacionEmpresa_2)