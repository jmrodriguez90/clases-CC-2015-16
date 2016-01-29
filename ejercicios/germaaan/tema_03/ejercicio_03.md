# Ejercicio
## 1. Crear y ejecutar un contenedor basado en Debian.
Para crear contenedores se usa `lxc-create`, en este caso vamos a crear un contenedor con un sistema **Debian** en su interior (`-t debian`) que además tengo la versión _Jessie_ por ser la primera versión LTS que se publica de esta distribución (`-- -r jessie`).

```
sudo lxc-create -n debiancaja -t debian -- -r jessie
```

![https://dl.dropboxusercontent.com/s/d5ejujaw30rdz6e/eje03_img01.png](https://dl.dropboxusercontent.com/s/d5ejujaw30rdz6e/eje03_img01.png)

## 2. Crear y ejecutar un contenedor basado en otra distribución, tal como Fedora. Nota En general, crear un contenedor basado en tu distribución y otro basado en otra que no sea la tuya. Fedora, al parecer, tiene problemas si estás en Ubuntu 13.04 o superior, así que en tal caso usa cualquier otra distro. Por ejemplo, [Óscar Zafra ha logrado instalar Gentoo usando un script descargado desde su sitio, como indica en este comentario en el issue](https://github.com/IV-GII/GII-2013/issues/87#issuecomment-28639976).
Ahora creamos un contenedor con una distribución **Fedora** (`-t fedora`) con su última versión disponible, la 23 (`-- -R 23`).

```
sudo lxc-create -n fedoracaja -t fedora  -- -R 23
```

![https://dl.dropboxusercontent.com/s/dkagbhhh4w6gb3r/eje03_img02.png](https://dl.dropboxusercontent.com/s/dkagbhhh4w6gb3r/eje03_img02.png)
