CREATE DATABASE pern_boilerplate;

\c pern_boilerplate;

CREATE TABLE app_user
(
    app_user_key SERIAL PRIMARY KEY,
    login_id VARCHAR(255)  NOT NULL UNIQUE,
    hashed_password VARCHAR(255) NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    middle_name VARCHAR(255) DEFAULT '',
    last_name VARCHAR(255) DEFAULT '',
    bio TEXT DEFAULT ''
);
