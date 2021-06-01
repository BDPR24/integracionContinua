# integracionContinua

_Siga los pasos a continuacion descritos para ejecutar los contenedores y conectarlos entre si._

###pre-requisitos 📋

_descarga docker desktop en el siguiente enlace 👇_

[Docker Desktop](https://desktop.docker.com/win/stable/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=header)

###Instrucciones 🔧

## Construccion 🛠️

_En este repositorio y ejecute las siguientes instrucciones_

```
docker build ./docker1 -t <your_name>/backend1
docker build ./docker2 -t <your_name>/backend2
```

## Despliegue 📦

_Ejecute las imagenes creadas en el paso anterior con los siguientes comandos_

```
docker run -p 3000:3000 -d <your_name>/backend1
docker run -p 4000:4000 -d <your_name>/backend2
```

_en su navegador vaya a la siguiente direccion_

[backend1](http://localhost:3000)
[backend1](http://localhost:4000)

_deveria ver el siguiente mensaje desde cada link_

```
Hello buddy, im running in the port: 3000
```

```
Hello buddy, im running in the port: 4000
```

##Conexion 🖇️



