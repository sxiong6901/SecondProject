-- Create the database
CREATE DATABASE pizza_db;
USE `pizza_db`;

-- Create the table burgers
CREATE TABLE `sauce`
(
	`id` INT NOT NULL AUTO_INCREMENT,
	`sauce_type` VARCHAR(255) NOT NULL,

);

CREATE TABLE `cheese`
(
	`cheese_type` VARCHAR(255) NOT NULL,

);

CREATE TABLE `meat`
(
	`meat_type` VARCHAR(255) NOT NULL,

);

CREATE TABLE `veggies`
(
	`veggies_type` VARCHAR(255) NOT NULL,

);