DROP DATABASE IF EXISTS events;
CREATE DATABASE events;

USE events;

CREATE TABLE comingUp(
  ID INT AUTO_INCREMENT NOT NULL,
  event_name VARCHAR(25) NOT NULL,
  event_time INT(10) NOT NULL,
  event_location VARCHAR(25) NOT NULL,
event_about VARCHAR(25) NOT NULL,

    primary key(ID)

);


INSERT INTO comingUp (event_name, event_time, event_location, event_about)
VALUES ("5K", 9, "RALEIGH,NC", "fun run"),
  ("CLEANUP", 8, "WILMINGTON,NC", "keep our oceans clean"),
  ("AWARENESS", 7, "CHARLOTTE,NC", "stay aware");

SELECT * FROM comingUp;