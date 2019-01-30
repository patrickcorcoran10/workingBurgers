DROP DATABASE IF EXISTS workingBurgers_db;
CREATE DATABASE workingBurgers_db;
USE workingBurgers_db;

CREATE TABLE burgers (
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(40) NOT NULL,
    devoured BOOLEAN NOT NULL,
    PRIMARY KEY (id)
);

SELECT * FROM workingBurgers_db;