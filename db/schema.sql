drop database if exists workingBurgers_db;
create database workingBurgers_db;
use workingBurgers_db;

create table burgers (
    id int AUTO_INCREMENT not null,
    burger_name varchar(40) not null,
    devoured boolean not null,
    primary key(id)
);