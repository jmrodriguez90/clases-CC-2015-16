#Ejercicio 6

 - Instalar _juju_.

 - Utilizando _juju_, instalar _MySQL_ en un táper.

###Pasos realizados para la resolución del ejercicio:

1. Para instalar _juju_ (y sus dependencias correspondientes), se utiliza el comando

 `apt-get install juju`
 
2. Inicializar y definir la configuración inicial de los entornos con los que puede trabajar _juju_

 `juju init`
 
3. Editar el archivo `~/.juju/environments.yaml`, sustituyendo la línea `default: amazon` por `default: local`

4. De ser necesario, instalar _MongoDB_, con el comando

 `apt-get install mongodb-server`
 
5. Instalar el componente para el manejo local de contenedores locales de _juju_

 `apt-get install juju-local`
 
6. Inicializar ambiente de virtualización local con _juju_, utilizando la configuración definida por defecto

 `juju bootstrap`
 
7. Añadir el servicio _MySQL_ (utilizando _charms_ o _encantos_) a un nuevo _táper_

 `juju deploy mysql`
 
8. Para validar que se ha instalado y desplegado _MySQL_ en el _táper_ correspondiente, se puede utilizar el comando

 `juju status`