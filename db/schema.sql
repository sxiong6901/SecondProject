DROP DATABASE IF EXISTS pizza_db;

CREATE database pizza_db;

USE pizza_db;

CREATE TABLE pizza (
  name INTEGER NOT NULL auto_increment PRIMARY KEY,
  sauce VARCHAR(30),
  cheese VARCHAR(30),
  meat VARCHAR(30),
  veggies VARCHAR(30),
  devoured BOOLEAN DEFAULT false
  );