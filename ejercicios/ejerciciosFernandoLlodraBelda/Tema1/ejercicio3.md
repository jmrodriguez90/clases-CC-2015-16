### Ejercicio 3

#### Ejecutar el programa en diferentes versiones del lenguaje. ¿Funciona en todas ellas?


Para probar las distintas versiones de node.js con mi aplicación necesito instalar un entorno virtual de desarrollo.
Elijo el entorno de desarrollo '**n**'.

Para instalarlo, usamos ``$ npm install -g n``.

Ahora tenemos que instalar las distintas versiones de **node.js** que queremos probar.

```
$ n 0.9.6
$ n 0.11.16
$ n 5.0.0
```

Vamos a usar estas tres versiones por ejemplo.

![versionNode](https://dl.dropboxusercontent.com/s/4es4unfop9eaoko/Captura%20de%20pantalla%202015-11-09%2019.41.26.png)


- ___Node 0.9.6___

![0.9.6](https://dl.dropboxusercontent.com/s/taxfy7okr4zfxr5/Captura%20de%20pantalla%202015-11-09%2019.42.16.png)

Con esta versión nuestra aplicación no funciona. Probablemente la razón sea que es una versión bastante antigua.


- ___Node  0.11.16___

![0.11.16](https://dl.dropboxusercontent.com/s/3d13p6zvkftgric/Captura%20de%20pantalla%202015-11-09%2020.04.13.png)

Esta versión si ha podido ejecutar la aplicación sin problemas.


- ___Node 5.0.0___

![5.0.0](https://dl.dropboxusercontent.com/s/3d13p6zvkftgric/Captura%20de%20pantalla%202015-11-09%2020.04.13.png)

Esta versión es la última versión de node.js y vemos que también funciona sin problemas.