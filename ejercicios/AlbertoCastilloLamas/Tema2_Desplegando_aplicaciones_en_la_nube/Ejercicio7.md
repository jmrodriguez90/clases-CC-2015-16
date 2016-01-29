# Ejercicio 7

## Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido.

El PaaS elejido es Heroku, por lo que para ello vamos a hacer una configuración específica para ese PaaS, como es el archivo Procfile, y el segundo paso se encuentra en el código donde se tiene que especificar a la aplicación express tanto IP como PORT a los que atiende.

Empezemos con la configuración del archivo **Procfile**.
Archivo simple de configurar en nuestro caso, donde se especifica una tarea, en concreto la necesaria para hecharla a andar

![ejer7_img1](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio7_1.png)

Para terminar configuramos **IP** y **PORT**

![ejer7_img2](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio7_2.png)

Para ello asignamos puerto e ip a la aplicación (Express) para más delante utilizarlos en la función 'listen' e indicar las ip y en que puerto.