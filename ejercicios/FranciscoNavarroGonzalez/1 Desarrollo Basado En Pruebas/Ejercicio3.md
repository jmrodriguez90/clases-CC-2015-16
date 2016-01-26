#Ejercicio 3
Ejecutar el programa en diferentes versiones del lenguaje. 
¿Funciona en todas ellas?

#Solucion
Se instala un nuevo environment de python3 y se instala django. Se copian los archivos del proyecto en django de python2 a python 3 y se instalar las dependencias y se intenta ejecutar la app.

Se observa que:

Entre versiones 2 y 3 existen varios cambios, tanto en sintaxis como en nombre de funciones por defecto. 
Ademas para mi caso concreto en la 3 no es compatible el paquete jquery porque hace uso del paquete turbogears que requiere la version minima 2.4 y máxima 2.7.
Por lo tanto, no, no funciona en todas ellas. 
