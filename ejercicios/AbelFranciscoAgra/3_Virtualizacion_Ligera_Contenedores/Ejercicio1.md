#Ejercicio 1

Instalar _LXC_ en alguna versión de _Linux_ (preferiblemente alguna igual o mayor a la _1.0_).

###Pasos realizados para la resolución del ejercicio:

**Nota:** Instalación realizada en _Ubuntu 14.04 - 64 Bits_

1. Utilizar el gestor e instalador de paquetes de _Ubuntu_ para instalar _lxc_

 `apt-get install lxc`
 
 Con esto, se instala la última versión de _lxc_ existente en los repositorios oficiales de _Ubuntu_ (incluyendo las dependencias a otros componentes y librerías correspondientes)
 
2. Para validar la versión de _lxc_ instalada, se utiliza el comando

 `lxc-info --version`
 
 El comando anterior indica que la versión instalada es la _1.0.8_