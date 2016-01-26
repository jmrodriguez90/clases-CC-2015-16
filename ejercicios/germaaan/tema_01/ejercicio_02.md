## Ejercicio 2

#### Como ejercicio, algo ligeramente diferente: una web para calificar las empresas en las que hacen prácticas los alumnos. Las acciones serían crear empresa y listar calificaciones para cada empresa, crear calificación y añadirla (comprobando que la persona no la haya añadido ya), borrar calificación (si se arrepiente o te denuncia la empresa o algo) y hacer un ránking de empresas por calificación, por ejemplo. Crear un repositorio en GitHub para la librería y crear un pequeño programa que use algunas de sus funcionalidades. Si se quiere hacer con cualquier otra aplicación, también es válido. Se puede hacer un ejercicio equivalente, siempre que tenga operaciones similares: creación, listado, borrado, ciclo CRUD básico. El objetivo de este ejercicio es poner en práctica lo que viene a continuación, NO es un objetivo de la asignatura.

En [este repositorio](https://github.com/germaaan/calificaEmpresas) se encuentran la librería y el programa de ejemplo, tiene una interfaz web mínima para facilitar su uso, aunque toda las funcionalidades pueden ser accedidas directamente desde la barra de direcciones del navegador. La interfaz cuenta con tres campos de entrada de texto para poder introducir el nombre de la empresa, el nombre del alumno y la calificación de la empresa. Las operaciones que podemos realizar son las siguientes:

- **Crear empresa**: es obligatorio rellenar el campo *"Empresa"*.

![eje02_img01](https://dl.dropboxusercontent.com/s/a2rt616dqzs6601/eje02_img01.png)

- **Listar calificaciones**: es obligatorio rellenar el campo *"Empresa"*.

![eje02_img02](https://dl.dropboxusercontent.com/s/sbxoixxysjwbxdd/eje02_img02.png)

- **Crear calificación**: es obligatorio rellenar todos los campos. No se podrá crear una calificación para una empresa con un nombre de alumno que ya haya creado una calificación para esa empresa.

![eje02_img03](https://dl.dropboxusercontent.com/s/7fxaskwcp5mqs2x/eje02_img03.png)

- **Borrar calificación**: son obligatorios los campos *"Empresa"* y *"Alumno"*. Si no existe una calificación de ese alumno para esa empresa, el programa no hará nada.

![eje02_img04](https://dl.dropboxusercontent.com/s/cvz1h70432jhwv8/eje02_img04.png)

- **Actualizar califación**: son obligatorios todos los campos. Si no existe una calificación de ese alumno para esa empresa, el programa no hará nada.

![eje02_img05](https://dl.dropboxusercontent.com/s/1g78p5vvkdckv7z/eje02_img05.png)

- **Generar ranking**: no es necesario rellenar ningún campo. Las empresas serán ordenadas según su calificación promedia.

![eje02_img06](https://dl.dropboxusercontent.com/s/znmsyx3h84qhkwj/eje02_img06.png)
