# Ejercicio 1

## Instalar alguno de los entornos virtuales de node.js y, con ellos, instalar la última versión existente, la versión minor más actual de la 0.12 y lo mismo para la 0.11 o alguna impar. Si no se usa habitualmente este lenguaje, hacer lo mismo con cualquier otro lenguaje de scripting.

He decidido instalar el entorno virtual NVM para lo que previamente voy a necesitar **curl** y **git**.
Como el caso del segundo ya está instalado paso a instalar Curl.

```
sudo apt-get install -y curl
```

Curl lo voy a utilizar para descargar el scrip de instalación desde Github.


```
curl https://raw.githubusercontent.com/creationix/nvm/v0.10.0/install.sh | sh
```

Una vez instalado podemos ver las versiones que podemos instalar.
```
nvm ls-remote
```

En el caso de este ejercicio vamos a instalar las versiones *0.11.16* y *0.12.7* de Node.js.
```
nvm install v0.11.16
nvm install v0.12.7
```

![ejer1_img1](http://googledrive.com/host/0B5Yam2FWqtZPZzR3TTBaSUpMZ2M/Ejercicio1_1.jpg)

![ejer1_img2](http://googledrive.com/host/0B5Yam2FWqtZPZzR3TTBaSUpMZ2M/Ejercicio1_2.jpg)