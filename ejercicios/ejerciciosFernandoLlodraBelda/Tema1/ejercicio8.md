## Ejercicio 8

#### Ejercicio: Haced los dos primeros pasos antes de pasar al tercero.

Para la integración continua se escoge **Travis CI**. 

El primer paso es registrarnos en Travis con nuestra cuenta de github.

![TravisLogged](https://dl.dropboxusercontent.com/s/10f62q503ohs4gt/Captura%20de%20pantalla%202015-11-10%2017.48.29.png)

A continuación, elegimos el repositorio con el que se desea hacer la integración continua.

![repoTravis](https://dl.dropboxusercontent.com/s/jt35axfgoiwpl0m/Captura%20de%20pantalla%202015-11-10%2017.50.57.png)

Por último, creamos nuestro fichero de configuración *.travis.yml* en el que indicaremos todo lo que Travis ha de hacer
en la integración continua.

Mi fichero **.travis.yml**:

```
# language setting
language: node_js

# version numbers, testing against two versions of node
node_js:
  - "0.11.16"
  - "5.0.0"
services:
  - mongodb
```
