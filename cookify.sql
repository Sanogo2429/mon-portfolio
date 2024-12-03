drop database if exists cookify;
create database cookify;
use cookify;

create table pays(
id int primary key auto_increment, 
nom varchar(255) 
);

create table type (
id int primary key auto_increment, 
nom varchar(255),  
id_pays int not null,
foreign key (id_pays)  references pays(id)
);

create table sous_type (
    id int primary key auto_increment,
    id_type int,
   foreign key (id_type)  references type(id)
);
create table utilisateur (
    id int primary key auto_increment,
    nom varchar (255),
    prenom varchar(255),
    email varchar(255),
    mot_de_passe varchar(255),
    pseudo varchar(255)

);
create table recette(
    id int primary key auto_increment,
nom varchar(255),
description text,
image varchar(255),
ingredients varchar(255),
temps_preparation int,
id_pays int not null,
id_type int not null,
id_sous_type int not null,
foreign key (id_pays)  references pays(id),
foreign key (id_type)  references type(id),
foreign key (id_sous_type)  references sous_type(id)
);
create table livre (
    id int primary key auto_increment,
    titre varchar(255),
    nombre_page int,
    lien_telecharger varchar (255),
    annee_publication year
);
create table recette_favori(
    id int primary key auto_increment,
    id_recette int not null,
    id_utilisateur int not null,
    foreign key (id_recette)  references recette (id),
   foreign key (id_utilisateur)  references utilisateur(id)
);

create table livre_favori(
    id int primary key auto_increment,
    id_livre int not null,
    id_utilisateur int not null,
  foreign key  (id_livre)   references livre (id),
   foreign key  (id_utilisateur) references utilisateur(id) 
);
create table commentaire (
    id int primary key,
    id_recette int not null,
     id_utilisateur int not null,
    foreign key (id_recette)  references recette(id),
    foreign key  (id_utilisateur) references utilisateur (id)
);

create table categorie(
    id int primary key auto_increment,
    titre varchar(255)
);
create table item (
    id int primary key auto_increment,
    id_categorie int not null, 
    proposition text ,
    foreign key (id_categorie) references categorie (id)
);
create table reponse_proposition (
    id int primary key auto_increment,
    id_item int not null,
foreign key (id_item)  references item (id)
);
create table reponse_utilisateur (
    id int primary key auto_increment,
    id_item int not null,
    id_reponse_proposition int not null, 
    id_utilisateur int not null, 
   foreign key (id_item)  references item (id),foreign key (id_reponse_proposition) references reponse_proposition (id),
  foreign key (id_utilisateur)  references utilisateur (id)
)

