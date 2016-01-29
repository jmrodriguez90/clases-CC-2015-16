#Ejercicio 9

 - Instalar a partir de _Docker_ una imagen alternativa de _Ubuntu_ y alguna adicional (por ejemplo de _CentOS_).

 - Buscar e instalar una imagen que incluya _MongoDB_.

###Pasos realizados para la resolución del ejercicio:

1. De ser necesario, activar el servicio de _Docker_

 `service docker start`

2. Para instalar una imagen _Docker_ de _Ubuntu_ (oficial), se ejecuta

 `docker pull ubuntu`
 
3. Para instalar una imagen _Docker_ de _CentOS_ (oficial), se utiliza el comando

 `docker pull centos`
 
3. Para instalar una imagen _Docker_ con _MongoDB_ (oficial), se ejecuta

 `docker pull mongo`
 
4. Para validar la instalación de las imagenes, se puede utilizar el comando

 `docker images`