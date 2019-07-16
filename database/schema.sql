DROP DATABASE IF EXISTS events;
CREATE DATABASE events;

USE events;

CREATE TABLE comingUp(
  ID INT AUTO_INCREMENT NOT NULL,
  event_name VARCHAR(25) NOT NULL,
  event_time INT(10) NOT NULL,
  event_location VARCHAR(25) NOT NULL,
  event_host VARCHAR(25) NOT NULL,
  event_about VARCHAR(25) NOT NULL,

    primary key(ID)

);

INSERT INTO comingUp (event_name, event_time, event_location, event_host, event_about) 
VALUES ("5K", 9, "RALEIGH,NC", "Organization", "fun run");

INSERT INTO comingUp (event_name, event_time, event_location, event_host, event_about) 
VALUES ("CLEANUP", 8, "WILMINGTON,NC", "OrganizationTwo", "keep our oceans clean");

INSERT INTO comingUp (event_name, event_time, event_location, event_host, event_about) 
VALUES ("AWARENESS", 7, "CHARLOTTE,NC", "OrganizationThree", "stay aware");

SELECT * FROM comingUp;