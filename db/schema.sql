DROP DATABASE IF EXISTS pizza_db;

CREATE DATABASE pizza_db;

USE pizza_db;

CREATE TABLE sauce (
  id INT NOT NULL AUTO_INCREMENT,
  sauce_type VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cheese (
  id INT NOT NULL AUTO_INCREMENT,
  cheese_type VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE meat (
  id INT NOT NULL AUTO_INCREMENT,
  meat_type VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE veggies (
  id INT NOT NULL AUTO_INCREMENT,
  veggies_type VARCHAR(45) NULL,
  PRIMARY KEY (id)
);

-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
