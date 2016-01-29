## Ejercicio 7: Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido.


Una vez nos hayamos asegurado de que el archivo Procfile está bien configurado, debemos asignar dentro del código un puerto de escucha y una ip al express.

Basta con añadir las líneas:

    //Para establecer ip y puerto  
    app.set('ip', process.env.IP|| '0.0.0.0');  
    app.set('port', (process.env.PORT || 5000));  

    //Para que escuche  
    var server = app.listen(app.get('port'), function() {  
       console.log('Listening on port %d', server.address().port);  
    });






