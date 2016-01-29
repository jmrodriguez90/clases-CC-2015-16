**Crear una aplicación mínima y usar un buildpack no estándar para desplegarla en Heroku o un cartridge no estándar en OpenShift.**

Para usar un buildpack que no sea estándar podemos observar la lista de [buildpacks de terceros](https://devcenter.heroku.com/articles/third-party-buildpacks#third-party-buildpacks).

Elegimos **Lua** cuyo buildpack está especificado en el siguiente repositorio [https://github.com/leafo/heroku-buildpack-lua](https://github.com/leafo/heroku-buildpack-lua).

Para crear una aplicación básica con Lua en Heroku :

```heroku create --buildpack http://github.com/leafo/heroku-buildpack-lua.git```

![luaheroku](https://i.gyazo.com/e41993828dfdff8e7eda81a4c4733e62.png)
> Creando una app de Lua en Heroku.

[http://basico-lua.herokuapp.com/](http://basico-lua.herokuapp.com/)

Podemos seguir los pasos indicados en el siguiente [tutorial](http://leafo.net/posts/lua_on_heroku.html) para crear un servidor usando **Xavante**.

