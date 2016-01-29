**José Cristóbal López Zafra - Ejercicios del [tema 3](http://jj.github.io/CC/documentos/temas/Contenedores)**

##Ejercicio1
###Instala LXC en tu versión de Linux favorita. Normalmente la versión en desarrollo, disponible tanto en GitHub como en el sitio web está bastante más avanzada; para evitar problemas sobre todo con las herramientas que vamos a ver más adelante, conviene que te instales la última versión y si es posible una igual o mayor a la 1.0

Podemos instalarlo con `sudo apt-get install lxc`, pero no nos aseguramos que sea la última versión.

Para asegurarnos que sí es la última versión: primero nos la descargamos de Github: `git clone https://github.com/lxc/lxc`

y en el directorio recién creado de LXC ejecutamos `./autogen.sh && ./configure && make && sudo make install`

Puede dar problemas si no tenemos instalado *autoconf*, que instalamos con `sudo apt-get install autoconf`

Por último comprobamos si está preparado para usar este tipo de tecnología y también si se ha configurado correctamente con `lxc-checkconfig`:

[resultado de lxc-checkconfig](https://i.gyazo.com/2aa012ee5742ea2a98844cc5a42efacb.png)


##Ejercicio2
###Comprobar qué interfaces puente se han creado y explicarlos.

*Ya que en mi sistema operativo Ubuntu 14.04 daba muchos problemas, realizo éstas actividades dentro de un máquina virtual con Debian*

[Salida con `lxc-checkconfig`](http://i.imgur.com/SVOvw9o.png)

Creo el [contenedor Ubuntu](http://i.imgur.com/7qnGvBp.png) especificando distribución, versión y arquitectura con `lxc-create -t download -n caja1 -- -d ubuntu -r trusty -a amd64`
(además tengo que conectarme y crear un usuario en el contenedor con lxc-attach)

Dentro del contenedor ejecutamos `ifconfig -a` para ver sus interfaces de red

![interfaces red contenedor](http://i.imgur.com/f3aK9oN.png)


Y fuera, con `brctl show` y el contenedor parado (`lxc-stop -n caja1`) vemos que no tiene ningun "puente", aunque según los apuntes deberíamos haber encontrado lxcbr0.

[Mostramos los puentes](http://i.imgur.com/VTUNU2e.png)

Podemos crear (`brctl addbr interfazCable`) y asignar(`brctl addif interfazCable eth0`) una nueva interfaz a la red cableada: 

[creando nueva interfaz cableada](http://i.imgur.com/z005i6V.png)


##Ejercicio3
####Crear y ejecutar un contenedor basado en Debian.

Creamos con `lxc-create -n debian -t debian -- -r jessie` y ejecutamos  `lxc-start -n debian`:

![contenedor debian](http://i.imgur.com/7CBpcgf.png)

####Crear y ejecutar un contenedor basado en otra distribución, tal como Fedora. Nota En general, crear un contenedor basado en tu distribución y otro basado en otra que no sea la tuya. Fedora, al parecer, tiene problemas si estás en Ubuntu 13.04 o superior, así que en tal caso usa cualquier otra distro. Por ejemplo, [Óscar Zafra ha logrado instalar Gentoo usando un script descargado desde su sitio, como indica en este comentario en el issue.](https://github.com/IV-GII/GII-2013/issues/87#issuecomment-28639976)

Usamos el script del comentario del issue de Óscar Zafra para Gentoo: nos lo descargamos y lo metememos en /usr/share/lxc/templates/:

`sudo wget -P /usr/share/lxc/templates/ https://raw.github.com/globalcitizen/lxc-gentoo/master/lxc-gentoo`

(como ya hay un lxc-gentoo se crea en lxc-gentoo.1)

Le damos permisos `chmod +x /usr/share/lxc/templates/lxc-gentoo.1`

Y creamos el contenedor: `/usr/share/lxc/templates/lxc-gentoo.1 create`

Por consola nos dará a elegir opciones sobre el contenedor.

Una vez creado accedo a el con `lxc-start -f gentoo1.conf -n gentoo1`


![contenedor gentoo](http://i.imgur.com/cCTjZIj.png)


##Ejercicio4
####Instalar lxc-webpanel y usarlo para arrancar, parar y visualizar las máquinas virtuales que se tengan instaladas.

Para instalarlo ejecutamos `wget http://lxc-webpanel.github.io/tools/install.sh -O - | bash`. Una vez [instalado](http://i.imgur.com/JaNpX1j.png) podemos acceder a lxc-webpanel desde http://localhost:5000

![Inicio de lxc-webpanel](http://i.imgur.com/y3uYqMI.png)

Para [arrancar](http://i.imgur.com/3KlESRO.png) o parar podemos acerlo desde la página de inicio o [dentro del apartado](http://i.imgur.com/7scdoPt.png) de cada máquina virtual.


####Desde el panel restringir los recursos que pueden usar: CPU shares, CPUs que se pueden usar (en sistemas multinúcleo) o cantidad de memoria.

Para restringuir o cambiar los recursos de cada máquina, accedemos a su propio apartado y modificamos los recursos que queramos, en mi caso la memoria límite:

![memoria límite cambiada](http://i.imgur.com/FR16uyY.png)



##Ejercicio6
###Instalar juju.

Lo instalamos ejecutando `sudo apt-get install juju-local`

###Usándolo, instalar MySQL en un táper.

Lo iniciamos con `juju init`. Se crea el fichero "environments.yaml": dentro cambiamos la línea `default: amazon` por `default: local`.

Cambiamos a entorno local con `juju switch local`.

Creamos un contenedor con `juju bootstrap` y para instalar MySQL ejecutamos `juju deploy mysql`.


##Ejercicio7
###Destruir toda la configuración creada anteriormente

Destruimos toda la configuración ejecutando `juju destroy-environment local`

###Volver a crear la máquina anterior y añadirle mediawiki y una relación entre ellos.

Creamos con `juju bootstrap` e instalamos MySQL `juju deploy mysql`. Añadimos mediawiki con `juju deploy mediawiki` y la relación con `juju add-relation mediawiki:db mysql`. Para acabar exponemos el servicio `juju expose mediawiki`. 

###Crear un script en shell para reproducir la configuración usada en las máquinas que hagan falta.

```
#!/bin/bash
# Script para crear taper con juju y añadirle mediawiki

juju init

sed -i 's/default: amazon/default: local/g' ~/.juju/environments.yaml

juju switch local

juju bootstrap

juju deploy mysql

juju deploy mediawiki

juju add-relation mediawiki:db mysql

juju expose mediawiki
```

##Ejercicio8
###Instalar docker.

Instalamos ejecutando `sudo apt-get install docker.io`

Y creamos un enlace a docker.io para poder usar simplemente docker como comando `sudo ln -sf /usr/bin/docker.io /usr/local/bin/docker`

##Ejercicio11
###Crear a partir del contenedor anterior una imagen persistente con commit.

[commit](https://i.gyazo.com/632055da2613fa0ad79d1b4eea0a8ae3.png)

[push](https://i.gyazo.com/1de41e768524c9bf62a2987eb2b289f8.png)

![imagen descargada](https://i.gyazo.com/bdbc799abe477c99ae3a1d1c4d35dcf6.png)





