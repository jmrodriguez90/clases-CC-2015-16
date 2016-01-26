## Ejercicio 7

#### Convertir los tests unitarios anteriores con assert a programas de test y ejecutarlos desde *mocha*, usando descripciones del test y del grupo de test de forma correcta. Si hasta ahora no has subido el código que has venido realizando a GitHub, es el momento de hacerlo, porque lo vamos a necesitar un poco más adelante.

Primero instalamos `mocha`:

```
npm install mocha --save-dev
```

Editamos el archivo de test para agrupar todos los test anteriores en una misma categoría que vamos a llamar **"Tests"**, esto lo hacemos con la función `describe`. Cada uno de los tests unitarios se llamarán dentro del método `it` y para indicar que ha finalizado llamamos al método ``done``.

```
describe('Tests', function() {
  it('Existe base de datos', function(done) {
    assert.equal(empresa.existeBaseDatos(), true);
    done();
  });

  it('Creación de empresas', function(done) {
    empresa.crearEmpresa({
      empresa: "prueba"
    }, function(error, data) {
      empresa.existeEmpresa({
        empresa: "prueba"
      }, function(error, data) {
        assert.equal(data, true);
      });
    });
    done();
  });

  it('Generación de ranking:', function(done) {
    empresa.generarRanking(function(error, data) {
      _.each(data, function(valor) {
        valor.should.have.property("empresa");
        valor.should.have.property("numCalificaciones");
        valor.should.have.property("calificacionProm");
      });
    });
    done();
  });
});
```

En el archivo **package.json** creamos un script para ejecutar `mocha`:

```
...
"scripts": {
  "test": "mocha"
},
...
```

Ya solo nos falta ejecutar `mocha` y esperar que todos los test se pasen correctamente. En este caso ha sido así, y vemos como los 3 tests han pasado.

![eje07_img01](https://dl.dropboxusercontent.com/s/12kubxpeol2a5i2/eje07_img01.png)
