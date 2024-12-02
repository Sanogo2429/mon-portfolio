drop database if exists cookify 
create database cookify
use cookify

create table pays(
id int primary key auto_increment, 
nom string  

);
create table type (
id int primary key auto_increment, 
nom string,  
id_pays int not null,
id_pays foreign key references pays(id)
);

create table sous_type (
    id int primary key auto_increment,
    id_type int,
    id_type foreign key references types(id)
);
create table recette(
    id int primary key auto_increment,
'nom' string,
'description' text,
'image' varchar(255),
ingredients varchar(255),
temps_preparation int,
id_pays int not null,
id_type int not null,
id_sous_type int not null,
id_pays foreign key references pays(id),
id_type foreign key references type(id),
id_sous_type foreign key references sous_type(id)
);
create table livre (
    id int primary key auto_increment,
    titre varchar(255),
    nombre_page int,
    annee_publication datetime
)
create table recette_favori(
    id int primary key auto_increment,
    id_recette int not null,
    id_utilisateur int not null,
    id_recette  foreign key references recette (id),
    id_utilisateur foreign key references utilisateur(id)
);

create table livre_favori(
    id int primary key auto_increment,
    id_livre int not null,
    id_utilisateur int not null,
    id_livre  foreign key references livre (id),
    id_utilisateur foreign key references utilisateur(id) 
);
create table commentaire (
    id int primary key,
    id_recette int not null,
     id_utlisateur int not null,
     id_recette foreign key references recette(id),
     id_utlisateur foreign key references utilisateur (id)
)
create table utilisateur (
    id int primary key auto_increment,
    nom varchar (255),
    prenom varchar(255),
    email varchar(255),
    mot_de_passe varchar(255),
    pseudo varchar(255),
    id_recette_favori int, 
    id_livre_favori int, 
    id_commentaire int,
    id_recette_favori foreign key references recette_favori(id),
id_livre_favori foreign key references livre_favori(id),
id_commentaire foreign key references commentaire (id)
);
create table categorie(
    id int primary key auto_increment,
    titre varchar(255),
)
create table item (
    id int primary key auto_increment,
    id_categorie int not null, 
    text proposition,
)
create table reponse_proposition (
    id int primary key auto_increment,
    id_item int not null,
id_item foreign key references item (id)
)
create table reponse_utilisateur (
    id int primary key auto_increment,
    id_item int not null,
     id_reponse_utlisateur int not null, 
    id_utlisateur int not null, 
   id_item foreign key references item (id),id_reponse_utlisateur foreign key references reponse_utlisateur(id),
   id_utlisateur foreign key references utlisateur (id)
);

