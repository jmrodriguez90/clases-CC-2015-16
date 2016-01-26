## Ejercicio 1

#### Instalar alguno de los entornos virtuales de `node.js` y, con ellos, instalar la última versión existente, la versión *minor* más actual de la 0.12 y lo mismo para la 0.11 o alguna impar. Si no se usa habitualmente este lenguaje, hacer lo mismo con cualquier otro lenguaje de scripting.

He decidido instalar el entorno virtual **[n](https://github.com/tj/n)**:

```
git clone git@github.com:tj/n.git
cd n
sudo make install
```

![eje01_img01](https://dl.dropboxusercontent.com/s/3mds5llxau44v7i/eje01_img01.png)

Una vez instalado, podemos ver las versiones de **Node.js** que podemos instalar.

```
sudo n ls
```

En nuestro caso, queremos instalar las versiones *0.11.16* y *0.12.7*.

```
sudo n 0.11.16
sudo n 0.12.7
```

![eje01_img02](https://dl.dropboxusercontent.com/s/ep55o3mgh1s93k6/eje01_img02.png)
