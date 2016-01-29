#!/bin/bash
# Script para autoconfigurar juju con mysql y mediawiki en cualquier máquina

# Inicializar el entorno de juju
juju init

# Seleccionar un entorno de trabajo local
sed -i 's/default: amazon/default: local/g' ~/.juju/environments.yaml
juju switch local

# Crear el contenedor juju
juju bootstrap

# Instalar mysql
juju deploy mysql

# Instalar mediawiki
juju deploy mediawiki

# Crear la relación necesaria entre mediawiki y mysql
juju add-relation mediawiki:db mysql

# Publicar el acceso al servicio mediawiki
juju expose mediawiki
