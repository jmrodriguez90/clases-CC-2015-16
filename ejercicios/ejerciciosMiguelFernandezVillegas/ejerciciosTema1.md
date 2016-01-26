##Ejercicio 1

###Instalar alguno de los entornos virtuales de node.js y, con ellos, instalar la última versión existente, la versión minor más actual de la 0.12 y lo mismo para la 0.11 o alguna impar.Si no se usa habitualmente este lenguaje, hacer lo mismo con cualquier otro lenguaje de scripting.

En mi caso he instalado nodeenv, el comando usado es el siguiente:

`sudo easy_install nodeenv` 

Lo siguiente a realizar ya que usaré python para el proyecto usaré el siguiente comando: 

`sudo apt-get install python-virtualenv`

Por último usamos para comprobar que ha sido correctamente instalado `virtualenv –-version`

##Ejercicio 2
###Como ejercicio, algo ligeramente diferente: una web para calificar las empresas en las que hacen prácticas los alumnos. Las acciones serían crear empresa y listar calificaciones para cada empresa, crear calificación y añadirla (comprobando que la persona no la haya añadido ya), borrar calificación (si se arrepiente o te denuncia la empresa o algo) y hacer un ránking de empresas por calificación, por ejemplo. Crear un repositorio en GitHub para la librería y crear un pequeño programa que use algunas de sus funcionalidades. Si se quiere hacer con cualquier otra aplicación, también es válido.Se puede hacer un ejercicio equivalente, siempre que tenga operaciones similares: creación, listado, borrado, ciclo CRUD básico. El objetivo de este ejercicio es poner en práctica lo que viene a continuación, NO es un objetivo de la asignatura.

Elegire la segunda opción, ya que varios compañeros de clase hemos decidido participar conjuntamente creando un proyecto en común por medio de una [organización](https://github.com/ProyectCC), en la que cada uno tendremos un submódulo, adjunto el enlace a mi [submódulo](https://github.com/miguelfervi/ProjectCC).

##Ejercicio 3

###Ejecutar el programa en diferentes versiones del lenguaje. ¿Funciona en todas ellas?

En mi caso el proyecto está programado en python, por tanto usaremos python, python2 y python 3

![Pantallazo python](https://i.gyazo.com/522e4072fe680690b05180cd3aacb43c.png)
![Pantallazo python2](https://i.gyazo.com/da4bff8e92bfcfef6d80bad987b4e84b.png)
![Pantallazo python3] (https://i.gyazo.com/96a62f58d5b56ddfb595513d045ef3f3.png)

Para python y python2, la web funciona correctamente, en el caso de python3, muestra un error al realizar un print, le faltan los paréntesis. 

##Ejercicio 4
###Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente.

Como usaré python creo el archivo requirement.txt, para observar cuales son las dependencias que tiene el programa. Se pueden ver con el siguiente comando

`pip freeze`

a continuación creo el archivo [requirement.txt](https://github.com/miguelfervi/ProjectCC/blob/master/requeriment.txt) con el total de dependencias para este proyecto

##Ejercicio 5
###Automatizar con grunt y docco (o algún otro sistema) la generación de documentación de la librería que se cree.Previamente, por supuesto, habrá que documentar tal librería.

Para python usaremos un port de docco llamado pycco.

Para instalarlo usaremos `sudo pip install pycco' y para ejecutar `pycco archivopython.py' 

Los documentos generados (html con sus respectivos css) los puedo ver en el directorio [docs](https://github.com/miguelfervi/ProjectCC/tree/master/docs)

##Ejercicio 6
##Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).


![Test](https://gyazo.com/086d9d00a1636672d9a0c2d14b59eba7.png)


