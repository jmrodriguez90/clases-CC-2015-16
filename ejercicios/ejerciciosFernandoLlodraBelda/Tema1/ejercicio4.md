## Ejercicio 4

#### Crear una descripción del módulo usando `package.json`. En caso de que se trate de otro lenguaje, usar el método correspondiente.

Mi archivo `package.json` es el siguiente:

```
{
  "name": "application-name",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "3.3.5",
    "jade": "*",
    "mongoose": "^4.2.3"
  },
  "devDependencies": {
    "mocha": "*",
    "should": ">= 0.0.1"
  },
  "scripts": {
    "start": "node_modules/.bin/supervisor app",
    "test": "node_modules/.bin/mocha -w"
  }
}
```
A continuación se explica brevemente los puntos más relevantes del archivo `package.json`

- **name** -> Nombre de la aplicación
- **version** -> Versión de la aplicación
- **scripts** -> Scripts a ejecutar a la hora de ejecutar la aplicación o los tests.
- **dependencies** -> Módulos de node necesarios en la aplicación a gusto del desarrollador.
- **devDependencies** -> Módulos de node necesarios relacionados con tareas de desarrollos tales como los tests o despliegues.