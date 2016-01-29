#Ejercicio 8

Instalar _Docker_

###Pasos realizados para la resolución del ejercicio:

**Nota:** la instalación fue realizada en _Ubuntu 14.04_

**Nota 2:** puede ser necesario realizar algunos pasos previos o pre-requisitos antes de instalar _Docker_. Estos pre-requisitos pueden identificarse en el sitio _web_ oficial de _Docker_, en la sección de "Instalación en _Ubuntu_".

1. Actualizar los índices del gestor/instalador de componentes de _Ubuntu_

 `apt-get update`
 
2. Instalar _Docker_

 `apt-get install docker-engine`
 
3. Iniciar el servicio de _Docker_

 `service docker start`
 
4. Para validar la instalación y activación del servicio, se puede ejecutar el comando

 `docker run hello-world`