DROP DATABASE IF EXISTS pizza_db;

CREATE database pizza_db;

USE pizza_db;

CREATE TABLE pizza (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  sauce VARCHAR(30),
  cheese VARCHAR(30),
  meat VARCHAR(30),
  veggies VARCHAR(30),
  PRIMARY KEY (id)
  );