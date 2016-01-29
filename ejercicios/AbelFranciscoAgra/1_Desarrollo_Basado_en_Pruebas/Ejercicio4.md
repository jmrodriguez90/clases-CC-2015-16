#Ejercicio 4

Crear una descripción del módulo usando _package.json_. En caso de que se trate de otro lenguaje, usar el método correspondiente. 

###Pasos realizados para la resolución del ejercicio:

1. El archivo [_package.json_](https://github.com/jfrancisco4490/calificacionEmpresa/blob/master/package.json) elaborado presenta las siguientes secciones (solo se destacan las de mayor relevancia):

  - **_main_**: indica el programa principal para la ejecución central de la aplicación (_testCalificacionEmpresa.js_)
  - **_dependencies_**: se indican los módulos requeridos para la ejecución del programa (solo _sqlite3_)
  - **_devDependencies_**: se refiere a los módulos utilizados para el proceso de desarrollo de la aplicación (_grunt_ y _docco_ para la documentación del código)
  - **_engines_**: versiones válidas sobre las que se puede ejecutar la aplicación (_node.js_ en versiones estables superiores a las _0.10_)