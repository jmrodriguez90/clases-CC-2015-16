##Ejercicio 6

Comprobación de assert con node js.

##Pasos

Tenemos el siguiente código:
  'use strict';

  var prueba = require('../lib/server');
  var assert = require("assert");



      prueba.comprobacion("EMPRESA01",function(err,resultado){
				  if(!resultado){
					  prueba.insertarEmpresa("EMPRESA01",12);
				  }
				  else{
				  	prueba.comprobacion("EMPRESA01",function(err,resultado){
						  assert.equal(resultado, true);
						  console.log("Assert pasados");	
					  });
				  }
				  }); 

Ejecutamos con node test2.js

![](http://googledrive.com/host/0B6Q-phIC3pUpblVzUS1RbEZjb1E/ejercicio6.png)