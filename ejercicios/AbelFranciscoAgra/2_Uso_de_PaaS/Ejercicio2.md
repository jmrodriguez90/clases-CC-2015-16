#Ejercicio 2

Crear una aplicación en _OpenShift_ y dentro de ella instalar _WordPress_. 

###Pasos realizados para la resolución del ejercicio:

1. Se selecciona la opción de _Crear Aplicación_ (si es la primera aplicación, existe una opción directa llamada _Crear tu Primera Aplicación Ahora_).

2. Seleccionar el tipo de aplicación a crear:

 - Cuenta con una amplia lista de tipos de aplicaciones _web_ (y un buscador para las mismas). 
 
 - Los tipos de aplicaciones se encuentran agrupados por lenguajes de programación (_Java_, _Python_, _Ruby_, etc.) o _Frameworks_ de desarrollo o integración (_Jenkins_, _Drupal_, _WordPress_, entre otros).
 
 - Se selecciona, bajo el grupo "Aplicación Instantánea" (_Instant App_), la opción de _WordPress 4_.
 
3. Configurar la aplicación a crear:

 - Seleccionar la _URL_ desde la que se podrá acceder a la aplicación. Se debe indicar un nombre de aplicación y un nombre de dominio (utilizado para todas las aplicaciones de la cuenta). La _URL_ pública es de la forma https://< nombre_aplicacion >-< nombre_dominio >.rhcloud.com
 
 - Se indica el repositorio de _GitHub_ desde el cual se inicializarán los archivos por defecto de la aplicación (dependiendo del tipo y lenguaje seleccionado). _Openshift_ cuenta con repositorios de inicialización/ejemplos de cada tipo de aplicación posible.

 - Se indica el contenedor en el cual se ejecutará la aplicación (llamados _gears_), el cual define la cantidad de recursos disponibles. Para cuentas gratuitas solo se puede seleccionar un contenedor básico (_small gear_).
 
 - Se puede seleccionar la región geográfica en la que se desea desplegar la aplicación (Estados Unidos, Europa, etc.). Las cuentas gratuitas (_small gears_) solo pueden desplegar sus aplicaciones en la región Norteamericana (US).
 
4. Se puede iniciar la edición del código de la aplicación directamente o finalizar con el despliegue básico (en este caso, se utiliza la última opción).

5. Finalmente, se especifica un resumen de la instalación y despliegue de la aplicación _web_, así como algunos datos adicionales de configuración para otros elementos instalados. En este caso, motor de base de datos incluido (_MySQL 5.5_) y lenguaje de programación (_PHP 5.4_).

6. La aplicación puede ser accedida mediante un navegador _web_ en la _URL_ especificada durante el paso 3. Para el presente ejercicio, la dirección es: [https://example-jfrancisco.rhcloud.com](https://example-jfrancisco.rhcloud.com)

7. Es importante destacar que para acceder remotamente al código de la aplicación (y hacer/subir cambios sobre el mismo), se debe incluir una clave SSH pública, para que los servidores de _Openshift_ puedan validar los accesos remotos al código fuente de la aplicación.