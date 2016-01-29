## Ejercicio 3

### Crear pruebas para las diferentes rutas de la aplicación.

Para este ejercicio me he basado en la aplicación web para calificar empresas que se creó en los ejercicios del primer 
tema. He empezado de cero de nuevo a hacer esta pequeña aplicación en node.js y usando express y mongoDB, para afianzar
 los conocimientos adquiridos con este nuevo lenguaje de programación.
 
Primero se modifica el archivo **index.js** con las funcionalidades de la aplicación web:

- **/** Renderiza la pagina de inicio.
- **/crearEmpresa** Guarda una empresa en la base de datos.
- **/listarEmpresas** Lista las empresas inscritas.

A continuación, se crean nuevas pruebas unitarias para estas funcionalidades con la librería **supertest**. Para ello,
modificamos el archivo **test.js**.

Y por último, se comprueba que todas las librerias necesarias se hayan dentro del archivo **package.json**.

[Repositorio](https://github.com/fllodrab/ratingCompanies2) de esta pequeña aplicación web

