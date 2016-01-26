# Ejercicio 5

Automatizar con grunt y docco (o algún otro sistema) la generación de documentación de la librería que se cree. Previamente, por supuesto, habrá que documentar tal librería.

# Solucion

Para python hay varias herramientas de documentación y muchas son muy extendidas. 
Una de ellas se utiliza en django donde su uso es casi obligatorio: sphinx. 

Para instalar sphinx se puede realizar desde pip como cualquier otro paqueta y dispone de su propio lenguaje de etiquetas como ocurre con otras conocidas herramientas como javadoc y doxygen, sin embargo esta herramienta tiene un lenguaje mucho más potente permitiendo el uso de tablas y estilos. 

En realidad se utiliza [autodoc](http://sphinx-doc.org/ext/autodoc.html) una extensión de sphinx que sería lo equivalente a javadoc, ya que sphinx en realidad es mucho mas potente y te permite generar contenido y/o secciones adicionales. 


Puedes ver la documentación generada de mi proyecto [aquí](http://francisconavarro.nom.es/cloudcomputing/doc/)

Y ver los archivos de en el repositorio:

[Configuración](https://github.com/fnavarrogonzalez/RankingEmpresas/tree/master/rankingempresas/source)

[Generados](https://github.com/fnavarrogonzalez/RankingEmpresas/tree/master/rankingempresas/build)





