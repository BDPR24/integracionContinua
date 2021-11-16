# Integracion Continua - Poli

_Siga los pasos a continuacion descritos para ejecutar los contenedores y conectarlos entre si MISMO._

### pre-requisitos 📋

_descarga docker desktop en el siguiente enlace 👇_

[Docker Desktop](https://desktop.docker.com/win/stable/amd64/Docker%20Desktop%20Installer.exe?utm_source=docker&utm_medium=webreferral&utm_campaign=dd-smartbutton&utm_location=header)

### Instrucciones 🔧

## Construccion 🛠️

_En este repositorio y ejecute las siguientes instrucciones_

```
docker build ./docker1 -t backend1
docker build ./docker2 -t backend2
```

## Despliegue 📦

_Ejecute las imagenes creadas en el paso anterior con los siguientes comandos_

```
docker run -p 3000:3000 -d backend1
docker run -p 4000:4000 -d backend2
```

_en su navegador vaya a la siguiente direccion_

[backend1](http://localhost:3000)
[backend1](http://localhost:4000)

_Deberia ver el siguiente mensaje desde cada link_

```
Hello buddy, im running in the port: 3000
```

```
Hello buddy, im running in the port: 4000
```

## Conexion 🖇️

_para realizar la conexion entre los dos contenedores debe crear una red de tipo brige y nombrarla_

```
docker network create --driver bridge mynetwork
```
_revise que ha creado su red_
```
docker network inspect mynetwork
```

_conecte los contenedores con los siguientes comandos_

```
docker run -dit --name backend1 --network mynetwork alpine ash
```
```
docker run -dit --name backend2 --network mynetwork alpine ash
```

## Revision de conexion

_visite la siguiente url para confirmar que el segundo contenedor esta respondiendo al primero_

[contendor2](http://localhost:3000/docker) -http://localhost:3000/docker


_visite la siguiente url para confirmar que el primer contenedor esta respondiendo al segundo_

[contendor2](http://localhost:4000/docker) - http://localhost:4000/docker


--
