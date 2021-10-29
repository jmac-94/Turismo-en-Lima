DROP DATABASE IF EXISTS limaturismo;
CREATE DATABASE limaturismo;
USE limaturismo;

-- Comentarios
CREATE TABLE comentarios (
	comment_id int NOT NULL AUTO_INCREMENT,
	name_user varchar(50) NOT NULL,
	lname_user varchar(50) NOT NULL,
	coments_user varchar(255),
	points_obtained int NOT NULL,
	time_comment DATETIME NOT NULL,
    PRIMARY KEY (comment_id)
);

--Respuestas
CREATE TABLE respuestas (
	respuesta_id int NOT NULL,
	respuesta varchar(255) NOT NULL,
	PRIMARY KEY (respuesta_id)
);

--Preguntas
CREATE TABLE preguntas (
	pregunta_id int NOT NULL,
	pregunta varchar(255) NOT NULL,
	correcta int NOT NULL,
	PRIMARY KEY (pregunta_id),
	FOREIGN KEY (correcta) REFERENCES respuestas (respuesta_id)
);

CREATE TABLE trivia (
	trivia_id int NOT NULL,
	PRIMARY KEY (trivia_id)
);

-- Lugares turisticos
CREATE TABLE lugar (
	lugar_id int NOT NULL AUTO_INCREMENT,
	nombre varchar(50) NOT NULL,
	descripcion varchar(300) NOT NULL,
	ranking int NOT NULL,
	trivia_id int,
	PRIMARY KEY (lugar_id),
	FOREIGN KEY (trivia_id) REFERENCES trivia (trivia_id)
);

-- Tabla de imagenes de lugares turisticos

-- 
INSERT INTO comentarios(name_user,lname_user,coments_user,points_obtained,time_comment) 
	VALUES ('Wanly','Obregon','Me parece muy buena la interfaz',10,now()),
	('Luis','Izaguirre','Interesante pero le falta mas animacion',8,now()),
	('Valerie','Ore','Estuvo muy lindo woow!!',10,now()),
	('Pedro','Rodriguez','Hicieron lo que pudieron xd',2,now());

INSERT INTO T_Comentarios(name_user,lname_user,coments_user,points_obtained,time_comment) 
VALUES ('Wanly','Obregon','Me parece muy buena la interfaz',10,now()),
('Luis','Izaguirre','Interesante pero le falta mas animacion',8,now()),
('Valerie','Ore','Estuvo muy lindo woow!!',10,now()),
('Pedro','Rodriguez','Hicieron lo que pudieron xd',2,now());

INSERT INTO T_Comentarios(name_user,lname_user,coments_user,points_obtained,time_comment) 
VALUES ('Wanly','Obregon','Me parece muy buena la interfaz',10,now()),
('Luis','Izaguirre','Interesante pero le falta mas animacion',8,now()),
('Valerie','Ore','Estuvo muy lindo woow!!',10,now()),
('Pedro','Rodriguez','Hicieron lo que pudieron xd',2,now());

