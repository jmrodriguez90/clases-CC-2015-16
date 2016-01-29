##Ejercicio 7
Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).

###Pasos:

Primero debemos instalar mocha con el comando: 
npm -g install mocha.

![](I7.png)

En el archivo test.js añadimos el siguiente código:

 'use strict';

  var prueba = require('../server');
  var assert = require("assert");


  describe("TEST",function(){
  it('Creación de empresas', function(done) {
      prueba.insertarEmpresa("EMPRESA01",12); 
      prueba.comprobacion("EMPRESA01",function(err,resultado){
	  		assert( assert.equal(resultado, true))});
      done();
    });
  });
  
Ejecutamos con mocha test.js

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/I8.png)
