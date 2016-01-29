#Ejercicio 4

 - Instalar _lxc-webpanel_ y usarlo para iniciar, detener y visualizar las máquinas virtuales que se tengan instaladas.

 - Desde el panel restringir los recursos que pueden usar: _CPU shares_, _CPUs_ que se pueden usar (en sistemas multinúcleo) o cantidad de memoria.

###Pasos realizados para la resolución del ejercicio:

**_Nota:_** _LXC-WebPanel_ funciona en versiones de _Ubuntu 12.04_ o superiores y, _LXC 0.7_ a _0.9_

1. Ejecutar el siguiente comando para descargar e instalar los componentes de `lxc-webpanel`

 `wget https://lxc-webpanel.github.io/tools/install.sh -O - | bash`
 
2. Para acceder a la interfaz _web_, se utiliza la _URL_

 `http://<direccion_ip_servidor>:5000/`
 
3. Al acceder a la interfaz _web_, se observan listados los contenedores que han sido creados utilizando _lxc_, los cuales pueden detenerse, congelarse (_frozen_) o iniciarse.

4. También, se puede restringir el acceso de cada contenedor a los recursos originales de la máquina principal (_host_): Memoria _RAM_, cantidad de _CPU´s_ compartidos y capacidad de cada uno, etc