#Ejercicio 3

 - Crear y ejecutar un contenedor basado en _Debian_.

 - Crear y ejecutar un contenedor basado en otra distribución, tal como _Fedora_. En general, crear un contenedor basado en la distribución de uso habitual y otro basado en alguna adicional que no sea nativa en la máquina principal.

###Pasos realizados para la resolución del ejercicio:

1. Creación de un contenedor con _lxc_ basado en la distribución nativa de la máquina principal (_Ubuntu_)

 `lxc-create -t ubuntu -n <nombre_contenedor_1>`

2. Creación de un contenedor con _lxc_ basado en una distribución adicional diferente a la instalada en la máquina principal (en este caso, _CentOS_)

 - Instalar gestor de paquetes propio de _CentOS_
 
  `apt-get install yum`
  
 - Crear contenedor basado en _CentOS_
 
  `lxc-create -t centos -n <nombre_contenedor_2>`
  
   Las credenciales para conectarse inicialmente al nuevo contenedor _CentOS_ aparecen al final de la ejecución del comando _lxc-create_

