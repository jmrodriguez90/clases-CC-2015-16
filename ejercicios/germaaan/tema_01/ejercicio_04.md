## Ejercicio 4

#### Crear una descripción del módulo usando `package.json`. En caso de que se trate de otro lenguaje, usar el método correspondiente.

El archivo `package.json` de la aplicación actualmente tiene el siguiente contenido:

```
{
  "name": "califica-empresas",
  "version": "0.1.0",
  "author": "Germán Martínez Maldonado",
  "description": "Aplicación de ejemplo para los ejercicios del tema 1 de Cloud Computing del Máster Universitario en Ingeniería Informática",
  "keywords": [
    "cloud computing"
  ],
  "bugs": {
    "url": "https://github.com/germaaan/calificaEmpresas/issues"
  },
  "repository": {
    "type": "git",
    "url": "git://github.com/germaaan/calificaEmpresas.git"
  },
  "license": "GPL-3.0",
  "homepage": "https://github.com/germaaan/clases-CC-2015-16/tree/master/ejercicios/germaaan/tema_01/",
  "main": "app.js",
  "os": [
    "linux"
  ],
  "private": false,
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": ""
  },
  "directories": {
    "lib": "lib",
    "test": "test"
  },
  "dependencies": {
    "bluebird": "^2.10.2",
    "express": "^3.21.2",
    "jade": "^1.11.0",
    "sqlite3": "^3.1.0",
    "underscore": "^1.8.3"
  },
  "devDependencies": {
    "docco": "^0.7.0",
    "grunt-docco": "^0.4.0"
  },
  "optionalDependencies": {},
  "engines": {
    "node": ">=0.11"
  }
}
```

- `name`: es el nombre de la aplicación.
- `version`: la versión actual de la aplicación.
- `author`: el auto de la aplicación.
- `description`: breve explicación sobre la función de la aplicación.
- `keywords`: palabras clave que podrían resumir la idea de la aplicación.
- `bugs`: forma de reportar los bugs que se encuentren en la aplicación, por ejemplo, abriendo un issue en el repositorio de la aplicación.
- `repository`: repositorio de la aplicación.
- `license`: licencia con la que se distribuye la aplicación. Debe introducirse una [expresión de licencias SPDX válida](http://spdx.org/licenses/).
- `homepage`: la página principal de la aplicación.
- `main`: el módulo principal de la aplicación.
- `os`: el sistema operativo para el que está desarrollado la aplicación.
- `scripts`: lista de scripts que se podrán ejecutar mediante `npm run-script SCRIPT`, permitiendo así simplificar la ejecución de tareas como el inicio de la aplicación o la ejecución de los tests de la misma.
- `directories`: lista los directorios importantes de la aplicación como puede ser el de las librerías y el de los tests.
- `dependencies`: módulos necesarios para que la aplicación pueda funcionar. Se puede indicar que se instale una versión exacta de las dependencias añadiendo **"^"** seguido de la versión que se quiere instalar.
- `devDependencies`: módulos necesarios para tareas de desarrollo de la aplicación como pueden ser ejecución de tests o despliegue automático.
- `optionalDependencies`: otros módulos que es recomendable que se instalen.
- `engines`: entorno de ejecución en el que está desarrollada la aplicación. Se puede indicar que la aplicación está desarrollada para funcionar a partir de una versión determinada añadiendo **">="** seguido de la versión recomendada.
