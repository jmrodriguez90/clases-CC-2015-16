**José Cristóbal López Zafra - Ejercicios del [tema 5](https://dl.dropboxusercontent.com/u/4144051/cc_t4_t5.html)**

##**Gestión de configuraciones: [Ansible](http://es.slideshare.net/pacvslideshare/cloud-computing-gestin-de-configuraciones-ansible)**

### Instala Ansible en tu sistema

Simplemente ejecutamos `sudo apt-get install ansible`

### Configura el fichero de inventario de las IPs de dos máquinas

Sabiendo sus IPs, las añadimos al fichero con:

`echo "IP de la máquina" >> ./ansible_hosts`
 
`export ANSIBLE_HOSTS=./ansible_hosts`

### Usa Ansible para hacer ping a ambas máquinas

Hacemos ping con `ansible all  -m ping -u pedro  --ask-pass` (usuario "pedro" ya que usamos la máquina Debian que proporciona el profesor)

### Usa Ansible para instalar Apache en ambas máquinas

Lo hacemos sin "playbook", mediante el comando `ansible all -m command -a 'sudo apt-get install -y apache2' -u pedro --ask-pass --ask-sudo-pass`

### Crea un "playbook" para Ansible con el que instalar PHP. Amplicalo en ambas máquinas.

Creamos un "playbook" llamado "ansible_playbook_php.yml" para instalar varios paquetes de PHP, que contenga:

```
- hosts:all
  sudo: yes
  tasks:
    - name: instalar PHP
      apt:pkg={{ item }} state=installed update_cache=true
      with_items:
        - php5-cli
        - php5-curl
        - php5-fpm
        - php5-intl
        - php5-json
        - php5-mcrypt
        - php5-sqlite
```

Y ejecutamos: `ansible-playbook ansible_playbook_php.yml -u pedro --ask-pass --ask-sudo-pass`



