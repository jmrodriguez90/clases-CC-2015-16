#Ejercicio 3

Ejecutar el programa en diferentes versiones del lenguaje. ¿Funciona en todas ellas?

###Pasos realizados para la resolución del ejercicio:

* Para ejecutar el programa de prueba [_testCalificacionEmpresa.js_](https://github.com/jfrancisco4490/calificacionEmpresa/blob/master/src/testCalificacionEmpresa.js) en la versión _4.12_:

 a. Instalar el módulo de _sqlite3_
 
 `npm install sqlite3`
 
 b. Ejecutar el programa de _test_
 
 `node testCalificacionEmpresa.js`
 
 c. Resultado de la ejecución

```
[INFO] Iniciando Ejecucion de Pruebas!!!

[INFO] Prueba de Creacion de Empresa...
[INFO] Finalizada con exito!!!

[INFO] Prueba de Registro de calificaciones validas...
[INFO] Finalizada con exito!!!

[INFO] Prueba de Eliminacion de calificaciones...
[INFO] Finalizada con exito!!!

[INFO] Prueba de Listado de calificaciones por empresa...

[RES] Empresa: 'Emp1
[RES] Usuario: 'Usr1' - Calificacion: 3
[RES] Empresa: 'Emp1
[RES] Usuario: 'Usr2' - Calificacion: 1
[RES] Empresa: 'Emp1
[RES] Usuario: 'Usr3' - Calificacion: 2
[RES] Empresa: 'Emp1
[RES] Usuario: 'UsrTest' - Calificacion: 5
[RES] Empresa: 'Emp2
[RES] Usuario: 'Usr1' - Calificacion: 2
[RES] Empresa: 'Emp2
[RES] Usuario: 'Usr2' - Calificacion: 1
[RES] Empresa: 'Emp2
[RES] Usuario: 'Usr3' - Calificacion: 4
[RES] Empresa: 'Emp2
[RES] Usuario: 'UsrTest' - Calificacion: 5
[RES] Empresa: 'Emp3
[RES] Usuario: 'Usr1' - Calificacion: 5
[RES] Empresa: 'Emp3
[RES] Usuario: 'Usr2' - Calificacion: 2
[RES] Empresa: 'Emp3
[RES] Usuario: 'Usr3' - Calificacion: 5
[RES] Empresa: 'Emp3
[RES] Usuario: 'UsrTest' - Calificacion: 4
[RES] Empresa: 'EmpTest
[RES] Usuario: 'Usr1' - Calificacion: 4
[RES] Empresa: 'EmpTest
[RES] Usuario: 'Usr2' - Calificacion: 5
[RES] Empresa: 'EmpTest
[RES] Usuario: 'Usr3' - Calificacion: 1

[INFO] Prueba de Ranking de empresas...
[RES] Ranking de Empresas: 

   [RES] Id: 'Emp3', Nombre: 'Empresa3', Direccion: 'Direccion3', Area: 'Area3', Media: 4
   [RES] Id: 'EmpTest', Nombre: 'EmpresaTest', Direccion: 'DireccionTest', Area: 'AreaTest', Media: 3.3333333333333335
   [RES] Id: 'Emp2', Nombre: 'Empresa2', Direccion: 'Direccion2', Area: 'Area2', Media: 3
   [RES] Id: 'Emp1', Nombre: 'Empresa1', Direccion: 'Direccion1', Area: 'Area1', Media: 2.75
     
[INFO] Finalizada con exito!!!

[INFO] Prueba de Registro de calificaciones duplicadas...
[INFO] Finalizada con exito!!!

[INFO] Terminando Ejecucion de Pruebas!!!

[ERR] El usuario 'Usr1' ya ha registrado una calificacion para la empresa 'EmpTest'
[ERR] Informacion completa del Error:
   [SYS] SQLITE_CONSTRAINT: UNIQUE constraint failed: CALIFICACION.usuario, CALIFICACION.identificador

[ERR] El usuario 'Usr2' ya ha registrado una calificacion para la empresa 'EmpTest'
[ERR] Informacion completa del Error:
   [SYS] SQLITE_CONSTRAINT: UNIQUE constraint failed: CALIFICACION.usuario, CALIFICACION.identificador

[ERR] El usuario 'Usr3' ya ha registrado una calificacion para la empresa 'EmpTest'
[ERR] Informacion completa del Error:
   [SYS] SQLITE_CONSTRAINT: UNIQUE constraint failed: CALIFICACION.usuario, CALIFICACION.identificador
```

* Para ejecutar el programa de prueba [_testCalificacionEmpresa.js_](https://github.com/jfrancisco4490/calificacionEmpresa/blob/master/src/testCalificacionEmpresa.js) en la versión _0.12.7_, utilizando _nvm_ (entorno virtual para _node.js_):

 a. Instalar versión _0.12.7_ de _node.js_ con _nvm_:
 
 `nvm install 0.12.7`
 
 b. Utilizar versión _0.12.7_ de _node.js_ (en caso de haber instalado múltiples versiones con el entorno virtual)
 
 `nvm use 0.12.7`
 
 c. Instalar el módulo de _sqlite3_
 
 `npm install sqlite3`
 
 d. Ejecutar el programa de _test_
 
 `node testCalificacionEmpresa.js`
 
 e. Resultado de la ejecución

```
[INFO] Iniciando Ejecucion de Pruebas!!!

[INFO] Prueba de Creacion de Empresa...
[INFO] Finalizada con exito!!!

[INFO] Prueba de Registro de calificaciones validas...
[INFO] Finalizada con exito!!!

[INFO] Prueba de Eliminacion de calificaciones...
[INFO] Finalizada con exito!!!

[INFO] Prueba de Listado de calificaciones por empresa...

[RES] Empresa: 'Emp1
[RES] Usuario: 'Usr1' - Calificacion: 3
[RES] Empresa: 'Emp1
[RES] Usuario: 'Usr2' - Calificacion: 1
[RES] Empresa: 'Emp1
[RES] Usuario: 'Usr3' - Calificacion: 2
[RES] Empresa: 'Emp1
[RES] Usuario: 'UsrTest' - Calificacion: 5
[RES] Empresa: 'Emp2
[RES] Usuario: 'Usr1' - Calificacion: 2
[RES] Empresa: 'Emp2
[RES] Usuario: 'Usr2' - Calificacion: 1
[RES] Empresa: 'Emp2
[RES] Usuario: 'Usr3' - Calificacion: 4
[RES] Empresa: 'Emp2
[RES] Usuario: 'UsrTest' - Calificacion: 5
[RES] Empresa: 'Emp3
[RES] Usuario: 'Usr1' - Calificacion: 5
[RES] Empresa: 'Emp3
[RES] Usuario: 'Usr2' - Calificacion: 2
[RES] Empresa: 'Emp3
[RES] Usuario: 'Usr3' - Calificacion: 5
[RES] Empresa: 'Emp3
[RES] Usuario: 'UsrTest' - Calificacion: 4
[RES] Empresa: 'EmpTest
[RES] Usuario: 'Usr1' - Calificacion: 4
[RES] Empresa: 'EmpTest
[RES] Usuario: 'Usr2' - Calificacion: 5
[RES] Empresa: 'EmpTest
[RES] Usuario: 'Usr3' - Calificacion: 1

[INFO] Prueba de Ranking de empresas...
[RES] Ranking de Empresas: 

   [RES] Id: 'Emp3', Nombre: 'Empresa3', Direccion: 'Direccion3', Area: 'Area3', Media: 4
   [RES] Id: 'EmpTest', Nombre: 'EmpresaTest', Direccion: 'DireccionTest', Area: 'AreaTest', Media: 3.3333333333333335
   [RES] Id: 'Emp2', Nombre: 'Empresa2', Direccion: 'Direccion2', Area: 'Area2', Media: 3
   [RES] Id: 'Emp1', Nombre: 'Empresa1', Direccion: 'Direccion1', Area: 'Area1', Media: 2.75
     
[INFO] Finalizada con exito!!!

[INFO] Prueba de Registro de calificaciones duplicadas...
[INFO] Finalizada con exito!!!

[INFO] Terminando Ejecucion de Pruebas!!!

[ERR] El usuario 'Usr1' ya ha registrado una calificacion para la empresa 'EmpTest'
[ERR] Informacion completa del Error:
   [SYS] SQLITE_CONSTRAINT: UNIQUE constraint failed: CALIFICACION.usuario, CALIFICACION.identificador

[ERR] El usuario 'Usr2' ya ha registrado una calificacion para la empresa 'EmpTest'
[ERR] Informacion completa del Error:
   [SYS] SQLITE_CONSTRAINT: UNIQUE constraint failed: CALIFICACION.usuario, CALIFICACION.identificador

[ERR] El usuario 'Usr3' ya ha registrado una calificacion para la empresa 'EmpTest'
[ERR] Informacion completa del Error:
   [SYS] SQLITE_CONSTRAINT: UNIQUE constraint failed: CALIFICACION.usuario, CALIFICACION.identificador
```
 
* Para ejecutar el programa de prueba [_testCalificacionEmpresa.js_](https://github.com/jfrancisco4490/calificacionEmpresa/blob/master/src/testCalificacionEmpresa.js) en la versión _0.11.16_, utilizando _nvm_ (entorno virtual para _node.js_):

 a. Instalar versión _0.11.16_ de _node.js_ con _nvm_:
 
 `nvm install 0.11.16`
 
 b. Utilizar versión _0.11.16_ de _node.js_ (en caso de haber instalado múltiples versiones con el entorno virtual)
 
 `nvm use 0.11.16`
 
 c. Instalar el módulo de _sqlite3_
 
 `npm install sqlite3`
 
 El comando anterior no funciona en esta versión (inestable) de _node.js_.
 
 El módulo de _node.js_ asociado a _sqlite3_ solo funciona para versiones estables (_0.12_ y _0.10_, pero no para _0.11_).

 Por lo tanto, no se puede ejecutar el programa de prueba de calificación de empresas en esta versión.