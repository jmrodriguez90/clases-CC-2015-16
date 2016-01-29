##Ejercicio8

###Paso 1

Usaremos Travis por lo que el registro usando GIT es automatico y no lleva mas problemas.

###Paso 2

Como en el paso 1, la activacion del repositorio es trivial para GIT con Travis

###Paso 3

Por ultimo defino e incluyo en el repositorio un archivo .travis.yml con la siguiente información.

```yml
language: python
python:
  - '2.6'
  - '2.7'
# command to install dependencies
install: "pip install -r requirements.txt"
# command to run tests
script: npm install mocha --save-dev; npm install chai; npm install chai-fs;  npm test

```
