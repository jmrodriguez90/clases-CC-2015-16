## Ejercicio 1: Instalar alguno de los entornos virtuales de node.js y, con ellos, instalar la última versión existente, la versión minor más actual de la 0.12 y lo mismo para la 0.11 o alguna impar. Si no se usa habitualmente este lenguaje, hacer lo mismo con cualquier otro lenguaje de scripting.

He instalado el entorno nvm y estos son los pasos que he seguido:

### 1.Se clona desde git directamente usando el comando:
git clone https://github.com/creationix/nvm.git ~/.nvm

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/clone.png)


### 2.Para activarlo:
. ~/.nvm/nvm.sh



### 3.Una vez activado, comprobamos la lista de versiones:
nvm ls-remote


![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/versiones.png)

    
Y vemos que las mas actuales de la 0.11 y 0.12 son:  
*0.11.16*  
*0.12.7*

### 4.Finalmente se instalan ambas versiones con:
nvm install 0.11.16      
nvm install 0.12.7

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/install.png)

## Ejercicio 2: Como ejercicio, algo ligeramente diferente: una web para calificar las empresas en las que hacen prácticas los alumnos. Las acciones serían crear empresa y listar calificaciones para cada empresa, crear calificación y añadirla (comprobando que la persona no la haya añadido ya), borrar calificación (si se arrepiente o te denuncia la empresa o algo) y hacer un ránking de empresas por calificación, por ejemplo. Crear un repositorio en GitHub para la librería y crear un pequeño programa que use algunas de sus funcionalidades. Si se quiere hacer con cualquier otra aplicación, también es válido. Se puede hacer un ejercicio equivalente, siempre que tenga operaciones similares: creación, listado, borrado, ciclo CRUD básico. El objetivo de este ejercicio es poner en práctica lo que viene a continuación, NO es un objetivo de la asignatura.
  
  
  El ejercicio 2 se encuentra en el siguiente [repositorio](https://github.com/JaviSG91/Empresas.git)  


## Ejercicio 3:Ejecutar el programa en diferentes versiones del lenguaje. ¿Funciona en todas ellas?

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/eje3.png)

Cómo se puede observar para la versión 0.12.7 se ejecuta correctamente, mientras que para la versión 0.11.16 da un error.

## Ejercicio 4:Crear una descripción del módulo usando package.json. En caso de que se trate de otro lenguaje, usar el método correspondiente. 
Se crea el package.json usando el comando npm init

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/ejercicio4.png)


## Ejercicio5: Automatizar con grunt y docco (o algún otro sistema) la generación de documentación de la librería que se cree. Previamente, por supuesto, habrá que documentar tal librería.

1.sudo npm install -g grunt-cli
2.npm install docco grunt-docco --save-dev
3.Gruntfile.js

    'use strict';  
    
    module.exports = function(grunt) {  
      // Configuración del proyecto  
      grunt.initConfig({  
     pkg: grunt.file.readJSON('package.json'),  
     docco: {  
	     debug: {  
	     src: ['express.js'],  
	     options: {  
	       	  output: 'docs/'  
	     }  
    	  }  
     }  
     });  

  
    grunt.loadNpmTasks('grunt-docco');
    grunt.registerTask('default', ['docco']);
    };


![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/grunt_docco.png)  
Y al usar grunt docco, se genera correctamente la documentacion en /docs.

## Ejercicio 6:Para la aplicación que se está haciendo, escribir una serie de aserciones y probar que efectivamente no fallan. Añadir tests para una nueva funcionalidad, probar que falla y escribir el código para que no lo haga (vamos, lo que viene siendo TDD).

Ejemplo de aserción: ExisteEmpresa(nombreEmpresa)

    var assert = require("assert");  
    var express = require("express");  
    empresa = require(__dirname+"/express.js");  


    assert(empresa,"creada");  

    empresa.ExisteEmpresa(  
	   "Microsoft",function(err,data){  
	   assert.equal(data,true);  
	   console.log("pruebas superadas");  
	

    });

Devuelve true si la empresa ya existe. 

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/assertado.png)


En caso contrario devuelve false:

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/failassert1.png)


## Ejercicio 7:Convertir los tests unitarios anteriores con assert a programas de test y ejecutarlos desde mocha, usando descripciones del test y del grupo de test de forma correcta. Si hasta ahora no has subido el código que has venido realizando a GitHub, es el momento de hacerlo, porque lo vamos a necesitar un poco más adelante.

1.npm -g install mocha
2.Creamos el archivo mocha.js para las pruebas
3. Añadimos como script de los test la orden "mocha" en el package.json
4. Ejecutamos la orden mocha o npm test, probando fallo y acierto:

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/failmocha.png)

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/mochaexiste.png)




## Ejercicios 8:Ejercicio: Haced los dos primeros pasos antes de pasar al tercero.

1.Dentro de la plataforma http://travis-ci.org/ iniciamos sesion con nuestra cuenta de Github.
2.se añade un archivo .travis.yml al repositorio:

    language: node_js
    node_js:
     - "0.12"
     - "0.11"
  
    before_install:
      - npm install -g mocha
      - npm install -g sqlite3
  
3.En mi caso, se ejecuta perfectamente con la version 0.12, sin embargo encuentra en error en la 0.11

![](http://googledrive.com/host/0ByKPAGLB_FgcU1E3LVk2dWxsVzA/travis1.png)







