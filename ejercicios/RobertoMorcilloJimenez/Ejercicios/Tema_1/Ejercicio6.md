##Ejercicio 6
En este ejercicio hemos creado distintas aserciones y hemos comprobado que pasan los test:
### 
	var obj_Empresa = {
	CreacionEmpresa: function(name){
		var objeto_new;
		objeto_new = new Company({nombre:name});
		return objeto_new;
	},

	ConectionBD: function(){
		
	mongoose.connect('mongodb://localhost/my_database');
		var db = mongoose.connection;
		
		db.on('error',console.error.bind(console, 'connection error:'));	
		db.once('open', function (callback) {
		console.log("Test Conection: Pasado con éxito");
			
		});
		return true;
	},
	verificar_creacion_empresa: function(ins){
		if (ins != undefined){
			return true;
		}
		return false;
	},
	
	eliminar_empresa: function(objeto_delete){
		delete  objeto_delete.nombre;
		return objeto_delete;
	}
}


	//Instancias
	instancia = obj_Empresa.CreacionEmpresa("NuevaEmpresa");
	object = obj_Empresa.CreacionEmpresa("NuevaEmpresa");
	ExisteObjeto = obj_Empresa.verificar_creacion_empresa(instancia);

	//Aserciones
	assert.equal(ExisteObjeto,true,"El objeto debe ser creado");
	assert.equal(instancia.nombre,"NuevaEmpresa","El objeto debe ser NuevaEmpresa");
	assert.notEqual(object,undefined,"El objeto debe ser creado");
	assert.notDeepEqual(instancia,object,"Los objetos deben ser iguales");

	console.log("Enhorabuena: Todas las aserciones han sido pasadas con éxito");
	
![aserciones](https://dl.dropboxusercontent.com/s/aszus5r2rltowyu/aserciones.png?dl=0)
	
	Ahora vamos hacer que falle uno y vamos a implementarlo implementado:
	
	CreacionEmpresa: function(name){
		
	}
	assert.equal(ExisteObjeto,true,"El objeto debe ser creado");
	
![assert_fail](https://dl.dropboxusercontent.com/s/jhayrswzkpc88dj/assert_fail.png?dl=0)
	
	Después de implementarlo volvemos al estado inicial:
	
	CreacionEmpresa: function(name){
		var objeto_new;
		objeto_new = new Company({nombre:name});
		return objeto_new;
	},
	assert.equal(ExisteObjeto,true,"El objeto debe ser creado");
	
![aserciones](https://dl.dropboxusercontent.com/s/aszus5r2rltowyu/aserciones.png?dl=0)
	
	
	
