Crear pruebas para las diferentes rutas de la aplicación.
======================================================================

*Usando una aplicación ya construida, procedí a comprobar las direccones con Mocha*

* Accedí a la aplicación que se encuentra en el siguiente directorio [**Calificar Empresas**](https://github.com/jmrodriguez90/Tema3_CalificarEmpresas)
* Desde la terminal, usé el comando `mocha test.js` del directorio de [**Test**](https://github.com/jmrodriguez90/Tema3_CalificarEmpresas/tree/master/test)
* Se obtuvo el siguiente resultado
```
  Prueba de acceso
GET / 200 546.898 ms - 3920
    ✓ Página principal (568ms)
GET /crearEmpresa/EMPRESA 200 82.848 ms - 3957
    ✓ Crear empresa (95ms)
GET /listarCalificaciones/EMPRESA 200 55.525 ms - 4050
    ✓ Listar calificaciones empresa (60ms)
GET /crearCalificacion/EMPRESA/ALUMNO/0 200 54.815 ms - 3985
    ✓ Crear calificación alumno empresa (60ms)
GET /actualizarCalificacion/EMPRESA/ALUMNO/100 200 61.083 ms - 3988
    ✓ Actualizar calificación alumno empresa (63ms)
GET /borrarCalificacion/EMPRESA/ALUMNO 200 54.213 ms - 3984
    ✓ Borrar calificación alumno empresa (56ms)
GET /generarRanking 200 41.368 ms - 4174
    ✓ Generar ranking empresas (43ms)
GET /foo 404 26.272 ms - 2564
    ✓ Página de error

```
