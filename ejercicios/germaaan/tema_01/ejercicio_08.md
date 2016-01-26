## Ejercicio 8

#### Ejercicio: Haced los dos primeros pasos antes de pasar al tercero.

Voy a usar **Travis CI** para la integración continua por su gran integración con **GitHub**. Una vez que accedamos a la página de Travis con nuestra cuenta de GitHub, solo tendremos que buscar el repositorio en la lista de nuestros repositorios y activar para él la integración continua.

![eje08_img01](https://dl.dropboxusercontent.com/s/y50o864yii6sjua/eje08_img01.png)

Ahora tenemos que crear el archivo de configuración **.travis.yml**. En este archivo indicaremos todo lo que hará Travis durante el proceso de integración, como esta aplicación está totalmente automatizada mediante el archivo **package.json** no hará falta realizar ninguna configuración especial, solo indicar que el lenguaje de la aplicación es **Node.js** y que queremos que las pruebas de integración se hagan para las versiones **0.10**, **0.11** y **0.12**.

```
# language setting
language: node_js

# version numbers, testing against two versions of node
node_js:
  - "0.12"
  - "0.11"
  - "0.10"
```

Si todo ha ido bien, veremos que la integración ha finalizado correctamente para todas las versiones que habiamos indicado.

![eje08_img02](https://dl.dropboxusercontent.com/s/9idr9lmzdaw1ad9/eje08_img02.png)
