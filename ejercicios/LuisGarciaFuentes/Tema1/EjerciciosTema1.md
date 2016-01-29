##Ejercicio 1

###Instalar alguno de los entornos virtuales de node.js y, con ellos, instalar la última versión existente, la versión minor más actual de la 0.12 y lo mismo para la 0.11 o alguna impar.Si no se usa habitualmente este lenguaje, hacer lo mismo con cualquier otro lenguaje de scripting.

Me he decantado por instalar el entorno virtual n:

```
git clone https://github.com/tj/n.git
cd n
sudo make install
```

Ahora vamos a instalar las versiones *0.11* y *0.12*, ya que son últimas versiones.

```
sudo n 0.11.16
sudo n 0.12.7
```

##Ejercicio 2
###Como ejercicio, algo ligeramente diferente: una web para calificar las empresas en las que hacen prácticas los alumnos. Las acciones serían crear empresa y listar calificaciones para cada empresa, crear calificación y añadirla (comprobando que la persona no la haya añadido ya), borrar calificación (si se arrepiente o te denuncia la empresa o algo) y hacer un ránking de empresas por calificación, por ejemplo. Crear un repositorio en GitHub para la librería y crear un pequeño programa que use algunas de sus funcionalidades. Si se quiere hacer con cualquier otra aplicación, también es válido.Se puede hacer un ejercicio equivalente, siempre que tenga operaciones similares: creación, listado, borrado, ciclo CRUD básico. El objetivo de este ejercicio es poner en práctica lo que viene a continuación, NO es un objetivo de la asignatura.

