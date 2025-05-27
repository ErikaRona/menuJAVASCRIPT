drop database if exists cecytem;
create database cecytem;
use cecytem;
create table ALUMNO (
id int primary key auto_increment,
nombre varchar(100) not null,
ap varchar(100) not null,
am varchar(100) not null,
fecha date not null,
municipio varchar(100) not null,
color varchar(100) not null,
equipo varchar(100) not null,
signo varchar(100) not null,
serie varchar(100) not null,
comida varchar(100) not null,
tegusta varchar(100) not null,
);

LOAD DATA INFILE ''
INTO TABLE ALUMNO
FIELDS TERMINATED BY ','
OPTIONALLY ENCLOSED BY '"'