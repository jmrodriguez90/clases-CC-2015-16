##Ejercicio 7: Preparar la aplicación con la que se ha venido trabajando hasta este momento para ejecutarse en un PaaS, el que se haya elegido.

Para preparar la aplicación que queremos desplegar en el PaaS, en este caso Heroku, hay que tener en cuenta las siguientes configuraciones:


**package.json**: npm install, nos instalará todas las dependencias puestas en nuestro package json:
```
{
  "name": "prueba-rest-version-2",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "test": "mocha",
    "start": "node routes/index.js"
    
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "curl": "^0.1.4",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "jade": "~1.11.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0",
    "should": "7.1.1"
  },
  "devDependencies": {
    "mocha": "^2.3.3",
    "mongodb": "^2.0.48",
    "supertest": "^1.1.0"
  }
}

```

- **Procfile**:


```
web: npm start
```

- **IP y puerto**: tenemos que especificar la dirección IP y el puerto que nuestra aplicación escuchará para atender peticiones, como en principio no conocemos la dirección IP de nuestra aplicación en Heroku y sabemos que Heroku usa por defecto el puerto 5000, vamos a configurar nuestra aplicación para atienda peticiones de cualquier dirección IP y escuche el puerto 5000, u otros que le pasemos como parámetros desde línea de comandos.

  - _Especificación de dirección IP y puerto_

    ```
    var port = process.env.PORT || 5000;
    ```

  - _Indicamos a Express que escuche de esa dirección IP y ese puerto_

    ```
    app.listen(port); 
    console.log('Server running at http://127.0.0.1:'+port+'/');
    ```
    
    Ver el programa completo en [prueba-rest-version-2]
    
[prueba-rest-version-2]:<https://github.com/robermorji/prueba-rest-version-2.git>
