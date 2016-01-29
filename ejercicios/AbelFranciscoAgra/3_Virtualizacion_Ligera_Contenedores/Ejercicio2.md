#Ejercicio 2

Comprobar qué interfaces puente se han creado con el contenedor y explicarlas.

###Pasos realizados para la resolución del ejercicio:

1. Se verifica que la máquina principal (_host_) en que se ha instalado _lxc_ es compatible con la tecnología de virtualización ligera mediante contenedores, utilizando el comando

 `lxc-checkconfig`
 
 Este comando indica que la compatibilidad de la máquina y la tecnología es adecuada, ya que todas las verificaciones presentadas en pantalla (llamadas capacidades) muestran la etiqueta _enabled_
 
2. Creación de un contenedor con _lxc_

 `lxc-create -t <distribucion_contendor> -n <nombre_contenedor>`
 
 Donde _distribucion_contenedor_ es el identificador de la versión del sistema operativo a instalar en el nuevo contenedor _lxc_, por ejemplo, _ubuntu_.
 
 La ejecución de este comando permite descargar, extraer, instalar y configurar todos los paquetes necesarios para una instalación mínima del sistema operativo indicado.
 
3. Iniciar el contendor creado y conectarse al mismo, utilizando el comando

 `lxc-start -n <nombre_contenedor>`
 
 Las credenciales para conectarse inicialmente al nuevo contenedor aparecen al final de la ejecución del comando _lxc-create_
 
4. Para comprobar las interfaces puente de la nueva máquina virtual, ejecutamos el comando _ifconfig_ (en la máquina principal _host_), teniendo como resultado dos interfaces puente nuevas:

 - **_lxcbr0:_** Indica la activación e inicio del nuevo contenedor _lxc_ (virtualizada) y su conexión a la máquina principal (_host_)
 - **_veth-*:_** Que representa la conexión de red "virtual" del contenedor