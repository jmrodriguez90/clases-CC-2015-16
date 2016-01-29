// Programa de Prueba para utilizar operaciones básicas sobre PostgreSQL
//-----------------------------------------------------------------------

// **Autor:** Abel Josué Francisco Agra
// **Versión:** _0.1_

// El presente programa permite ejecutar algunas funcionalidades básicas sobre una 
// instalación local de PostgreSQL, utilizando node.js

// El presente programa constituye un ejercicio para la asignatura de Cloud Computing (CC),
// en el marco del Máster en Ingeniería Informática de la Universidad de Granada

// Cargar módulo de PostgreSQL
var pg = require('pg');

// Formato general del string de conexion
// Actualizar con datos de instalación de PostgreSQL antes de ejecutar el programa
var conString = "postgres://<username>:<password>@<host>/<database>";

console.log("[INFO] Iniciando Ejecucion de Pruebas!!!");
console.log("");


// Inicializar la fuente ("pool") de de conexiones
pg.connect(conString, function(err, client, done) {
  
	if(err) {
		return console.error('Error iniciando cliente de conexión a la base de datos: ', err);
  	}
  
	// Registrar Empresa
	client.query("INSERT INTO EMPRESA(identificador, nombre, direccion, area) VALUES ($1,$2,$3,$4)", ['Emp4','Empresa4','Direccion3','Area4'], function(err, result) {

    	if(err) {
      		
      		console.error('Error en creacion de empresa en base de datos: ', err);
    	
    	} else {
    	
    		console.log("Creación de empresa realizada exitosamente!!!");
		
		}
	});
	
	// Registrar Alumno
	client.query("INSERT INTO ALUMNO(usuario, nombres, apellidos, extra) VALUES ($1,$2,$3,$4)", ['Usr4','Nombre4','Apellidos4','Comentario4'], function(err, result) {

    	if(err) {
    		
      		console.error('Error en registro de alumno en base de datos: ', err);
    	
    	} else {
    
    		console.log("Registro de alumno realizado exitosamente!!!");
		}
		
	});
	
	// Definir Calificacion
	client.query("INSERT INTO CALIFICACION(identificador, usuario, valor) VALUES ($1,$2,$3::int)", ['Emp4','Usr1','5'], function(err, result) {

    	if(err) {
    		
      		console.error('Error en creacion de calificacion en base de datos: ', err);
    	
    	} else {
    
    		console.log("Registro de calificacion realizado exitosamente!!!");

		}
	});
	
	// Ranking de empresas
	client.query("SELECT E.identificador AS identificador, E.nombre AS nombre, E.direccion AS direccion, E.area AS area, AVG(C.valor) media FROM EMPRESA E, CALIFICACION C WHERE E.identificador = C.identificador GROUP BY E.identificador ORDER BY media DESC", function(err, result) {

    	if(err) {
    		
      		console.error('Error en presentacion de ranking de empresas: ', err);
    	
    	} else {
    
    		console.log("Ranking de empresas: ");
    	
    		for (var i = 0; i < result.rows.length; i++) {
  		
  				var row = result.rows[i];
  
  				for(var column in row) {
    			
    				console.log('"%s": "%j"', column, row[column]);
  				}
  			}
  		}

	});
	
	// Calificaciones de empresa
	client.query("SELECT usuario AS usuario, valor AS calificacion FROM CALIFICACION WHERE identificador = $1 ORDER BY usuario", ['Emp4'], function(err, result) {

    	if(err) {
    		
      		console.error('Error en listado de calificacion: ', err);
    	
    	} else {
    
    		console.log("Listado de calificaciones de 'Empresa4': ");
    	
    		for (var i = 0; i < result.rows.length; i++) {
  		
  				var row = result.rows[i];
  
  				for(var column in row) {
    			
    				console.log('"%s": "%j"', column, row[column]);
  				}
  			}    	
  		}

	});	
	
	// Modificar Calificacion
	client.query("UPDATE CALIFICACION SET valor = $1::int WHERE usuario = $2 AND identificador = $3", ['2','Usr1','Emp4'], function(err, result) {

    	if(err) {
    		
      		console.error('Error en modificacion de calificacion en base de datos: ', err);
    	
    	} else {
    
    		console.log("Actualizacion de calificacion realizada exitosamente!!!");
		
		}
	});	
	
	// Eliminar Calificacion
	client.query("DELETE FROM CALIFICACION WHERE identificador = $1 AND usuario = $2", ['Emp4','Usr1'], function(err, result) {

    	if(err) {
    		
      		console.error('Error en eliminacion de calificacion en base de datos: ', err);
    	
    	} else {
    
    		console.log("Eliminacion de calificacion realizada exitosamente!!!");
	
		}
		
		// Para liberar la conexión del cliente
    	done();
    	client.end();
    	
    	console.log("");
    	console.log("[INFO] Terminando Ejecucion de Pruebas!!!");
		
	});
    
});