#Ejercicio 4
Crear una descripción del módulo usando package.json. 
En caso de que se trate de otro lenguaje, usar el método correspondiente.

#Solucion
Django utiliza su propio sistema de packaging para extender el framework usando [reusable apps](https://docs.djangoproject.com/en/1.8/intro/reusable-apps/)
Para ello se crean ficheros con distinta funcionalidad cada uno:

1. [README](https://github.com/fnavarrogonzalez/RankingEmpresas/blob/master/rankingempresas/README.rst) 
Nos indica como instalar el modulo y los primeros pasos en el 

2. [MANIFIEST](https://github.com/fnavarrogonzalez/RankingEmpresas/blob/master/rankingempresas/MANIFEST.in)
Nos indica las carpetas y ficheros que deben incluirse en la instalacion

3. [SETUP](https://github.com/fnavarrogonzalez/RankingEmpresas/blob/master/rankingempresas/setup.py)
Nos indica informacion relevante como el nombre, version, descripcion, autor, version de python...

Además se debe incluir un archivo license. 

Lo que se distribuye por tanto no es el projecto "Ejemplo2" en este caso si no la app "RankingEmpresas".

Python por su parte utiliza pip/easy como gestor de paquetes. 
Es facil crear un pip a partir de la configuración haciendo uso del terminal con
pip freeze

Además existen herramientas alternativas creadas por la comunidad para utilizar npm y su package.json en django.
