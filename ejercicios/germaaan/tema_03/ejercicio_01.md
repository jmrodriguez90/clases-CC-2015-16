# Ejercicio 1
## Instala LXC en tu versión de Linux favorita. Normalmente la versión en desarrollo, disponible tanto en [GitHub](http://github.com/lxc/lxc) como en el [sitio web](http://linxcontainers.com/) está bastante más avanzada; para evitar problemas sobre todo con las herramientas que vamos a ver más adelante, conviene que te instales la última versión y si es posible una igual o mayor a la 1.0.
Añadimos el repositorio PPA de LXC e instalamos la última versión estable:

```
sudo add-apt-repository ppa:ubuntu-lxc/lxc-git-stable-1.1
sudo apt-get update
sudo apt-get install lxc
```
