DROP DATABASE IF EXISTS limaturismo;
CREATE DATABASE limaturismo;
USE limaturismo;

-- Lugares turisticos
CREATE TABLE lugar (
	id int NOT NULL AUTO_INCREMENT,
	nombre varchar(50) NOT NULL,
	descripcion varchar(300) NOT NULL,
	ranking int NOT NULL,
	PRIMARY KEY (id)
);

-- Comentarios
CREATE TABLE comentarios (
	id int NOT NULL AUTO_INCREMENT,
	name_user varchar(50) NOT NULL,
	lname_user varchar(50) NOT NULL,
	coments_user varchar(255),
	points_obtained int NOT NULL,
	time_comment DATETIME NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE trivias (
	id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id)
);

-- Preguntas
CREATE TABLE preguntas (
	id int NOT NULL AUTO_INCREMENT,
	trivia_id int NOT NULL,
	pregunta varchar(255) NOT NULL,
	PRIMARY KEY (id, trivia_id),
	FOREIGN KEY (trivia_id) REFERENCES trivias (id)
);

-- Respuestas
CREATE TABLE respuestas (
	id int NOT NULL AUTO_INCREMENT,
	trivia_id int NOT NULL,
	pregunta_id int NOT NULL,
	respuesta varchar(255) NOT NULL,
	correcta BOOLEAN NOT NULL,
	PRIMARY KEY (id, trivia_id, pregunta_id),
	FOREIGN KEY (pregunta_id, trivia_id) REFERENCES preguntas(id, trivia_id)
);



-- Tabla de imagenes de lugares turisticos

-- 
INSERT INTO comentarios(name_user,lname_user,coments_user,points_obtained,time_comment) 
	VALUES ('Wanly','Obregon','Me parece muy buena la interfaz',10,now()),
	('Luis','Izaguirre','Interesante pero le falta mas animacion',8,now()),
	('Valerie','Ore','Estuvo muy lindo woow!!',10,now()),
	('Pedro','Rodriguez','Hicieron lo que pudieron xd',2,now());

