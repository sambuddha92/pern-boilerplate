CREATE DATABASE cumin;

\c cumin;

CREATE TABLE app_user
(
    id SERIAL PRIMARY KEY,
    login_id VARCHAR(255)  NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255)
);


/* Query to Delete a user

DELETE 	FROM app_user WHERE login_id = 'j0hn' AND first_name = 'John' AND last_name = 'Doe';

*/
