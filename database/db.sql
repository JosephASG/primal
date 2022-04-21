CREATE DATABASE database_links;

USE database_links;

--users table
CREATE TABLE users(
    id INT(11) NOT NULL,
    username VARCHAR(20) NOT NULL,
    password VARCHAR(60) NOT NULL,
    fullname VARCHAR(100) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users
    MODIFY id INT(11)   NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

ALTER TABLE users
    ADD email VARCHAR(40) NOT NULL

DESCRIBE users;

--other tables 

CREATE TABLE links(
    id INT(11) NOT NULL,
    tittle VARCHAR(150) NOT NULL,
    url VARCHAR(255) NOT NULL,
    description TEXT,
    user_id INT(11),
    created_at timestamp NOT NULL DEFAULT current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE links
    ADD PRIMARY KEY(id);

ALTER TABLE links
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 2;

DESCRIBE links;