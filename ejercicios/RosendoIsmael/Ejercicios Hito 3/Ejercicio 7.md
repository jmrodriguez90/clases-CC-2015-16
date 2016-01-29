#Ejercicio 7

Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido.

##Pasos

He elegido trabajar sobre heroku ya que es sobre el que he ido trabajando hasta ahora.

Para ello añadimos las siguientes lienas a nuestro codigo en index.js

    app.set('ip', process.env.IP|| '0.0.0.0');
     console.log('Node app is running on port', app.get('port') + 'liste adress demand: '+app.get('ip'));
     
Y cambiamos nuestro Procfile para que contenga
    web: node index.js