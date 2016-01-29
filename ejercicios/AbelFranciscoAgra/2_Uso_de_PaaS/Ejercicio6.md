#Ejercicio 6

Hacer alguna modificación a la aplicación en _node.js_ para _Heroku_, sin olvidar añadir los tests para la nueva funcionalidad, y configurar el despliegue automático a _Heroku_ usando _Snap CI_.
 
###Pasos realizados para la resolución del ejercicio:

1. Se incluyen en la librería de calificación de empresas, dos (2) nuevas funcionalidades:

 - **_crearAlumno_:** permite registrar un nuevo estudiante (usuario) que puede realizar valoraciones de empresas
 - **_modificarCalificacion_:** permite actualizar o editar una valoración ya definida a una empresa
 
 La descripción e implementación de estas funcionalidades pueden observarse en el archivo [libCalificacionEmpresa.js](https://github.com/jfrancisco4490/calificacionEmpresa_2/blob/master/lib/libCalificacionEmpresa.js).

2. Se incluyen dos (2) nuevas rutas en la aplicación, para soportar solicitudes _HTTP_ que utilicen y apliquen las operaciones definidas en el punto anterior.

 - `PUT /alumno/<usr>/<nombre>/<apellido>/<extra>` que define una solicitud de registro de nuevo alumno (enviando todos los parámetros asociados al mismo)
 - `POST /calificacion/<empresa>/<alumno>/<valor>` que especifica una operación de actualización del valor de una calificación ya realizada a una empresa 

 Las nuevas rutas se ubican en el archivo [index.js](https://github.com/jfrancisco4490/calificacionEmpresa_2/blob/master/routes/index.js).

3. Se definen dos (2) nuevos _tests_ para las funcionalidades, verificando el registro de un nuevo alumno y la actualización de una calificación de forma exitosa.

 Para el registro de un nuevo alumno:

 ```
	describe("PUT Alumno", function() {
		it('Debería Crear Nuevo Alumno', function (done) {
			request(app)
			.put('/alumno/Usr4/Nombre4/Apellidos4/Extra4')
			.expect(200,done)
			.end(function(err, res){
      			if (err) {
            		return done(err);
          		}
      			res.text.should.match(/Finalizada con exito/);
      			done();
      		});
		});
	});
 ```

 Para la actualización de una calificación:

 ```
	describe("POST Calificación", function() {
		it('Debería Modificar Calificación', function (done) {
			request(app)
			.post('/calificacion/Emp4/Usr1/1')
			.expect(200,done)
			.end(function(err, res){
      			if (err) {
            		return done(err);
          		}
      			res.text.should.match(/Finalizada con exito/);
      			done();
      		});
		});
	});
 ```

 Los nuevos _tests_ se encuentran especificados en el archivo [test.js](https://github.com/jfrancisco4490/calificacionEmpresa_2/blob/master/test/test.js).

4. Se realiza el registro en el servicio de integración continua de _Snap CI_, asociando una cuenta de _GitHub_.

5. Se incluye el repositorio correspondiente con la aplicación de calificación de empresas en _Snap CI_, lo cual ejecuta automáticamente el primer proceso de integración continua (_build_).

6. Se configura la integración continua en _Snap CI_ para que ejecute los _tests_ (_mocha_) en cada nueva actualización del código en el repositorio.

7. Para integrar _Snap CI_ con _Heroku_ de forma automática, se define un nuevo paso (_stage_) en la secuencia de la integración continua:

 - En la configuración del nuevo _stage_ en _Snap CI_, se indica que se va a realizar un despliegue básico en _Heroku_
 - Se indica la cuenta de _Heroku_ con la que se van a realizar los despliegues
 - Se puede utilizar en una aplicación ya creada en _Heroku_, o definir una nueva. En este caso, se define una nueva aplicación.

8. Al guardar la configuración del nuevo paso, _Snap CI_ inicia de forma automática una nueva ejecución de la integración continua, que ahora incluye el despliegue de la aplicación en _Heroku_.

Ahora, cada vez que se ejecute una actualización del código en _GitHub_ (_push_), se activa la integración continua en _Snap CI_, que culmina en el despliegue automático de la aplicación en _Heroku_.

El estado actual de la ejecución de la integración continua sobre la aplicación puede observarse en la medalla (_badge_) de _Snap CI_, ubicado en la página principal del repositorio.