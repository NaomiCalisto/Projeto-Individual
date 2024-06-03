-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database astro;
use astro;

create table Usuario(
	idUsuario int primary key auto_increment,
	nome varchar(45),
	sobrenome varchar(45),
	email varchar(45) unique,
    senha varchar(45),
	diaInscricao datetime default current_timestamp);
    
create table Scoreboard(
	idScoreboard int primary key auto_increment,
    score int,
	momento datetime default current_timestamp,
    fkUsuario int,
		foreign key (fkUsuario) references Usuario(idUsuario));
        
create table Avaliacao(
	idAvaliacao int auto_increment,
    fkUsuario int unique,
     primary key (idAvaliacao, fkUsuario),
	nota int);