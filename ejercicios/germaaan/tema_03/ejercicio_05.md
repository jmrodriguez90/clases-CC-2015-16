# Ejercicio 5
## Comparar las prestaciones de un servidor web en una jaula y el mismo servidor en un contenedor. Usar nginx.
Para hacer esta comparación vamos a crear tanto una jaula como un contenedor que contengan la misma versión de Ubuntu 15.10 (Wily) 64 bits.

Creamos la jaula, instalando los paquetes necesarios e introduciendo la configuración necesaria:

```
sudo apt-get install debootstrap schroot

echo -e "[ubuntujaula]\ndescription=Ubuntu 15.10 Wily amd64\ndirectory=/srv/chroot/ubuntujaula\npersonality=linux\nroot-users=germaaan\n#run-setup-scripts=true\n#run-exec-scripts=true\ntype=directory\nusers=germaaan" | sudo tee /etc/schroot/chroot.d/ubuntujaula

sudo mkdir -p /srv/chroot/ubuntujaula
sudo debootstrap --variant=buildd --arch amd64 wily /srv/chroot/ubuntujaula http://archive.ubuntu.com/ubuntu
```

Y también creamos el contenedor:

```
sudo lxc-create -n ubuntucontenedor -t ubuntu -- -r wily
```

Ya solo nos queda acceder tanto a la jaula como al contenedor e instalar un servidor web en su interior, concretamente vamos a usar **nginx** con la configuración por defecto.

```
# Acceso a la jaula
schroot -c ubuntujaula -u root

# Acceso al contenedor
sudo lxc-start -n ubuntucontenedor

# Instalación del servidor web en ambas
(sudo) apt-get install nginx
```

Una vez instalado, comprobamos en ambos que **nginx** está funcionando; en el contenedor además es conveniente ejecutar `ìfconfig eth0` para conocer la dirección a la que deberemos acceder, ya que en el caso de la jaula la dirección es el propio host local.
- Servidor en la jaula:
![https://dl.dropboxusercontent.com/s/v11d3j81jzsiguk/eje05_img01.png](https://dl.dropboxusercontent.com/s/v11d3j81jzsiguk/eje05_img01.png)
- Servidor en el contenedor:
![https://dl.dropboxusercontent.com/s/31l7sksp0fkj4z4/eje05_img02.png](https://dl.dropboxusercontent.com/s/31l7sksp0fkj4z4/eje05_img02.png)

Comprobamos que ciertamente tenemos acceso a ambos servidores y estos funcionan correctamente:
- Servidor en la jaula:
![https://dl.dropboxusercontent.com/s/vadjozn1zbuk798/eje05_img03.png](https://dl.dropboxusercontent.com/s/vadjozn1zbuk798/eje05_img03.png)
- Servidor en el contenedor:
![https://dl.dropboxusercontent.com/s/34fn3b43mqtzk45/eje05_img04.png](https://dl.dropboxusercontent.com/s/34fn3b43mqtzk45/eje05_img04.png)

Con ambos servidores funcionan correctamente, vamos a medir las prestaciones de los mismos. Para realizar la medición vamos a usar la aplicación **ab** (_Apache Benchmark_), una utilidad muy sencilla que nos permite hacer pruebas de carga a cualquier tipo de servidor web.

```
sudo apt-get install apache2-utils
```

Para usarlo hay que indicar un número de conexiones a realizar y la concurrencia con la que se realizarán las mismas, para que los resultados sean más fiables vamos a realizar el test a cada servidor unas 10 veces, con número de conexiones que será 1000000 y una concurrencia que será 10.

```
ab -n 1000000 -c 10 http://DIRECCION_IP/
```

Una vez tengamos los resultados nos fijaremos en las siguientes variables:
- Tiempo de ejecución
- Solicitudes por segundo
- Velocidad de transferencia

           |                      | nginx (jaula)           |                                |                      | nginx (contenedor)      |
:--------: | :------------------: | :---------------------: | :----------------------------: | :------------------: | :---------------------: | :----------------------------:
           | Tiempo ejecución (s) | Solicitudes por segundo | Velocidad transferencia (KB/s) | Tiempo ejecución (s) | Solicitudes por segundo | Velocidad transferencia (KB/s)
Prueba 1   | 35,095               | 28.494,370              | 23.736,030                     | 42,753               | 23.390,100              | 19.484,140
Prueba 2   | 34,350               | 29.111,720              | 24.250,290                     | 42,411               | 23.578,810              | 19.641,330
Prueba 3   | 34,099               | 29.326,790              | 24.429,440                     | 43,862               | 22.799,020              | 18.991,760
Prueba 4   | 33,751               | 29.628,410              | 24.680,700                     | 43,000               | 23.255,850              | 19.372,300
Prueba 5   | 35,210               | 28.401,290              | 23.658,500                     | 42,247               | 23.670,210              | 19.717,470
Prueba 6   | 34,558               | 28.936,650              | 24.104,450                     | 45,774               | 21.846,570              | 18.198,370
Prueba 7   | 34,375               | 29.090,510              | 24.232,620                     | 49,055               | 20.385,430              | 16.981,220
Prueba 8   | 35,224               | 28.389,450              | 23.648,640                     | 46,894               | 21.324,640              | 17.763,590
Prueba 9   | 35,884               | 27.867,290              | 23.213,670                     | 44,357               | 22.544,450              | 18.779,700
Prueba 10  | 34,832               | 28.709,200              | 23.914,990                     | 44,614               | 22.414,740              | 18.671,650
           |                      |                         |                                |                      |                         |
Media      | 34,738               | 28.795,568              | 23.986,933                     | 44,497               | 22.520,982              | 18.760,153
Desviación | 0,633                | 523,125                 | 435,766                        | 2,193                | 1.068,276               | 889,882

Viendo los resultados, en general el servidor web instalado en la jaula tiene un rendimiento superior; más concretamente, fijándonos en el tiemp de ejecución (que es la variable con una menor desviación) vemos que el tiempo de ejecución promedio del servidor de la jaula es de casi un 22% menor que el mismo tiempo para el contenedor.

Posiblemente el factor principal que hace que se obtenga este resultado, es que la jaula está directamente "conectada" a la misma interfaz de red que el sistema anfitrión, mientras que el contenedor se conecta a través de una interfaz virtual para comunicarse internamente, lo que esté provocando este retardo cuando se producen las solicitudes de conexión al servidor.
