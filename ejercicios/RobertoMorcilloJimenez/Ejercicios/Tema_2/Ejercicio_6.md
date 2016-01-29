##Ejercicio 6: Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow

Para este ejercicio he decido utilizar codeship que es libre pero que la única pega que le encuentro es la maldita tarjeta de crédito, para ello os recomiendo crearos una virtual en vuestro portal bancario y utilizar esa.

Debemos de instalar Codeship en nuestro heroku mediante la página de instalación en heroku de CodeShip:

![imagen_codeShip_install] (https://dl.dropboxusercontent.com/s/5xtcwat40pytp05/Ejer6_img1.png?dl=0)

Vemos como está instalado porfin en nuestro heroku CodeShip:
![imagen_home_heroku] (https://dl.dropboxusercontent.com/s/r110qshb59gfa8r/Ejer6_img_2.png?dl=0)

Para configurar nuestro CodeShip es bastante fácil tan solo debemos de seguir los tres pasos que nos instancia CodeShip:

1º Debemos de elegir el contro lde versiones que poseemos en nuestro caso GitHub

2º Elegir el repositorio del cuál queremos crear nuestro proyecto en nuestro caso: [prueba-rest-version-2]

3º Configurar el proyecto.
```sh
$ nvm install 4.2.2
$ npm install
$ mocha

```
![imagen_config_code] (https://dl.dropboxusercontent.com/s/epflu1nye1ybfx4/Ejer6_img3.png?dl=0)

Una vez configurado debemos de configurar lo que nos va a ejecutar codeship envamos a ver que todo se ha desplegado y verificado de forma correcta, mediante la ejecución de un commit normal y corriente.

![imagen_final] (https://dl.dropboxusercontent.com/s/mw05p312bjzjqm3/Ejer6_img_4.png?dl=0)

