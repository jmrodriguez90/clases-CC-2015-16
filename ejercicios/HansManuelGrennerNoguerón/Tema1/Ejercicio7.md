##Ejercicio 7

**Convertir los tests unitarios anteriores con assert a programas de test y ejecutarlos desde mocha, usando descripciones del test y del grupo de test de forma correcta. Si hasta ahora no has subido el código que has venido realizando a GitHub, es el momento de hacerlo, porque lo vamos a necesitar un poco más adelante.**

En primer lugar instalamos mocha.

```npm install mocha --save-dev```

A continuación todas las demás herramientas que vamos a usar junto a mocha para lanzar los diferentes tests creados. En este caso usaremos mongoose para hacer pruebas con la base de datos MongoDB y chai junto a su plugin chai-fs.

```
npm install mongoose
npm install mocha-mongoose 
npm install chai
npm install chai-fs
```

**Mocha** requiere de un fichero llamado **package.json**  en el que indicamos información sobre el repositorio, las versiones de las dependencias a usar, las herramientas utilizadas, etc.

```
{
  "name": "ProyectCC-PeriodicoInteractivo-GestionBaseDatos",

  "version": "0.0.1",

  "author": "enpi",

  "description": "Proyecto de MII en Granada: Periódico web interactivo. Submódulo para la gestión de la base de datos.",

  "keywords": ["CC", "periodico", "base de datos"],

  "repository": {
    "type": "git",
    "url": "git@github.com:enpi/ProjectCC.git"
  },

  "devDependencies": {
    "chai": "*",
    "mocha": "*",
    "mongodb": ">=1.0.0",
    "mongoose": ">=3.0.0",
  },
  "optionalDependencies": {
  },
  "engines": {
    "node": "*",
    "npm": ">= 1.2"
  },
  "scripts": {
    "test": "mocha"
  }
}
```

En el directorio de test se creó un fichero **test.js** en el que se especifican las diferentes funciones a evaluar.

```
describe('Test basicos', function() {

  describe('Comprobando  archivos', function () {

    it('El fichero script existe', function (done) {
      expect('script.py').to.be.a.file();
      done();
    });

    it('Archivos de documentación "pycco"', function (done) {
      expect('docs/script.html').to.be.a.file();
      expect('docs/pycco.css').to.be.a.file();
      done();
    });

  });

});

describe("Pruebas con bases de datos de test", function() {
  beforeEach(function(done) {
    if (mongoose.connection.db) return done();

    mongoose.connect(dbURI, done);
  });

  it("Se puede almacenar datos", function(done) {
    new Dummy({a: 1}).save(done);
  });

  it("Se pueden mostrar datos", function(done) {
    new Dummy({a: 1}).save(function(err, model){
      if (err) return done(err);

      new Dummy({a: 2}).save(function(err, model){
        if (err) return done(err);

        Dummy.find({}, function(err, docs){
          if (err) return done(err);

          // without clearing the DB between specs, this would be 3
          docs.length.should.equal(2);
          done();
        });
      });
    });
  });

  it("Se puede borrar la base de datos", function(done) {
    new Dummy({a: 5}).save(function(err, model){
      if (err) return done(err);

      clearDB(function(err){
        if (err) return done(err);

        Dummy.find({}, function(err, docs){
          if (err) return done(err);

          console.log(docs);

          docs.length.should.equal(0);
          done();
        });
      });
    });
  });
});
```
