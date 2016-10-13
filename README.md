#Despliegues en IAAS y Heroku

##Funcionamiento del script
Para actualizar de forma automática el servidor de iaas, moverse al directorio script y ejecutar: ```./script2  ```

##Descripción

El objetivo de esta práctica es proporcionar un mecanismo de despliegue de un libro gitbook de manera que un ```deploy``` a github produzca la actualización automática de los otros sites de despliegue : ,

* gitboook.com

* Heroku

* Para lograr este objetivo usaremos la técnica descrita en el artículo Colaboración: [The Perfect Work-flow with Git, GitHub, and SSH.](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/colaboracion/)

* En el tutorial Colaboración: The Perfect Work-flow with Git, GitHub, and SSH se usa PHP para el código del servidor (que en nuestro caso vamos a hacer que se ejecute en Heroku e iaas). Utilice NodeJS y Express para escribir el servidor.

* En iaas.ull.es, debido a que la IP de la máquina virtual es privada a la red de la ULL, la estrategia explicada en [The Perfect Work-flow with Git, GitHub, and SSH](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/apuntes/colaboracion/)
 no funciona.
Para sincronizar con iaas.ull.es disponga un script que utilice ssh y/o scp para actualizar los ficheros necesarios al repositorio del libro en la máquina virtual.

* Este ejemplo usando el comando ssh sugiere una forma de hacerlo:

```shell
[~/apuntesgitbook(master)]$ ssh sytw 'cd src/express-start; git ls-files'
.gitignore
README.md
hello/hello.js
hello/package.json
hello/views/index.ejs
routes/Rakefile
routes/app.js
routes/birds.js
routes/gulpfile.js
routes/package.json
routes/public/images/kitten.jpg
```

usando este comando nos conectamos a la máquina virtual iaas ```sytw``` (previamente hemos hecho un alias ide la IP a ```sytw``` configurado en ```~/.ssh/config``` y ejecutamos en la misma un comando que nos posiciona en el directorio adecuado y llama al comando ```git```

* Si se tiene establecida una pareja de claves SSH privada-pública entre la máquina de desarrollo (que se supone en la red de la ULL) y la máquina virtual, es posible usar ```ssh``` para conectarse a la máquina virtual y hacer ```un git pull``` en el directorio adecuado.

* Esta solución tampoco trabaja si se está desarrollando en c9, ya que las máquinas de c9 no están en la red de la ULL.

* Parta de los códigos escritos en las prácticas anteriores.

##Referencias

Colaboración: The Perfect Work-flow with Git, GitHub, and SSH
The Perfect Workflow, with Git, GitHub, and SSH
Express
Procesos: Ejecutando comandos Unix
Heroku
iaas
Además repase las secciones utilizadas en las prácticas anteriores:
Creación de Paquetes y Módulos en NodeJS
Gulp
Estudie el paquete ejs para la creación de plantillas
Estudie los paquetes - como fs - para el manejo de archivos en Node.JS
Como se usa el módulo gh-pages para automatizar el despliegue en gh-pages
Como se despliega un libro en www.gitbook.com,
GitBook Plugins

##Autores

1. [Aitor Bernal Falcón](http://alu0100830064.github.io/)
2. [Samuel Ramos Barroso](http://losnen.github.io/)
3. [Joshua Pérez](http://joshuape.github.io/)

##Enlaces

[Enlace a Heroku](https://heroku-iaas-sytw1617.herokuapp.com/)
[Enlace al enunciado en gitbook](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicaiaas.html)
[Enlace al enunciado en el campus](https://campusvirtual.ull.es/1617/mod/workshop/view.php?id=97160)

##Repositorios

* [Fork del repositorio](https://github.com/Losnen/practica-despliegues-en-iaas-y-heroku-aitor-joshua-samuel)
* [Repositorio de entrega](https://github.com/ULL-ESIT-SYTW-1617/practica-despliegues-en-iaas-y-heroku-aitor-joshua-samuel)
