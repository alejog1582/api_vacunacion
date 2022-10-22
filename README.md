# api_vacunacion# Prueba técnica Backend Zeleri.

## Lenguaje de Desarrollo y Base de Datos 

- "Node JS": "12.*", -Postgres

## Instalacion

1. Clonar el repositorio en el folderde su elección..

```
https://github.com/alejog1582/api_vacunacion
```

2. Duplique el archivo .env.example incluido en uno de nombre .env y dentro de este ingrese los valores de las variables de entorno necesarias, las básicas serían las siguientes:

- ```PORT=3000``` Puerto donde correrá la aplicación.
- ```DB_HOST="value"``` Variable de entorno para el host de BD.
- ```DB_NAME="value"``` Variable de entorno para el nombre de la tabla en BD.
- ```DB_PORT="value"```Variable de entorno para el puerto de BD.
- ```DB_USER="value"```Variable de entorno para el usuario de BD.
- ```DB_PASSWORD="value"```Variable de entorno para la contraseña de BD.
- ```API_KEY="value"``` Llave de autenticacion a la API.
- ```JWT_SECRET="value"``` Secret firma token.

3. Instalar Paquetes .

```
npm install
```

4. Levantar Base de Datos y pgAdmin con Docker. (Modificar credenciales en el docker-compose.yml)

```
docker-compose up -d postgres
docker-compose up -d pgadmin
```

5. Levantar el servidor en Local.

```
npm run dev
```

6. Correr Migraciones.

```
npm run migrations:run
```

## Descripcion de Rutas

- GET: /api/v1/vaccination => Get all vaccination.
- GET: /api/v1/users => Get all Users.
- GET: /api/v1/users/1 => Get one User.
- GET: /api/v1/drugs => Get all Drugs.
- GET: /api/v1/vaccination/1 => Get one vaccination.
- GET: /api/v1/drugs/1 => Get one Drug.
- PUT: /api/v1/vaccination/1 => Update vaccination.
- PUT: /api/v1/drugs/1 => Update drugs.
- PUT: /api/v1/users/1 => Update User.
- POST: /api/v1/vaccination => Create vaccination.
- POST: /api/v1/drugs => Create drug.
- POST: /api/v1/signup => Create User.
- POST: /api/v1/login => Login User.
- DELETE: /api/v1/vaccination/1 => Delete vaccination.
- DELETE: /api/v1/drugs/1 => Delete vaccination.
- DELETE: /api/v1/users/1 => Delete vaccination.

## Autenticaciones por JWT

- Enviar el token entregado en el login, en las peticiones para poder acceder.

## URL Despliegue Heroku

- https://calm-coast-99394.herokuapp.com/
- Versión API: /api/v1

## Autor

Jose Alejandro Gonzalez Rondon alejog1582@gmail.com. 


