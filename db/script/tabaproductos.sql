CREATE DATABASE tareabd;
CREATE TABLE productos (
  id int(11) NOT NULL AUTO_INCREMENT,
  nombre varchar(50) NOT NULL,
  precio int(11) NOT NULL,
  imagen varchar(200) DEFAULT NULL,
  PRIMARY KEY (id)
);