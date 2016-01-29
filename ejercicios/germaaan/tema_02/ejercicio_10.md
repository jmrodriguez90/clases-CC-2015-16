# Ejercicio 10
## Realizar un pequeño programa, en el lenguaje elegido y sobre la base de datos "tradicional" elegida (PostgreSQL o cualquier otro online) que realice el ciclo básico de una base de datos. Puede ser la aplicación de calificación de empresas realizada anteriormente.
El programa que he realizado para este ejercicio se puede encontrar en [este repositorio](https://github.com/germaaan/calificaEmpPost). Antes de ejecutar el programa es importante exportar la varible de entorno `DATABASE_URL` con la información para conectar a base de datos PostgreSQL, pudiendo esta estar en nuestra máquina local o como en este caso en la nube mediante la plataforma [ElephantSQL](http://www.elephantsql.com/).

```
export DATABASE_URL=postgres://USUARIO:CONTRASEÑA@URL:PUERTO/BASEDATOS
```

- Ejecutar la consulta de selección `SELECT * FROM calificaciones` mediante la dirección [http://localhost:3000/](http://localhost:3000/):

![eje10_img01.png](https://dl.dropboxusercontent.com/s/z6rn1egoiuq8boy/eje10_img01.png)
- Ejecutar la consulta de inserción `INSERT INTO calificaciones(empresa, alumno, calificacion) VALUES('meh', 'germaaan', '0')` mediante la dirección [http://localhost:3000/insert/meh/germaaan/0](http://localhost:3000/insert/meh/germaaan/0):

![eje10_img02.png](https://dl.dropboxusercontent.com/s/yr1ceezgtuoera4/eje10_img02.png)
- Ejecutar la consulta de actualización `UPDATE calificaciones SET calificacion=100 WHERE id=43` mediante la dirección [http://localhost:3000/update/43/100](http://localhost:3000/update/43/100):

![eje10_img03.png](https://dl.dropboxusercontent.com/s/g0o3xiptbn1r9iz/eje10_img03.png)
- Ejecutar la consulta de eliminación `DELETE FROM calificaciones WHERE id=43` mediante la dirección [http://localhost:3000/delete/43](http://localhost:3000/delete/43):

![eje10_img04.png](https://dl.dropboxusercontent.com/s/ke813l9hz7ni6v8/eje10_img04.png)
