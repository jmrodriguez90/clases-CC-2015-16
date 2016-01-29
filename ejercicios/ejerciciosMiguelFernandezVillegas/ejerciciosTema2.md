##Ejercicio 1
###Darse de alta en algún servicio PaaS tal como Heroku, Nodejitsu, BlueMix u OpenShift.

En mi caso he elegido [OpenShift](https://www.openshift.com/), me he registrado fácilmente y he confirmado con un email que he sido dado de alta.

En nuestro perfil nos encontramos el siguiente panel de control [aquí](https://gyazo.com/fbeafc24a407c0d331c219f853dddf8e.png)

##Ejercicio 2
###Crear una aplicación en OpenShift y dentro de ella instalar WordPress. 

Para comenzar en el panel de contro pulsamos en añadir una nueva aplicación, donde nos aparecerá [este](https://gyazo.com/2f65a85b7af1e5b8fbf806ed70bbb81b.png) listado, en este caso seleccionamos WordPress 4, a continuación rellenamos una primera configuración inicial y después de unos minutos tendremos ya nuestra nueva aplicación de WordPress creada.

[Aplicación creada](https://gyazo.com/a895af20ec44b8da461dbac13064270d.png)


[Panel de control de WordPress](https://gyazo.com/8d98c73d38820e91cadbbeae2b004a47.png)

Y ya tenemos nuestro propio WordPress preparado para ser usado a través de OpenShift

##Ejercicio 3
###Crear pruebas para las diferentes rutas de la aplicación.

Seguimos con la aplicación de node de ejemplo, primero instalamos node express con el siguiente comando (si no está instalado ya) `sudo apt-get install node-express` y a continuación generamos los test con el siguiente comando `express prueba-rest`, por último usamos `cd prueba-rest && npm install`

![Salida](https://gyazo.com/d2d35c0c7fdd4ddfa13e5629859c19e1.png)


##Ejercicio 4
###Instalar y echar a andar tu primera aplicación en Heroku.

Primero instalamos el complemento para heroku con el siguiente comando 
`wget -O- https://toolbelt.heroku.com/install-ubuntu.sh | sh`
y a continuación nos logueamos en heroku con el siguiente comando `heroku login`.

Vamos a clonar una aplicación de [ejemplo](https://github.com/heroku/node-js-getting-started), primero realizando un [fork](https://github.com/miguelfervi/node-js-getting-started) y clonando en mi directorio con el siguiente comando `git clone https://github.com/miguelfervi/node-js-getting-started.git`.

Después instalamos usando `npm install` y arrancamos con `npm start`. Para ver el ejemplo vamos a la siguiente dirección http://localhost:5000/

Por último para desplegar en Heroku:
`heroku create`, `git push heroku master`y por último para abrir en el navegador `heroku open`

Accedemos a [mi dashboard de Heroku](https://dashboard.heroku.com/apps) y vemos que ha sido creado correctamente.

Para ver la aplicación deplegada accedemos a la siguiente dirección: https://protected-brook-3568.herokuapp.com/


##Ejercicio 5
###Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.
###Como en todos los ejemplos anteriores, se puede cambiar “node” y “heroku” por la herramienta que se haya elegido.

Para comenzar descomenté los test del archivo [script.py](https://github.com/miguelfervi/ProjectCC/blob/master/script.py) temporalmente ya que si no Travis no me realiza bien la build.
A continuación uso `foreman start web` donde `web: python script.py`
dentro del archivo [Procfile](https://github.com/miguelfervi/ProjectCC/blob/master/Procfile)

![Pruebas](https://gyazo.com/cfd6568c1f3460f2c85b7f4b387b8af9.png)

Ahora creamos nuestra aplicación en heroku añadiendo además información de que es un proyecto python con el siguiente comando `heroku apps:create --region eu --buildpack heroku/python periodicointeractivo-heroku1-6`

![Creacion heroku](https://gyazo.com/873c9f212e19cab8c5048c5f50dc1f3e.png)


Por último modificamos Procfile para añadirle el puerto con $PORT. Lo descargamos con `heroku git:clone -a periodicointeractivo-heroku1-6`

Guardamos los cambios con estos comandos
`git add Procfile`
`git commit` y 
`git push heroku master`


De nuevo lanzamos desplegamos nuestra [app](https://gyazo.com/d374ff2d425162114a0f7e52edc20031.png) 


##Ejercicio 6
###Haz alguna modificación a tu aplicación en node.js para Heroku, sin olvidar añadir los tests para la nueva funcionalidad, y configura el despliegue automático a Heroku usando Snap CI o alguno de los otros servicios, como Codeship, mencionados en StackOverflow

En mi caso decidí hacer un [fork](https://github.com/heroku/node-js-getting-started) de la [aplicación](https://github.com/heroku/node-js-getting-started) de ejemplo usada en ejercicios anteriores.

Seleccionamos la aplicación desplegada y conectada a GitHub, activando el despliegue automático.
![Desplegada](https://gyazo.com/cfba790b8471ce79f3f82ec5426fc7bd.png)

Ahora nos vamos al repositorio del proyecto en GitHub, entramos en Settings, WebHooks & Services, añadimos el servicio HerokuBeta y rellenamos los datos que nos solicitan.

Realizo algunos cambios en el siguiente [enlace](https://protected-brook-3568.herokuapp.com/)

Por último, nos registramos en Snap CI a partir de nuestro usuario en GitHub y conectamos nuestro repo, después en configuración, configuramos un stage con Heroku enlazando la aplicación a Snap CI y al final obtenemos los siguientes resultados

![Pipelines](https://gyazo.com/42d0073106ceb31a928d4d75300db93e.png)

##Ejercicio 7
###Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido.

Vamos a preparar la aplicación en Heroku con la aplicación asociada a GitHub con nuestro ProjectCC

![Proyecto](https://gyazo.com/78114bf807297aa598ea6836db7dfcec.png)

Ya teníamos de ejercicios previos el Procfile con este contenido: `web: python script.py $PORT` y previamente usando el cambio de puerto y asignación con `heroku config:set PORT=8080`

Desplegamos aplicación

![Desplegada](https://gyazo.com/daf66c2272983564e2c4cf300dcb186d.png)

En el siguiente [link](https://periodicointeractivo-heroku1-6.herokuapp.com/) encontraremos la aplicación desplegada en heroku

##Ejercicio 8
###Crear una aplicación mínima y usar un buildpack no estándar para desplegarla en Heroku o un cartridge no estándar en OpenShift.

En la siguiente [página](https://devcenter.heroku.com/articles/buildpacks) podemos ver los buildpacks estándares que ofrece heroku (Ruby, Node.js, Python entre otros).

Para este ejercicio voy a usar Erlang, un lenguaje que no soporta en los estándares que tiene Heroku.

Usaremos una [aplicación]
 donde le especificaremos el buildpack, que en este caso no será posible de detectar y por eso vamos a decirselo explicitamente con el siguiente comando

##Ejercicio 9
###Darse de alta en un servicio Redis en la nube y realizar sobre él las operaciones básicas desde el panel de control.

###Instalar un cliente de línea de órdenes de Redis o una biblioteca cliente REST y realizar desde él las operaciones básicas de creación y lectura de información.

###Ejecutar ejemplos de cualquier lenguaje de programación sobre la instalación realizada.



##Ejercicio 10
