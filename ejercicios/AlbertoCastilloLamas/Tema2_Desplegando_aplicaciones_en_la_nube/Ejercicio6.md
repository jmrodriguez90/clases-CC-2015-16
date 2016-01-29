# Ejercicio 6

## Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow.

Primero vamos a configurar tanto Heroku como Github para que se realize un despliegue atomáico con cada push que se haga sobre el [repositorio](https://github.com/alcasla/AppTema2) de la aplicación.

Configuramos primero Heroku conectando nuestra aplicación desplegada en Heroku con el repositorio en Github, accediendo a la aplicación concreta en el apartado "Deploy" 

![ejer6_img1](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio6_1.png)

Pasamos a configurar el cliente Github para que los cambios levante un trigger que haga desplegarse la aplicación.

![ejer6_img2](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio6_2.png)

Para ello accedemos al repositorio de la aplicación (dentro del cliente Github web) apartado "Settings" -> "Webhooks & services" y confirmamos que tenemos el Webhook para Heroku

![ejer6_img3](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio6_3.png)

Ya está configurado el despliegue automático.

Finalmente nos damos de alta en SNAP-CI y pasamos a configurarlo junto con un pipeline donde configuramos la instalación y pruebas

```
nvm install 0.12.7
npm install
npm -g install mocha
mocha
```

![ejer6_img4](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio6_4.png)

----------------------------------------------------

Ya tenemos la infraestructura montada, antes de hacer ningún cambio probemos algo antes de implmentarlo, obviamente fallará

![ejer6_img5](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio6_5.png)

Implementamos esta funcionalidad junto a sus test y procemos a añadirlo para que la infraestructura montada se encarge de contruirlo, testearlo y desplegarlo.

Se registra la actividad que realizamos

![ejer6_img6](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio6_6.png)

Y tras unos minutos la funcionalidad se encuentra funcionando

![ejer6_img7](http://googledrive.com/host/0B5Yam2FWqtZPOUY1RGEyY1ZKLXM/Ejercicio6_7.png)