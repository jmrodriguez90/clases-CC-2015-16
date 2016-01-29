##Ejercicio 5

**Automatizar con grunt y docco (o algún otro sistema) la generación de documentación de la librería que se cree.Previamente, por supuesto, habrá que documentar tal librería.**

Para la documentación de la aplicación se usará [Pycco](http://fitzgen.github.io/pycco/), la versión para Python de Docco.

Pycco genera HTML que muestra los comentarios a lo largo del código. Los comentarios son adaptados a **Markdown** y **SmartyPants**, mientras que el código se adapta a **Pygments** para mostrar diferentes colores en la sintaxis y facilitar la lectura del mismo.
Este será el resultado de lanzar Pycco con el fichero fuente.

Para instalar pycoo:

```
sudo pip install pycco
```

o bien instalamos la última versión mediante:

```
git clone git://github.com/fitzgen/pycco.git cd pycco python setup.py install
```

Una vez instalado podremos lanzarlo mediante comando de líneas sobre todo los ficheros ".py"

pycco *.py
