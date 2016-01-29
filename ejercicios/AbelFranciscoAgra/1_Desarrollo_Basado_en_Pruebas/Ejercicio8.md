#Ejercicio 8

- Darse de alta en algún servicio de integración continua.
- Activar el repositorio en el que se vaya a aplicar la integración continua.
- Crear un fichero de configuración para que se ejecute la integración y añadirlo al repositorio.

###Pasos realizados para la resolución del ejercicio:

1. Para el presente ejercicio, se utilizará la herramienta de integración continua _Travis CI_. El registro en esta herramienta puede realizarse directamente asociando la cuenta correspondiente de _GitHub_.

2. Al finalizar el registro, se pueden seleccionar los repositorios administrados en la cuenta de _GitHub_ sobre los cuales se desean ejecutar las acciones definidas (programas de _test_). Las pruebas se aplican cada vez que se realice un _push_ del repositorio, o directamente desde la interfaz de configuración del repositorio correspondiente en _GitHub_. En este caso, se activa la integración continua y pruebas automáticas sobre el repositorio de ejercicios [calificacionEmpresas](https://github.com/jfrancisco4490/calificacionEmpresa)

3. Se define un archivo de configuración [_.travis.yml_](https://github.com/jfrancisco4490/calificacionEmpresa/blob/master/.travis.yml), ubicado en la raíz del repositorio. Este archivo contiene las siguientes secciones:

 - **_language_**: indica el lenguaje de programación sobre el cual se ha desarrollado la aplicación a probar. En este caso _node.js_
 - **_node_js_**: presenta las versiones de _node.js_ sobre las cuales se desean ejecutar las pruebas de la aplicación (cada vez que se realice un _push_, se ejecutará el grupo de _tests_ definidos sobre cada una de las versiones indicadas). En este caso, se aceptan las versiones estables de _node.js_ superiores a la _0.10_.
 - **_before_install_**: secuencia de comandos a ejecutar antes de instalar la aplicación y ejecutar las pruebas. En este caso, se debe crear el archivo de base de datos y cargar algunos datos de prueba, utilizando _sqlite3_.

4. Se realiza un _commit_ y _push_ del repositorio activo en la integración continua, y se ejecutan de forma automática (utilizando _mocha_) las pruebas definidas en el archivo [_test.js_](https://github.com/jfrancisco4490/calificacionEmpresa/blob/master/test/test.js).

Los resultados de las pruebas son exitosos en las tres (3) versiones de _node.js_ definidas, tal como se puede observar en la imagen del estado de las pruebas de _Travis CI_, la cual ha sido incluida en el archivo [README](https://github.com/jfrancisco4490/calificacionEmpresa/blob/master/README.md) principal del repositorio.