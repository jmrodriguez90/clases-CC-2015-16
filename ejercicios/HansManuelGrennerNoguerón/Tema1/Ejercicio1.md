##Ejercicio 1

**Instalar alguno de los entornos virtuales de node.js y, con ellos, instalar la última versión existente, la versión minor más actual de la 0.12 y lo mismo para la 0.11 o alguna impar. Si no se usa habitualmente este lenguaje, hacer lo mismo con cualquier otro lenguaje de scripting**

Instalamos alguna de las herramientas disponibles tal como [nodeenv](https://pypi.python.org/pypi/nodeenv).

Eligimos a continuación el proceso de instalación :

* Usando la herramienta **easy_install** de Python ```sudo easy_install nodeenv```
* Mediante el gestor de paquetes de Python **pip* ```sudo pip install nodeenv```

![Ejercicio1_1](https://i.gyazo.com/7f7ab854c757e244cb604897b589cc42.png)
> Figura 1. Comprobando la versión de nodeenv instalada

A continuación podemos instalar las diferentes versiones de **node.js**, comprobamos usando ```nodeenv --list``` las versiones disponibles y mediante ```nodeenv --node=[VERSION] [DEST_DIR]``` procedemos a instalar.
