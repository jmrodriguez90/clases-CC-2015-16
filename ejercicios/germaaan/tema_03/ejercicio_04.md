# Ejercicio 4
## 1. Instalar `lxc-webpanel` y usarlo para arrancar, parar y visualizar las máquinas virtuales que se tengan instaladas.
Para instalar `lxc-webpanel` nos basta con introducir la siguiente línea:

```
wget https://lxc-webpanel.github.io/tools/install.sh -O - | sudo bash
```
![https://dl.dropboxusercontent.com/s/9sm5uey9rbcdbrc/eje04_img01.png](https://dl.dropboxusercontent.com/s/9sm5uey9rbcdbrc/eje04_img01.png)

Una vez descargado e instalado solo tendremos que acceder a la dirección [http://localhost:5000/](http://localhost:5000/) con el nombre de usuario y contraseña **admin**.

![https://dl.dropboxusercontent.com/s/pdp26x2dai1jswo/eje04_img02.png](https://dl.dropboxusercontent.com/s/pdp26x2dai1jswo/eje04_img02.png)

## 2. Desde el panel restringir los recursos que pueden usar: CPU shares, CPUs que se pueden usar (en sistemas multinúcleo) o cantidad de memoria.
Para restringir los recursos de un contenedor simplemente tenemos que seleccionarlo del panel de la izquierda y desplazarnos hasta la sección correspondiente. Por ejemplo vamos a hacer las siguientes restricciones en el contenedor en el que hemos instalado Debian anteriormente:
- **Límite de memoria (_memory limit_)**: 2048 MB
- **Límite de memoria + espacio de intercambio (_memoria + swap limit_)**: 4096 MB
- **Número de CPUs a su disposición (_CPUs_)**: 1
- **Porcentaje relativo de tiempo de CPU disponible para las tareas en un cgroup (_CPU Shares_)**: 50

![https://dl.dropboxusercontent.com/s/ysg4ub3q3a9z803/eje04_img03.png](https://dl.dropboxusercontent.com/s/ysg4ub3q3a9z803/eje04_img03.png)
