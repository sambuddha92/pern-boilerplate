# PERN Boilerplate
[Demo Website](https://simple-pern-boilerplate.herokuapp.com/).

A simple boilerplate application built using the PERN stack. On this application, a user can Register, Login and browse private pages that are accessible to only logged in users. It should be possible to build on this project to build more complex applications.

The key technologies used are as follows:
* React
* Redux
* PostgreSQL
* Express
* Node
* SCSS/SASS along with node-sass

I am still working on the documentation and comments to make the codebase more useful for everyone. In case of any queries/feedbacks feel free to drop an email to sambuddhaadhikari@gmail.com. 

# Usage & Getting Started with the Project
## Prerequisites
* Download & install any IDE. [VS Code](https://code.visualstudio.com/download) is my personal recommendation.
* Download and install [NodeJS & npm](https://nodejs.org/en/download/).
* Download and install [PostgreSQL & pgAdmin4](https://www.postgresql.org/download/).

## Set up the DB
* Use the terminal and run `psql -U postgres` and subsequently enter your password to connect to your local PostgreSQL database. I faced some issues with psql on mac and [This stackoverflow Q&A](https://stackoverflow.com/questions/36155219/psql-command-not-found-mac/36156782) helped me out.
* Choose a name for your database and note it down for use during setting up `.env`, and run the following commands (replace cumin with your preferred database name):
  1. `CREATE DATABASE cumin;`
  2. `\c cumin;`
  3. `CREATE TABLE app_user ( id SERIAL PRIMARY KEY, login_id VARCHAR(255)  NOT NULL UNIQUE, hashed_password VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) );`

## Set up the project
* Clone / download the codebase in any directory of your choice. [This](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository) can be helpful.
* Open the project folder using your preferred IDE.
* Locate a file called `.env.sample` in the root directory and rename it to just `.env`, subsequently open the file for editing. A note on the contents of this file follows.
  * AUTH_TOKEN_SECRET : This is a secret and private key that will be used by the server to sign and verify authorization tokens. Use any strong random string. [This](https://randomkeygen.com/) is a handy little website that I use to generate random strings.
  * AUTH_EXPIRES_IN_SECONDS: The amount of seconds after which a logged in user's session will expire from their browser and they will need to login again.
  * DB_USER: The root user of your local PostgreSQL database (usually should be postgres, depends on the installation).
  * DB_HOST: The host of your local PostgreSQL database (should be localhost).
  * DB_NAME: The name of the specific Database to be used. This is the name you chose while creating the database earlier.
  * DB_PASSWORD: The password of your root database user (the same one that you used to connect to PostgreSQL using psql).
  * DB_PORT: The PORT number of your local PostgreSQL database (usually should be 5432, depends on the installation).
  * Once you are done with the `.env` file, it should look simething like this - 
      ```
      AUTH_TOKEN_SECRET = "gPTpSAA8qiqcm0SeYzqEl9p2gHTHDROb"
      AUTH_EXPIRES_IN_SECONDS = 3600
      DB_USER = "postgres"
      DB_HOST = "localhost"
      DB_NAME = "cumin"
      DB_PASSWORD = "YourPasswordHere"
      DB_PORT = 5432
      ```
* Locate a file called  `.env.sample` in the client directory and rename it to just `.env`. Keep the value of REACT_APP_DEFAULT_LOGIN_REDIRECT as "/dashboard" for now. This can be changed later.
* Open a terminal and cd into the root directory of the project. If using VS code, simply press ``ctrl + ` `` to open the terminal window, make sure that you are in the root directory and not in some other directory. Then run the command `npm run get-started`. This will install all the node modules for both the frontend and backend.
* Run `npm run dev` from the root directory itself to start the project up.
* Optionally, run `npm run build` from the root directory itself to build a production ready version of the client in the `client/build` directory.

# Brief Technical Overview
## The Stack
PERN - PostgreSQL, Express, React, Node.

## Main Project Structure
```

root
|
|___server.js
|___src\
|   |___db\
|   |___middleware\
|   |___routes\
|   |   |___auth\ (authentication routes for authenticating requests to server)
|   |   |___api\ (api routes for CRUD operations)
|   |   
|   |___util\
|   |___app.js
|
|___client\
|   |___public\
|   |___src\
|   |   |___app\ (All react components, state and styles of the entire client side application)
|   |   |   |___components\ (partial react components without much functionality)
|   |   |   |___containers\ (partial react components with some functionality)
|   |   |   |___routes\ (entire pages)
|   |   |   |___state\ (The state of the whole app)
|   |   |   |___styles\ (Global styles and variables)
|   |   |   
|   |   |___App.js (Aggregation of the client side applicatin and routes)
|   |   |___index.js
|   |   
|   |___.env
|   |___package.json
|   |___package-lock.json
|   
|___.gitignore
|___package.json
|___package-lock.json
|___readme.md


```

## Authentication Module
Login - Client sends HTTP POST request with login_id, password to "/auth/local". In case of valid credentials, a cookie with an authorisation token (JWT) is set by express and the user is logged in. The user and authentication info is stored using redux and redux-persist for the client to make use of the same to render accordingly.

Logout - Client sends HTTP DELETE request to "auth/local". The cookie set during login is destroyed from the browser's local storage and the redux store is reset to defaults.

Registration - Client sends HTTP POST request with login_id, password, first_name, last_name to "/api/user". The api registers the user and logs them in directly in case of an OK request.

Packages used
Sever side-
* bcryptjs for hashing the password.
* jsonwebtoken for signing and verifying authorisation tokens.
* express and cookieparser to set and read secure http only cookies to verify the identity of incoming requests from the client side.

Client side-
* redux, react-redux and @reduxjs/toolkit for state management.
* redux-persist to persist the state in the browser's local storage so that the state does  not reset upon every reload.
* axios for HTTP requests.

## Styling
Using [SCSS](https://sass-lang.com/) for custom styling. No 3rd party library has been used. The 

