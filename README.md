# Propuesta de proyecto para el curso de Desarrollo Basado en Plataformas (DBP)

## Grupo 4
- **Pedro Domínguez** 
  - Correo: pedro.dominguez@utec.edu.pe
  - GitHub: [PedroDominguezUTEC](https://github.com/PedroDominguezUTEC)
- **Luis Izaguirre**
  - Correo: luis.izaguirre@utec.edu.pe
  - GitHub: [LuisIZ](https://github.com/LuisIZ)
- **Marco Wanly Obregón**
  - Correo: marco.obregon@utec.edu.pe
  - GitHub: [Wanly Obregon](https://github.com/wanly13)
- **Dafne Ore**
  - Correo: dafne.ore@utec.edu.pe
  - GitHub: [DafneOre](https://github.com/DafneOre)

---------------------------------------------

# Tema del proyecto

`Turismo en Lima`

## Finalidad de nuestro proyecto
Luego de la gran caída que tuvo el turismo debido a la pandemia, este proyecto busca promover el turismo en Lima mostrando los atractivos de cada lugar, platos tipicos y lugares recreacionales que podrian visitar mientras interactúan con nuestra web a través de trivias y la sección de comentarios donde se busca una mayor inclusion del usuario. 

---------------------------------------------

## P1: Turismo en Lima (Aplicación Web)

Turismo en Lima es una aplicación web que permite encontrar lugares típicos limeños.  

La aplicación web incluye:
- Página de bienvenida.
- Un mapa interactivo que:
  - Permite escoger diferentes locaciones turísticas en Lima.
  - Muestra una descripción personalizada de la locación.
  - Una sección de comentarios.
  - Un juego de trivia para aquellos usuarios que ya hayan visitado el lugar.
- Un buscador.
- Una opción de "Llévame a un lugar aleatorio en Lima".

### Motivacion
La motivación para crear la web se encontró en [Where in Warcraft?](https://www.kruithne.net/where-in-warcraft/) la cual es una aplicación de un videojuego conocido que muestra múltiples locaciones del mundo del juego y reta a sus jugadores a adivinar qué locación es. De manera similar se pretendía hacer con la ciudad de Lima, pero luego se decidió expandir la idea.

---------------------------------------------
<!-- # P2: Turismo en Lima App (Aplicación Móvil)

Turismo en Lima App es una aplicación móvil que posee las mismas características que la web de Turismo en Lima con algunas diferencias:

- En la página de bienvenida se tendrá acceso a la sección de trivias.
- Se incluirá descuentos en restaurantes por trivias completadas.
- La posiblidad de completar una trivia sobre múltiples locaciones.
- Un sistema de ranking
- Una opción de feedback del app

### Motivacion
La motivación para crear el app se encontró en el deseo de querer ofrecer a los usuarios funcionalidades que son más cómodas de utilizar en un ambiente móvil. Una diferencia con la aplicación web es la opción de ganar descuentos restaurantes tras completar una trivia.

La finalidad del app es la de complementar la página web y ofrecer una experiencia cómoda móvil. 

--------------------------------------------- -->
## Funcionalidades

| Angular Route | Backend URLs | Funcionalidad |
| --- | --- | --- |
| `/comments` | `GET /comments` | Obtener los comentarios | 
| `/questions/:trivia_id` | `GET /questions/:trivia_id` | Obtener preguntas de la trivia identificadas por ID | 
| `/comments` | `POST /comments` |Publicar comentarios | 
| `/comments/:id` | `DELETE /comments/:id` | Eliminar comentarios identificadas por ID | 
| `/places` | `GET /places` | Obtener informacion de los lugares |
| `/places/:id` | `GET /places/:id` | Se tiene la informacion de los lugares identificadas por ID |  
| `/answers/:pregunta_id` | `GET /answers/:pregunta_id` | Tiene las respuestas correctas de las preguntas en la trivia identificadas por ID |  
| `/trivias` | `GET /trivias` | De modo general la funcion de trivias  |  


## Instalación

### Base de datos

1. Abrir MySQL
2. Ejecutar el script de inicialización de la DB:

`source turismolima.sql`

3. Necesita tener el siguiente usuario:

- Usuario: `utec`
- Clave: `1234567890`

### Backend

1. Instalar dependencias

`npm install`

2. Iniciar el proyecto

`node index.js`

### Frontend

1. Instalar dependencias

`npm install`

2. Iniciar el proyecto

`ng serve --open`

