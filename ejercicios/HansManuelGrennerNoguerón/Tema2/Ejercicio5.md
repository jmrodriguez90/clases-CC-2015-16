**Usar como base la aplicación de ejemplo de heroku y combinarla con la aplicación en node que se ha creado anteriormente. Probarla de forma local con foreman. Al final de cada modificación, los tests tendrán que funcionar correctamente; cuando se pasen los tests, se puede volver a desplegar en heroku.**

**Como en todos los ejemplos anteriores, se puede cambiar “node” y “heroku” por la herramienta que se haya**

Instalamos en primer lugar la herramienta **foreman**.

```sudo gem install foreman```

Necesitaremos configurar el fichero **Procfile** para que Heroku pueda iniciar la página web. Dado que se trata de una aplicación en python el script sería:

```
web: python script.py
```

Ya podemos lanzar en local nuestra aplicación.

```foreman start web```

![foreman](https://i.gyazo.com/4c572a890cf267a4db83b84aeab8084d.png)
> Figura 1. Aplicación en ejecución local usando foreman.

Procedemos a crear la aplicación en Heroku indicado que la build se hará en python.

```heroku create --buildpack heroku/python projectcc-heroku```

Y desplegamos la aplicación.

```git push origin master```

![heroku](https://i.gyazo.com/d0af9358580159b699d288a5bde45b8a.png)
>Figura 2. Desplegando en heroku.
