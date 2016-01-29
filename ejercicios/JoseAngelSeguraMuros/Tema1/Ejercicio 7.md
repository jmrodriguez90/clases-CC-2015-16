##Ejercicio7
###Convertir los tests unitarios anteriores con assert a programas de test y ejecutarlos desde mocha, usando descripciones del test y del grupo de test de forma correcta. Si hasta ahora no has subido el código que has venido realizando a GitHub, es el momento de hacerlo, porque lo vamos a necesitar un poco más adelante. 


Especificamos el archivo package.json para mocha de la siguiente manera:

```json
{
  "name": "Ejercicio 7",

  "version": "0.0.1",

  "author": "José Ángel Segura Muros",

  "description": "Pruebas de funcionamiento de las herramientas tipicas para DevOps",

  "keywords": ["pruebas, CC"],

  "devDependencies": {
    "chai": "*",
    "mocha": "*"
  },

  "scripts": {
    "test": "mocha"
  }
}
```


