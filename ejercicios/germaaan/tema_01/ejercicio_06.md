## Ejercicio 6

#### Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).

Voy a añadir un par de aserciones; la primera comprobará que la base de datos existe y la segunda que el método de crear empresas funciona correctamente.

```
assert.equal(empresa.existeBaseDatos(), true);

empresa.crearEmpresa({
  empresa: "prueba"
}, function(error, data) {
  empresa.existeEmpresa({
    empresa: "prueba"
  }, function(error, data) {
    assert.equal(data, true);
  });
});

console.log("Aserciones pasadas con éxito.")
```

Como ambas aserciones se cumplirán siempre, al ejecutar el programa test se mostrará el mensaje de que las aserciones se han pasado con éxito.

![eje06_img01](https://dl.dropboxusercontent.com/s/u5jhhy8pdcc9nzr/eje06_img01.png)

En el siguiente caso, vamos a contar con que el método para generar el ranking de las empresas todavía no ha sido implementado completamente. Para que el método funcione correctamente, el valor que devuelva debe ser una colección en la que todos los objetos tendrán una propiedad llamada "empresa", otra llamada "numCalificaciones" y otra llamada "calificacionProm"; esto será necesario para que la plantilla Jade de la página de la aplicación pueda procesar esta información correctamente y mostrarla en pantalla. En este caso vamos a usar la librería `Should.js` para comprobar si esto funciona correctamente o no, así que primero tendremos que instalarla (`npm install should --save-dev`)

```
empresa.generarRanking(function(error, data) {
  _.each(data, function(valor) {
    valor.should.have.property("empresa");
    valor.should.have.property("numCalificaciones");
    valor.should.have.property("calificacionProm");
  });
});
```

Como no se cumple el comportamiento esperado, obtendremos un error como el siguiente informándonos de que el objeto recibido no tiene la propiedad "empresa".

![eje06_img02](https://dl.dropboxusercontent.com/s/fdb345ww4rjc7p3/eje06_img02.png)
