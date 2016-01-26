#Ejercicio 1

Instalar alguno de los entornos virtuales de _node.js_ y, con ellos, instalar la última versión existente, la versión _minor_ más actual de la _0.12_ y lo mismo para la _0.11_ o alguna impar. Si no se usa habitualmente este lenguaje, hacer lo mismo con cualquier otro lenguaje de _scripting_.

###Pasos realizados para la resolución del ejercicio:

1. Instalación de la herramienta _nodeenv_, utilizando el módulo de _python_ denominado _easy install_:

 `sudo easy_install nodeenv`

2. Despliegue de lista con posibles versiones de _node.js_ que se pueden utilizar en ambientes de _nodeenv_, utilizando el comando:

 `nodeenv --list`

 Al obtener la lista de versiones disponibles de _node.js_, se puede notar que la última versión existente es la **_4.1.2_**, la versión _minor_ más actual de la _0.12_ es la **_0.12.7_**, y para la _0.11_ es la **_0.11.16_**. Por tanto, esas tres versiones serán las que instalaremos para el presente ejercicio.

3. Instalación de ambiente en _nodeenv_ con versión _4.1.2_ de _node.js_, utilizando el comando:

 `nodeenv --node=4.1.2 --jobs=4 env-4.1.2`

 donde _node_ se refiere a la versión de _node.js_ que se instalará en el ambiente, _jobs_ indica que se utilizarán cuatro (4) comandos paralelos para compilación, y _env-4.1.2_ es el nombre del nuevo ambiente a crear.

 Se obtiene el siguiente resultado:

 `* Install node (4.1.2)... done.`

4. Instalación de ambiente en _nodeenv_ con versión _0.12.7_ de _node.js_, utilizando el comando:

 `nodeenv --node=0.12.7 --jobs=4 env-0.12.7`

 Se obtiene el siguiente resultado:

 `* Install node (0.12.7)... done.`

5. Instalación de ambiente en _nodeenv_ con versión _0.11.16_ de _node.js_, utilizando el comando:

 `nodeenv --node=0.11.16 --jobs=4 env-0.11.16`

 Se obtiene el siguiente resultado:

 `* Install node (0.11.16)... done.`