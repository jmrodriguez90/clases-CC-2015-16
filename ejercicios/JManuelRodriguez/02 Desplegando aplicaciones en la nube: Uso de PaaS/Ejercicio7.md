Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido.
======================================================================


1. package.json: lo primero que hay que tener en cuenta es que Heroku después de hacer git clone de nuestra aplicación, al hacer npm install solo instala las dependencias "esenciales", es decir, las que tenemos listadas en dependencies, pero no instala las listadas en devDependencies; esto es importante tenerlo en cuenta porque si estamos utilizando paquetes para la construcción de la aplicación como pueden ser Grunt o Gulp, a no ser que las añadamos en dependencies el despliegue de la aplicación siempre nos dará error.

2. Procfile: como la aplicación se despliega por completo en una vez, no siendo por ejemplo independientes la parte servidor y la parte web, no es necesario que configuremos diferentes dynos como worker o demás, nos bastará con web. Lo que si tenemos que tener en cuenta es que para desplegar en Heroku no podemos ejecutar nuestra aplicación mediante monitores tipo Nodemon o Supervisor que reinician la aplicación ante cualquier cambio, ya que por la forma de funcionar de Heroku esto hará que la ejecución de la aplicación no sea correcta siendo lo más común que de problemas de vinculación de puertos al intentar reiniciar y usar un puerto que ya está ocupado y que el sistema no desocupa. La mejor opción es ejecutar directamente la aplicación mediante node app.

3. IP y puerto: tenemos que especificar la dirección IP y el puerto que nuestra aplicación escuchará para atender peticiones, como en principio no conocemos la dirección IP de nuestra aplicación en Heroku y sabemos que Heroku usa por defecto el puerto 5000, vamos a configurar nuestra aplicación para atienda peticiones de cualquier dirección IP y escuche el puerto 5000, u otros que le pasemos como parámetros desde línea de comandos.

Especificaciones:
```
app.set('ip', process.env.IP || '0.0.0.0');
app.set('port', process.env.PORT || 5000);
```

Indicamos a Express que escuche de esa dirección IP y ese puerto
```
app.listen(app.get('port'), app.get('ip'), function() {
console.log('Aplicación escuchando peticiones para la dirección ' + app.get('ip') +
' en el puerto ' + app.get('port') + " ...");
});
```
