#Ejercicio 7

 - Crear una máquina virtual (utilizando _juju_), añadirle _mediawiki_ y la relación correspondiente.
 
 - Crear un _script_ en _shell_ para reproducir la configuración definida en las máquinas que hagan falta.

###Pasos realizados para la resolución del ejercicio:

1. Eliminar la unidad de servicio de _MySQL_ definida en el ejercicio anterior

 `juju destroy-unit <nombre_unidad_mysql>`
 
 Donde `<nombre_unidad_mysql>` puede determinarse al utilizar el comando `juju status`
 
2. Eliminar la máquina virtual (_táper_) definida en el ejercicio anterior

 `juju destroy-machine <numero_maquina_virtual>`
 
 Donde `<numero_maquina_virtual>` puede conocerse al utilizar el comando `juju status` (la máquina identificada como cero "0" no debe eliminarse, ya que representa a la máquina anfitriona o _host_)
 
3. Crear una nueva máquina virtual (o _táper_) utilizando _juju_

 `juju add-machine`
 
 La máquina creada debe tener un número correlativo igual al número de la máquina eliminada en el paso anterior más uno (1).
 
4. De ser necesario, instalar y añadir el servicio de _MySQL_ (utilizando _charms_ o _encantos_)

 `juju deploy mysql`
 
5. Instalar y añadir el servicio de _MediaWiki_ (utilizando _charms_ o _encantos_)

 `juju deploy mediawiki`
 
6. Para representar la dependencia que existe entre los servicios instalados anteriormente, es decir, indicar que el servicio de _MediaWiki_ requiere _MySQL_ como manejador de base de datos para funcionar, es necesario definir una asociación entre estos

 `juju add-relation mediawiki:db mysql`

7. Exponer el servicio de _MediaWiki_ para que pueda ser accedido

 `juju expose mediawiki`

8. Para validar la creación y configuración de servicios, se puede utilizar el comando

 `juju status`