En [Submodulo-Red-social-Analytics](https://github.com/luishexen/Submodulo-Red-social-Analytics.git) se encuentran todos los ficheros necesarios para ejecutar este submodulo. Se encuentra el servidor de nodeJS junto a todos los recursos y los ficheros html. Se encuentra implementada la página de inicio para realizar el login de los usuarios. Además se encuentra un vídeo de presentación del juego. El cliente realiza las solicitudes de enviar al servidor los datos del usuario este los almacena. Con lo que hay una creación, listado y borrado de usuarios en el servidor.    

![img](https://dl.dropboxusercontent.com/s/c2gbfegdks9tuob/Captura.png?dl=0)

##Ejercicio 3
###Ejecutar el programa en diferentes versiones del lenguaje. ¿Funciona en todas ellas?

Para cambiar entre versiones de Node.js en n ponemos este comando:

```
sudo n
```

Ejecutamos con la versión **0.11.16**:

![img](https://dl.dropboxusercontent.com/s/bdxqn4yq8pm5rzu/Captura2.png?dl=0)

Ejecutamos con la versión **0.12.7**:

![img](https://dl.dropboxusercontent.com/s/zvpt433hw0uns0t/Captura3.png?dl=0)

##Ejercicio 4
###Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente.

Para generar el `package.json`ponemos el siguiente comando:

```
npm init
```

El archivo `package.json` generado es el siguiente:

```
{
  "name": "submodulo-analytics",
  "version": "1.0.0",
  "description": "Submodulo encargado de la gestion de usuarios y del analisis de datos de estos",
  "main": "ServidorJuego.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/luishexen/Submodulo-Red-social-Analytics.git"
  },
  "keywords": [
    "Cloud",
    "computing"
  ],
  "author": "Luis Garcia Fuentes",
  "license": "GPL-2.0",
  "bugs": {
    "url": "https://github.com/luishexen/Submodulo-Red-social-Analytics/issues"
  },
  "homepage": "https://github.com/luishexen/Submodulo-Red-social-Analytics#readme"
}
```

##Ejercicio 5
###Automatizar con grunt y docco (o algún otro sistema) la generación de documentación de la librería que se cree.Previamente, por supuesto, habrá que documentar tal librería.


##Ejercicio 6
###Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).

Hemos programado una bateria de test para ejecutarlos directamente desde consola:

```
'use strict';

var modulo = require('./ServidorJuego.js');
var assert = require("assert");

//Resultado de la gestión de usuarios no nula
assert.notEqual(modulo.calcular("Jugar","user1","pass1"), null);
assert.notEqual(modulo.calcular("Registrar","user2","pass2"), null);
assert.notEqual(modulo.calcular("","",""), null);
//Registro de usuario correcta
assert.equal(modulo.calcular("Registrar","user1","pass1"), "Registro realizado");
//Se inicia el juego
assert.equal(modulo.calcular("Jugar","user1","pass1"), "Logueado en el juego");
//No se permiten registros nulos
assert.equal(modulo.calcular("Registrar","",""),"No se pueden registrar esos datos");

console.log("Aserciones pasadas con éxito.")
```
Cuando ejecutamos los test nos muetra lo siguiente:

```
luis@luis-msi:~/Escritorio/Sistema de información CC$ node test.js
Servicio HTTP iniciado
Aserciones pasadas con éxito.
```

##Ejercicio 7
###Convertir los tests unitarios anteriores con assert a programas de test y ejecutarlos desde mocha, usando descripciones del test y del grupo de test de forma correcta. Si hasta ahora no has subido el código que has venido realizando a GitHub, es el momento de hacerlo, porque lo vamos a necesitar un poco más adelante.

Necesitaremos `mocha` asi que lo instalaremos con este comando:

```
npm install mocha --save-dev
```

Vamos a añadir a los test anteriores todo lo necesario para hacer una ejecución con mocha, esto lo hacemos con la función `describe`. Cada uno de los tests unitarios se llamarán dentro del método `it` y para indicar que ha finalizado llamamos al método ``done``:

```
describe('Tests', function() {

  it('Resultado de la gestión de usuarios no nula', function(done) {
    assert.notEqual(modulo.calcular("Jugar","user1","pass1"), null);
    assert.notEqual(modulo.calcular("Registrar","user2","pass2"), null);
    assert.notEqual(modulo.calcular("","",""), null);
    done();
  });

  it('Registro de usuario correcta', function(done) {
    assert.equal(modulo.calcular("Registrar","user1","pass1"), "Registro realizado");
    done();
  });

  it('Se inicia el juego', function(done) {
    assert.equal(modulo.calcular("Jugar","user1","pass1"), "Logueado en el juego");
    done();
  });

  it('No se permiten registros nulos', function(done) {
    assert.equal(modulo.calcular("Registrar","",""),"No se pueden registrar esos datos");
    done();
  });
});
```

En el archivo **package.json** creamos un script para ejecutar `mocha`:

```
...
"scripts": {
  "test": "mocha"
},
...
```

Ahora ejecutaremos los test con mocha:

![img](https://dl.dropboxusercontent.com/s/2vl0bsjjqlii91a/Captura4.png?dl=0)

##Ejercicio 8
###En mi caso para Travis:
###1- Darse de alta. Muchos están conectados con GitHub por lo que puedes usar directamente el usuario ahí. A través de un proceso de autorización, acceder al contenido e incluso informar del resultado de los tests.

Como se puede ver en la imagen se ha sincronizado mi cuenta travis a github:

![img](https://dl.dropboxusercontent.com/s/hv51x01hb5y2sm2/Captura5.png?dl=0)


###2- Activar el repositorio en el que se vaya a aplicar la integración continua. Travis permite hacerlo directamente desde tu configuración; en otros se dan de alta desde la web de GitHub.

Lo primero es crear el arvhivo **.travis.yml**. En este archivo solo hay que indicar que el lenguaje de la aplicación es **Node.js** y que queremos que las pruebas de integración se hagan para las versiones **0.10**, **0.11** y **0.12**.

```
language: node_js

node_js:
  - "0.12"
  - "0.11"
  - "0.10"
```

###3- Crear un fichero de configuración para que se ejecute la integración y añadirlo al repositorio.

En la foto que se muestra se puede ver que se han pasado todos los test en todas las versiones indicadas:

![img](https://dl.dropboxusercontent.com/s/5vd9cskdesu08jr/Captura6.png?dl=0)
