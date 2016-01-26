Ejercicio 1
===========

___Instalar alguno de los entornos virtuales de node.js y, con ellos, instalar la última versión existente,
la versión minor más actual de la 0.12 y lo mismo para la 0.11 o alguna impar.
Si no se usa habitualmente este lenguaje, hacer lo mismo con cualquier otro lenguaje de scripting.___

Se va a usar Python para este ejercicio, y se instala con brew (Todas las instrucciones serán para equipos con sistema operativo OS X).
Pero primero se necesita instalar Hombrew para poder instalar Python:


```
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
Después de la instalación se necesita insertar el directorio Homebrew al principio de la variable de entorno **PATH**.
Se hace añadiendo la siguiente linea al final del archivo <b>~/.profile</b>
```
export PATH=/usr/local/bin:/usr/local/sbin:$PATH
```
Ahora, se procede a instalar Python con:
```
$ brew install python
```
Una vez tenemos nuestro lenguaje script installado, procedemos a instalar el entorno virtual. En este caso es **virtualenv**.

```
$ pip install virtualenv
```

La instalación del entorno virtual se completa con este último comando.
