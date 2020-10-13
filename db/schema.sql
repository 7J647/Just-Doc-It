-- Drops the project2 if it exists currently --
DROP DATABASE IF EXISTS project2;
-- Creates the "project2" database --
CREATE DATABASE project2;

USE project2;

CREATE TABLE trainer
(
	id int NOT NULL AUTO_INCREMENT,
	trainer_name varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE athlete
(
	id int NOT NULL AUTO_INCREMENT,
	athlete_name varchar(255) NOT NULL,
	sport varchar(255) NOT NULL,
    injury_site varchar(255) NOT NULL,
    injury varchar(255) NOT NULL
	PRIMARY KEY (id)
);

CREATE TABLE treatment
(
	id int NOT NULL AUTO_INCREMENT,
	treatment_name varchar(255) NOT NULL,
    length_of_time INTEGER NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE rehab
(
	id int NOT NULL AUTO_INCREMENT,
	exercise varchar(255) NOT NULL,
	num_sets INTEGER NOT NULL NOT NULL,
    num_reps INTEGER NOT NULL NOT NULL,
	PRIMARY KEY (id)
);

SELECT * FROM trainer;

SELECT * FROM athlete;

SELECT * FROM treatment;

SELECT * FROM rehab;