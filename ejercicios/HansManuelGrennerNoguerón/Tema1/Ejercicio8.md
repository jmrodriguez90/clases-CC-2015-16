**Configurar un sistema de integación contínua para la aplicación**

En mi caso he usado travis para ello conectamos travis con github. Una vez activado el repositorio sobre el que queremos realizar la integración contínua creamos el fichero de configuración para travis llamado **.travis.yml**.

```
language: python
python:
  - '2.7'

install: "pip install -r requirements.txt"

services:
  - mongodb

script: npm install mocha --save-dev; npm install mongoose; npm install mocha-mongoose; npm install chai; npm install chai-fs;npm install supertest;  npm test
```

[Aquí](https://travis-ci.org/enpi/ProjectCC/) podemos comprobar los resultados de las builds que se realizarán con cada nuevo push al repositorio.





