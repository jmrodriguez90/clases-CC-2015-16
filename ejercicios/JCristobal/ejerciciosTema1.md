**José Cristóbal López Zafra - Ejercicios del [tema 1](http://jj.github.io/CC/documentos/temas/Desarrollo_basado_en_pruebas)**

##Ejercicio1

###Instalar alguno de los entornos virtuales de node.js y, con ellos, instalar la última versión existente, la versión minor más actual de la 0.12 y lo mismo para la 0.11 o alguna impar. Si no se usa habitualmente este lenguaje, hacer lo mismo con cualquier otro lenguaje de scripting. 

Para instalar nodeenv simplemente ejecutamos el comando `sudo easy_install nodeenv` 

Trabajaremos con python por lo que instalamos virtualenv con el comando  `sudo apt-get install python-virtualenv`

![Pantallazo mostrando la versión del enterno virtualenv una vez instalado](https://i.gyazo.com/b36d0a16c360e31c324da6b8dff0c06b.png)


##Ejercicio2

###Como ejercicio, algo ligeramente diferente: una web para calificar las empresas en las que hacen prácticas los alumnos. Las acciones serían crear empresa y listar calificaciones para cada empresa, crear calificación y añadirla (comprobando que la persona no la haya añadido ya), borrar calificación (si se arrepiente o te denuncia la empresa o algo) y hacer un ránking de empresas por calificación, por ejemplo. Crear un repositorio en GitHub para la librería y crear un pequeño programa que use algunas de sus funcionalidades. Si se quiere hacer con cualquier otra aplicación, también es válido.
###Se puede hacer un ejercicio equivalente, siempre que tenga operaciones similares: creación, listado, borrado, ciclo CRUD básico. El objetivo de este ejercicio es poner en práctica lo que viene a continuación, NO es un objetivo de la asignatura.


Optaré por la segunda opción, un ejercicio equivalente. Lo desarrollaremos en una [organización de github](https://github.com/ProyectCC), con cada miembro encargado de un submódulo. [Mi submódulo es éste](https://github.com/JCristobal/ProjectCC).



##Ejercicio3

###Ejecutar el programa en diferentes versiones del lenguaje. ¿Funciona en todas ellas?

Ejecuto con python y python3. Funciona correctamente para el primero, pero para la segunda no tiene la sintasis adecuada

![Pantallazo probando las diferentes versiones](https://i.gyazo.com/10d60cfb9eb7fb4d19dbaee3f87cbc8b.png)


##Ejercicio4

###Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente. 

Con python creamos el archivo requirement.txt, que lista las dependencias que necesitamos. Podemos verlas ejecutando `pip freeze`.

Y creamos [el archivo](https://github.com/JCristobal/ProjectCC/blob/master/requirements.txt) con las dependencias que necesita nuestro proyecto.


##Ejercicio5

###Automatizar con grunt y docco (o algún otro sistema) la generación de documentación de la librería que se cree. Previamente, por supuesto, habrá que documentar tal librería.

Usaré [pycco](http://fitzgen.github.io/pycco/), "versión python de Docco".

Una vez instalado con `sudo pip install pycco` ejecuto `pycco python.py` o `pycco *.py` si hay varios archivos python.

Los documentos generados (html con sus respectivos css) los puedo ver en el [directorio docs/](https://github.com/JCristobal/ProjectCC/tree/master/docs) 


##Ejercicio6

###Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).

Pruebo una serie de aserciones básicas de *unittest* para strings y mi conexión a la BD. Añado algún test básico en script.py antes de lanzar la aplicación (en el repositorio todos los test):

```
import unittest
class TestMethods(unittest.TestCase):

  #test básicos comprbando strings
  def test_upper(self):
      self.assertEqual('foo'.upper(), 'FOO')

  # test para comprobar que nos hemos conectado
  def test_dbcon(self):
      client = MongoClient()
      db = client.usuarios
      
suite = unittest.TestLoader().loadTestsFromTestCase(TestMethods)
unittest.TextTestRunner(verbosity=2).run(suite)
```


##Ejercicio7
###Convertir los tests unitarios anteriores con assert a programas de test y ejecutarlos desde mocha, usando descripciones del test y del grupo de test de forma correcta. Si hasta ahora no has subido el código que has venido realizando a GitHub, es el momento de hacerlo, porque lo vamos a necesitar un poco más adelante. 

Si no lo tenemos instalado podemos hacerlo con `npm install mocha --save-dev`. Además instalamos chai con `npm install chai` y `npm install chai-fs` para un *plugin* que usaremos. Creamos un archivo básico package.json y especificamos que ejecute mocha:

```
{
  "name": "ProyectCC-PeriodicoInteractivo",

  "version": "0.0.1",

  "author": "JCristobal",

  "description": "Proyecto de MII en Granada: Periódico web interactivo",

  "keywords": ["CC, periodico"],

  "devDependencies": {
    "chai": "*",
    "mocha": "*"
  },

  "scripts": {
    "test": "mocha"
  }
}
```

Dentro de [test/test.js](https://github.com/JCristobal/ProjectCC/blob/master/test/test.js) creamos unos test básicos y otros para comprobar algunos ficheros:

```

  describe('Comprobamos archivos', function () {

    it('El fichero principal existe', function (done) {
      expect('script.py').to.be.a.file();
      done();
    });

    it('Archivos de documentación "pycco" existen', function (done) {
      expect('docs/script.html').to.be.a.file();
      expect('docs/pycco.css').to.be.a.file();
      done();
    });

  });

```


Y los [probamos con `npm test`](https://i.gyazo.com/afa3ba30dc71abc59a398fe27ddc6c63.png).


##Ejercicio8

### En mi caso para Travis:

####1- Darse de alta. Muchos están conectados con GitHub por lo que puedes usar directamente el usuario ahí. A través de un proceso de autorización, acceder al contenido e incluso informar del resultado de los tests.

Simplemente a través de GitHub.

####2- Activar el repositorio en el que se vaya a aplicar la integración continua. Travis permite hacerlo directamente desde tu configuración; en otros se dan de alta desde la web de GitHub.

Dentro del repositorio, en Settings y en el apartado "Webhooks & services" pulsamos el botón "Test service".

####3- Crear un fichero de configuración para que se ejecute la integración y añadirlo al repositorio.

Lo creo con el nombre [.travis.yml](https://github.com/JCristobal/ProjectCC/blob/master/.travis.yml) y tras varias correcciones se ejecuta correctamente.

Mi .travis.yml básico contiene:

```
language: python
python:
  - '2.6'
  - '2.7'
# command to install dependencies
install: "pip install -r requirements.txt"
# command to run tests
script: npm install mocha --save-dev; npm install chai; npm install chai-fs;  npm test
```



![Travis funcionando](https://i.gyazo.com/31e032a0ba29fdc0d8a34a586b9325ac.png)




Y por último añado el *badge*, [![Build Status](https://travis-ci.org/JCristobal/ProjectCC.svg?branch=master)](https://travis-ci.org/JCristobal/ProjectCC) que se puede ver en el [README](https://github.com/JCristobal/ProjectCC) del proyecto.



