#Ejercicio 11

Crear, a partir de un contenedor _Docker_, una imagen persistente con _commit_.

###Pasos realizados para la resolución del ejercicio:

1. Determinar el identificador completo del contenedor _Docker_ correspondiente

 `docker images --no-trunc`
 
 El identificador que se debe utilizar se encuentra en la columna `IMAGE ID` de la tabla resultante de ejecutar el comando anterior
 
2. Guardar el estado actual del contenedor, creando una imagen persistente (_commit_)

 `docker commit <id_completo_contenedor> <nombre_nueva_imagen>`
 
 Donde `<id_completo_contenedor>` es el identificador obtenido al ejecutar el comando del paso anterior