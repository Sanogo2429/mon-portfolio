drop database if exists cookify 
create database cookify
use cookify

create table pays(
id int primary key auto_increment, 
nom string  

);
create table type (
id int primary key auto_increment, 
nom string   

);



create table pays_type(
id_pays int not null,
id_type int not null,
foreign key(id_pays) references pays(id),
foreign key(id_type) references type (id)
)
create table sous_type (
    id int primary key auto_increment,
) 
create table recette(
    id 
)
