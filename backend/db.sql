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
	lugar_id int NOT NULL,
	name_user varchar(50) NOT NULL,
	lname_user varchar(50) NOT NULL,
	coments_user varchar(255),
	points_obtained int NOT NULL,
	time_comment DATETIME NOT NULL,
    PRIMARY KEY (id, lugar_id),
	FOREIGN KEY (lugar_id) REFERENCES lugar (id)
);

-- Trivias
CREATE TABLE trivias (
	id int NOT NULL AUTO_INCREMENT,
	lugar_id int NOT NULL,
	PRIMARY KEY (id, lugar_id),
	FOREIGN KEY (lugar_id) REFERENCES lugar (id)
);

-- Preguntas
CREATE TABLE preguntas (
	id int NOT NULL AUTO_INCREMENT,
	lugar_id int NOT NULL,
	trivia_id int NOT NULL,
	pregunta varchar(255) NOT NULL,
	PRIMARY KEY (id, lugar_id, trivia_id),
	FOREIGN KEY (trivia_id, lugar_id) REFERENCES trivias (id, lugar_id)
);

-- Respuestas
CREATE TABLE respuestas (
	id int NOT NULL AUTO_INCREMENT,
	lugar_id int NOT NULL,
	trivia_id int NOT NULL,
	pregunta_id int NOT NULL,
	respuesta varchar(255) NOT NULL,
	correcta BOOLEAN NOT NULL,
	PRIMARY KEY (id, lugar_id, trivia_id, pregunta_id),
	FOREIGN KEY (pregunta_id, lugar_id, trivia_id) REFERENCES preguntas(id, lugar_id, trivia_id)
);



-- Tabla de imagenes de lugares turisticos

/*
INSERT INTO comentarios(name_user,lname_user,coments_user,points_obtained,time_comment) 
	VALUES ('Wanly','Obregon','Me parece muy buena la interfaz',10,now()),
	('Luis','Izaguirre','Interesante pero le falta mas animacion',8,now()),
	('Valerie','Ore','Estuvo muy lindo woow!!',10,now()),
	('Pedro','Rodriguez','Hicieron lo que pudieron xd',2,now());

select COLUMN_NAME, CONSTRAINT_NAME, REFERENCED_COLUMN_NAME, REFERENCED_TABLE_NAME
 from information_schema.KEY_COLUMN_USAGE
where TABLE_NAME = 'respuestas';*/