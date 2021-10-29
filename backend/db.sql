DROP DATABASE IF EXISTS limaturismo;
CREATE DATABASE limaturismo;
USE limaturismo;

CREATE TABLE T_Comentarios(
	comment_id int NOT NULL AUTO_INCREMENT,
	name_user varchar(50) NOT NULL,
	lname_user varchar(50) NOT NULL,
	coments_user varchar(255),
	points_obtained int NOT NULL,
	time_comment DATETIME NOT NULL,
    PRIMARY KEY (comment_id)
);

CREATE TABLE 

INSERT INTO T_Comentarios(name_user,lname_user,coments_user,points_obtained,time_comment) 
VALUES ('Wanly','Obregon','Me parece muy buena la interfaz',10,now()),
('Luis','Izaguirre','Interesante pero le falta mas animacion',8,now()),
('Valerie','Ore','Estuvo muy lindo woow!!',10,now()),
('Pedro','Rodriguez','Hicieron lo que pudieron xd',2,now());

SELECT name_user,lname_user,coments_user,points_obtained,time_comment
FROM T_Comentarios;
