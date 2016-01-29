#Ejercicio 2

Como ejercicio, algo ligeramente diferente: una _web_ para calificar las empresas en las que hacen prácticas los alumnos. Las acciones serían crear empresa y listar calificaciones para cada empresa, crear calificación y añadirla (comprobando que la persona no la haya añadido ya), borrar calificación (si se arrepiente o te denuncia la empresa o algo) y hacer un ránking de empresas por calificación, por ejemplo. Crear un repositorio en _GitHub_ para la librería y crear un pequeño programa que use algunas de sus funcionalidades. Si se quiere hacer con cualquier otra aplicación, también es válido.

Se puede hacer un ejercicio equivalente, siempre que tenga operaciones similares: creación, listado, borrado, ciclo _CRUD_ básico.

###Pasos realizados para la resolución del ejercicio:

1. Creación del archivo [_libCalificacionEmpresa.js_](https://github.com/jfrancisco4490/calificacionEmpresa/blob/master/src/lib/libCalificacionEmpresa.js). En este archivo se incluye la implementación de las funcionalidades básicas requeridas en el _CRUD_ de la calificación de las empresas.

 Las funciones de esta librería son:
 
  - **_crearEmpresa_**: Permite el registro de una nueva empresa o institución
  - **_ranking_**: Ordenar las empresas registradas según su valoración o calificaciones promedio
  - **_listarCalificaciones_**: Mostrar las calificaciones registradas para una determinada empresa o institución
  - **_crearCalificacion_**: Registrar nueva calificacion o valoración de un usuario (estudiante) a una empresa
  - **_eliminarCalificacion_**: Eliminar calificación particular asociada a una empresa o institución
 
2. Elaboración del programa de prueba [_testCalificacionEmpresa.js_](https://github.com/jfrancisco4490/calificacionEmpresa/blob/master/src/testCalificacionEmpresa.js). Este sencillo programa permite probar las funcionalidades principales definidas en la librería de calificación de empresas.

 Las pruebas realizadas en este programa son:
 
  - Pruebas sobre registro de nuevas empresas
  - Definir calificaciones de usuarios a empresas
  - Eliminar valoraciones registradas
  - Presentar listado de calificaciones registradas para cada empresa
  - Mostrar ranking actual de empresas (según el promedio de sus calificaciones)
  - Intentar registro de calificaciones duplicadas (un usuario intenta valorar a una empresa a la cual ya había calificado previamente)
 
**Importante:** 

 - Para la ejecución correcta del programa de prueba, es necesario instalar _sqlite3_, utilizando el comando:

 `npm install sqlite3`
 
 - El programa puede ser ejecutado con versiones **estables** de _node.js_ superiores a la _0.10_ (lo cual excluye a la versión _0.11_, la cual no es compatible con _sqlite3_).