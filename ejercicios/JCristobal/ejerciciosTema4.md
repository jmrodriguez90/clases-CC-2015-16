**José Cristóbal López Zafra - Ejercicios del [tema 4](https://dl.dropboxusercontent.com/u/4144051/cc_t4_t5.html)**

##**Virtualización: [QEMU](http://es.slideshare.net/pacvslideshare/cloud-computing-virtualizacin-qemu)**

###Instalar QEMU

Instalamos ejecutando `sudo apt-get install qemu-kvm qemu virt-manager virt-viewer libvirt-bin`

[descarga completa](http://i.imgur.com/VeFNT0P.png)

###Bajar una distribución de Linux

Nos la podemos bajar con `wget` o usar una ya descargada.

###Crear un disco virtualizado para QEMU

Lo creamos ejecutando `qemu-img create -f qcow2 debian-prueba.img 7G`

[Disco virtualizado](http://i.imgur.com/ffsEFgK.png)

###Instalar Linux en dicho disco

Lo instalaremos usando la distribución de Debian, ejecutando `qemu-system-x86_64 -hda qemu/debian-prueba.img -boot d -cdrom isos/debian-8.2.0-amd64-netinst.iso -m 640`

![captura del inicio de la instalación](http://i.imgur.com/wbyDIyn.png)

###Ejecutar la máquina instalada para interaccionar con ella con su interfaz gráfica

La ejecutamos mediante `qemu-system-x86_64 -hda qemu/debian-prueba.img`

[Interfaz gráfica de la máquina](https://i.gyazo.com/10937bc5dc5b1d79bd2483da2c1c966c.png)


###Ejecutar la máquina instalada sin interfaz gráfica, y entrar usando el cliente VNC

La arrancamos con `sudo qemu-system-x86_64 -hda qemu/debian-prueba.img -vnc :1` y nos conectamos a ella mediante  `vncviewer 192.168.122.1:5901`

[Cliente VNC](http://i.imgur.com/P3a9JAE.png)

###Instalar apache2 o nginx y probar que sirve páginas web (acceder desde el host a la IP del servidor virtualizado, bien con URL o con su navegador)

Vemos Apache arrancado, con un navegador en el anfitrión de la web servida.

[Apache arrancado](http://i.imgur.com/RQZv9ge.png)


##**Virtualización: [Azure](http://es.slideshare.net/pacvslideshare/cloud-computing-virtualizacin-azure)**
(pendiente de código de promoción)
###Crear una máquina virtual Azure
###Instalar la herramienta para trabajar desde línea de comandos para su dispositivo operativo
###Obtener la lista de máquinas
###Ejecutar nuestra máquina desde CLI
###Apagar nuestra máquina desde CLI



##**Virtualización: [IBM Bluemix](http://es.slideshare.net/pacvslideshare/cloud-computing-virtualizacin-ibm-bluemix)** 

###Crear una cuenta de Bluemix

Para ello sencillamente me registro en [su web](https://console.ng.bluemix.net/) y ya tengo acceso a la consola de Bluemix:

![consola de bluemix](http://i.imgur.com/EIsQRrf.png)


###Desplegar una web sencilla (en mi caso en python)

Elijo la opción de "Crear App" y escojo Python como lenguaje. Se creará una aplicación básica:

![primera web desplegada](http://i.imgur.com/wUZXw4K.png)

###Modifica y actualiza la aplicación

Me descargo y uso la Interfaz de linea de comandos. Actualizo mi aplicación con la de la asignatura y la subo con `./cf push python-jcristobal` (usando la versión binaria descargada) 

![subiendo app](http://i.imgur.com/Nkw5lnm.png)


Web accesible en: http://python-jcristobal.eu-gb.mybluemix.net/


Y aquí se puede ver desplegada: [captura de la web desplegada](http://i.imgur.com/ceFiXpr.png)

###Monitorízala durante el tiempo que está en ejecución

Y en la consola de Bluemix se puede ver información de la aplicación: recursos, registro de actividad u opciones.

![consola](http://i.imgur.com/EdqNXnr.png)

También se pueden ver algunos datos más detalladamente:

![pestaña de registros](http://i.imgur.com/kiK8c0v.png)


