DROP DATABASE IF EXISTS pizza_db;

CREATE DATABASE pizza_db;

USE pizza_db;

CREATE TABLE sauce (
  id int AUTO_INCREMENT NOT NULL,
  sauce_type varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE cheese (
  id int AUTO_INCREMENT NOT NULL,
  cheese_type varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE meat (
  id int AUTO_INCREMENT NOT NULL,
  meat_type varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE veggies (
  id int AUTO_INCREMENT NOT NULL,
  veggies_type varchar(30) NOT NULL,
  PRIMARY KEY (id)
);

