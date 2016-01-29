#Ejercicio 1

Instalación del entorno nodeenv para node.js

###Pasos realizados

Para la instalación del entorno nodeenv primero devemos instalar phyton en nuestra máquina virtual o en nuestra versión de linux.

Para ello utilizamos comando sudo apt-get install python o tambien usando el comando sudo aptitude install python.

Una vez llevada a cabo esta instalación accedemos a https://virtualenv.pypa.io/en/latest/  donde tenemos una guia de como instalar virtualenv necesaria, de nos ser que ya dispongamos de ella.

Instalamos virtualenv usando: sudo pip install virtualenv 
el comando pip es proveido por el lenguaje phyton por lo que es necesario tenerlo previamente instalado.

hecho esto podemos pasar a la instalación de nodeenv, para ello necesitamos del comando easy_intall que podemos obtener desde:https://pypi.python.org/pypi/setuptools

O mediante el comando:  wget https://bootstrap.pypa.io/ez_setup.py -O - | python

Una vez finalizada esta instalación se puede instalar nodeenv mediante:

	sudo easy_install nodeenv 
	sudo pip install nodeenv

Ambos comandos son correctos.

Ahora siguiendo el guión proporcionado por https://pypi.python.org/pypi/nodeenv/ ejecutamos:

$ virtualenv env
$ . env/bin/activate
(env) $ pip install nodeenv

si todo ha sido correcto cuando llevemos a cabo el comando nodeenv --version obtendremos la version actual.

ahora queda instalar node para ello llevamos a cabo lo siguiente:

sudo apt-get update
sudo apt-get install build-essential libssl-dev

hecho esto pasamos a obtener nvm desde el repositorio siguiente:
curl https://raw.githubusercontent.com/creationix/nvm/v0.11.1/install.sh | bash

ahora deberiamos reiniciar nuestra máquina o introducir el comando source ~/.profile

tras terminar este paso ejecutamos
nvm ls-remote 
esto nos muestra una lista de las versiones disponibles en mi caso he elegido la 0.10.13

nvm install 0.10.13

tras la instalación usando node --version o node -v podremos ver nuestra versión.