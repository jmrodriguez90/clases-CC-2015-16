#Ejercicio 7

Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un _PaaS_, el que se haya elegido. 
 
###Pasos realizados para la resolución del ejercicio:

1. Incluir un _script_ para ser ejecutado luego de instalar las dependencias de la aplicación (_postinstall_ en _package.json_). Este script permite crear el archivo de base de datos de _sqlite3_ e inicializarlo con el esquema correspondiente.

 El archivo de configuración con los comandos de carga de base de datos se puede acceder desde [aquí](https://github.com/jfrancisco4490/calificacionEmpresa_2/blob/master/config/config_bd.sh).
 
 El cambio en la configuración se encuentra especificado en el archivo [_package.json_](https://github.com/jfrancisco4490/calificacionEmpresa_2/blob/master/package.json).
 
2. Agregar al repositorio del proyecto el directorio _bin_, en el cual se encuentra el archivo que configura la publicación y accesos al servicio _web_ (puerto, variables de entorno, etc.).

 El archivo anterior puede accederse desde [aquí](https://github.com/jfrancisco4490/calificacionEmpresa_2/blob/master/bin/www).

3. Actualizar el contenido del repositorio (_push_), lo cual activa la integración continua en _Snap CI_ y permite desplegar la aplicación en _Heroku_ de forma automática.