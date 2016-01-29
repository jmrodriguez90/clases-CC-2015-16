## Ejercicio 7

#### Convertir los tests unitarios anteriores con assert a programas de test y ejecutarlos desde *mocha*, usando descripciones del test y del grupo de test de forma correcta. Si hasta ahora no has subido el código que has venido realizando a GitHub, es el momento de hacerlo, porque lo vamos a necesitar un poco más adelante.


Vamos a instalar mocha:

`npm install mocha --save-dev`

Nuestro test con las funciones **describe** e **it** es el siguiente:

```
var dbURI    = 'mongodb://localhost/expressTest'
    , should   = require('chai').should()
    , mongoose = require('mongoose')
    , Dummy    = mongoose.model('Dummy', new mongoose.Schema({companyName:String, rate:Number}))
    , clearDB  = require('mocha-mongoose')(dbURI)
    ;

describe("Users -> Companies", function() {
    beforeEach(function(done) {
        if (mongoose.connection.db) return done();

        mongoose.connect(dbURI, done);
    });

    it("can be saved", function(done) {
        new Dummy({companyName: 'AVIVA'}).save(done);
    });

    it("can be listed", function(done) {
        new Dummy({companyName: 'AVIVA', rate: 7}).save(function(err, model){
            if (err) return done(err);

            new Dummy({companyName: 'Fernando Llodra', rate: 7}).save(function(err, model){
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

    it("can clear the DB on demand", function(done) {
        new Dummy({companyName: 'MICROSOFT'}).save(function(err, model){
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

Y ahora creamos un script en nuestro packaje.json para ejecutar el test: 
`"scripts": {
   "start": "node_modules/.bin/supervisor app",
   "test": "node_modules/.bin/mocha -w"
   } `
   

Ejecutamos el test con: `npm test`

![mochaTest](https://dl.dropboxusercontent.com/s/fpk8cs0o6exiqxk/Captura%20de%20pantalla%202015-11-10%2014.01.22.png)