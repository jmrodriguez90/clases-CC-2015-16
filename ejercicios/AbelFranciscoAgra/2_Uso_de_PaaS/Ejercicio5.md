#Ejercicio 5

Usar como base la aplicación de ejemplo de _Heroku_ y combinarla con la aplicación en _node.js_ que se ha creado anteriormente.
 
###Pasos realizados para la resolución del ejercicio:

1. Actualizar las dependencias y complementos definidos en el _package.json_ de la aplicación base de _Heroku_, para incluirlos en el archivos de configuración correspondiente del programa de calificación de empresas.

2. Definir un archivo [_Procfile_](https://github.com/jfrancisco4490/calificacionEmpresa_2/blob/master/Procfile), para la configuración de la aplicación en _Heroku_. En este caso, el _Procfile_ simplemente indica lo que se debe hacer para ejecutar la aplicación _web_:

 `web: node routes/index.js`