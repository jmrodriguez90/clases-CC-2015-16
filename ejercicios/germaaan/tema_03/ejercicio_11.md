# Ejercicio
## Crear a partir del contenedor anterior una imagen persistente con commit.
Para crear una imagen persistente a partir de un contenedor necesitaremos mínimo conocer su ID largo, para eso añadimos al comando de lista los contenedores de Docker la opción `-notrunc`. Con este ID además podemos **"inspeccionar"** (opción `inspect`) dichos contenedores para obtener diversa información, como el nombre del host, la imagen cargada, si el contenedor está en funcionaniento o la dirección IP.

```
docker ps -notrunc
docker inspect CONTAINER_ID
```

![https://dl.dropboxusercontent.com/s/51c5awy9qz3wtgb/eje11_img01.png](https://dl.dropboxusercontent.com/s/51c5awy9qz3wtgb/eje11_img01.png)

Así que simplemente usando la opción **commit**, el ID largo de nuestro contenedor y una etiqueta que usaremos para identificarlo, crearemos una imagen persistente con el estado actual de nuestro contenedor. La imagen aparecerá con el nombre de etiqueta que le hayamos dado en el listado con el resto de imágenes.

```
docker commit CONTAINER_ID nginx
docker images
```

![https://dl.dropboxusercontent.com/s/ga5k8cbojy30bpy/eje11_img02.png](https://dl.dropboxusercontent.com/s/ga5k8cbojy30bpy/eje11_img02.png)

Tener una imagen mínima de un sistema operativo con un servidor como **nginx** instalado es interesante, porque con pocos recursos podemos tener un servidor que podemos arrancar independientemente en cualquier momento, simplemente deberemos conocer su dirección IP.

![https://dl.dropboxusercontent.com/s/m6d0ox631jnqgx8/eje11_img03.png](https://dl.dropboxusercontent.com/s/m6d0ox631jnqgx8/eje11_img03.png)

Y podremos acceder desde cualquier navegador que tenga acceso a esa dirección IP.

![https://dl.dropboxusercontent.com/s/5o69v6rajan1uj8/eje11_img04.png](https://dl.dropboxusercontent.com/s/5o69v6rajan1uj8/eje11_img04.png)
