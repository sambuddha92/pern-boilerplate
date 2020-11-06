--To connect locally to postgres--
--psql -U postgres;

--To connect to external postgres db--
--psql -h hostname -d databasename -U username;


-- CREATE DATABASE cumin; --Create a new table/database named cumin

-- \c cumin; --Change the location to the newly created cumin database

CREATE TABLE app_user
(
    id SERIAL PRIMARY KEY,
    login_id VARCHAR(255)  NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255)
);


