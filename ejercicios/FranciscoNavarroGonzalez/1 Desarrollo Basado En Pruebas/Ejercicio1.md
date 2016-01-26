#Ejercicio 1
==============================

##1. Instalar alguno de los entornos virtuales de node.js y, con ellos, instalar la última versión existente, la versión minor más actual de la 0.12 y lo mismo para la 0.11 o alguna impar. 
Si no se usa habitualmente este lenguaje, hacer lo mismo con cualquier otro lenguaje de scripting.

#Solucion 
==============================
##1.Instalacion de las herramientas para la creación de entornos virtuales

###1.1 NodeJS

Para NodeJS existen varios entornos virtuales la mayoría por no decir todos son software libre. 
Pero como siempre hay una solución que se extiende sobre el resto, en este caso las soluciones más populares entre la comunidad son [Nodeenv](https://github.com/ekalinin/nodeenv) y [Nave](https://github.com/isaacs/nave)

Lo bueno de Nodeenv es que te permite integrarlo con virtualenv y python, de hecho, su instalación se realiza a través de python y sus herramientas de gestión de dependencias easy_install/pip.

![NodeJSinstall](http://francisconavarro.nom.es/cloudcomputing/t1/1nodejs.png "Instalacion NodeJS")
![Nodeenvinstall](http://francisconavarro.nom.es/cloudcomputing/t1/1nodenv.png)

###1.2 Python

Uno de los lenguajes que más he utilizado ha sido python, por lo tanto para este ejercicio también crearé un entorno virtual para este lenguaje. 
Para instalar virtualenv se puede hacer desde los repositorios de la mayoría de las distribuciones de linux. 
En concreto para las últimas versiones de Fedora (>21)  

sudo dnf install python-virtualenv (para la version 2.7)
![PythonVirutalEnv](http://francisconavarro.nom.es/cloudcomputing/t1/1python27virtualenv.png)

sudo dnf install python3-virtualenv (para la version 3)
![Python3VirtualEnv](http://francisconavarro.nom.es/cloudcomputing/t1/1python3virtualenv.png)

Por supuesto, al ser python la herramienta elegida se podría utilizar pip/easy install para tal fin.

##2.Creación de los Virtual Environment

###2.1 Para NodeJS
Se requiere instalar un virtual env para la última versión, otra para la 0.12 y otra para la 0.11

####2.1.1 Para la última versión
La última versión es la 4.1.2. Por defecto nodeenv instala la última versión disponible. 
Por lo tanto, basta con especificar el directorio donde queremos la instalación del entornovirtual. 

sudo nodeenv /var/lib/nodejs412

![Nodjsv412](http://francisconavarro.nom.es/cloudcomputing/t1/1nodejs412.png)

####2.1.2 Para la versión 0.12.7 (que es la minor mas actual)
Para ello especificamos la versión con -n seguido del path donde queremos que se expanda. 

![Nodejsv0127](http://francisconavarro.nom.es/cloudcomputing/t1/1nodejs0127.png)

####2.1.3 Para la versión 0.11.16 (unstable)

![Nodejsv01116](http://francisconavarro.nom.es/cloudcomputing/t1/1nodejs01116.png)


###2.2 Para python

####2.2.1 Para python 2.7

Para python, como hemos dicho antes utilizamos la herramienta virtualenv. 
Para ello hay que especificar que versión queremos utilizar. Podemos aprovechar la instalación de python en nuestra distribución con el parámetro -p. 

Sudo virtualenv -p /usr/bin/python27 /var/lib/envpython27

![Python27env](http://francisconavarro.nom.es/cloudcomputing/t1/1envpython27.png)

####2.2.2 Para python 3

La última versión de python 3 es la 3.4. Procedemos como antes. 

sudo virtualenv -p /usr/bin/python3.4 /var/lib/envpython34

![Python34env](http://francisconavarro.nom.es/cloudcomputing/t1/1envpython34.png)
