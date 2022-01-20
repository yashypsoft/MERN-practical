USE practical_mern; 

DROP TABLE IF EXISTS course; 

CREATE TABLE IF NOT EXISTS course 
( 
    id         INT PRIMARY KEY auto_increment, 
    title      VARCHAR(25) UNIQUE NOT NULL, 
    desciption VARCHAR(255) NOT NULL, 
    link       VARCHAR(60) NOT NULL, 
    language   VARCHAR(50) NOT NULL, 
    subject    VARCHAR(50) UNIQUE NOT NULL,
    class      VARCHAR(50) UNIQUE NOT NULL,
    chapter    VARCHAR(50) UNIQUE NOT NULL,
    topic      VARCHAR(50) UNIQUE NOT NULL,
    created_at datetime DEFAULT NULL,
    updated_at datetime DEFAULT NULL
); 