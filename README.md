# Posts-Assignment
This API will allow you to perform CRUD operations on a "Posts" relation in Postgresql. The API is setup using Express.js with Sequelize as an ORM for interacting with "Posts" relation. The server runs on port 3000.

# Installation
To run this API locally with PostgreSQL, follow the steps below:

### Prerequisites
   #### 1. Node.js and npm:
  Install Node.js (v14 or later) and npm on your machine.
  Download and install from [Node.Js](https://nodejs.org/)

   #### 2. PostgreSQL Database:
  Install and set up a PostgreSQL database. You can download it from [PostgreSQL](https://www.postgresql.org/download/).
  Update the configuration in config/database.js with your PostgreSQL credentials.
  Create a new Database called ```Posts```
  #### 3. Express.js
  Install Express.js using ```npm install express```

### Clone the Repository
  Clone this repository to your machine using ```https://github.com/Shantanu3438/Posts-Assignment.git```
### Install Dependencies
  Do ```cd Posts-Assignment``` to into the directory and do ```npm install``` to install all the dependencies

### Update database configuration with PostgreSQL
configure ```config/database.js``` with: 
```module.exports = {
  development: {
    username: 'your_postgres_username',
    password: 'your_postgres_password',
    database: 'your_postgres_database',
    host: 'localhost',
    dialect: 'postgres',
  },
};
```
### Run migrations to create the Posts tables
```npx sequelize-cli db:migrate```

### Run the server and access the API
Use ```node app.js``` to start the server use ```https://localhost:3000/posts``` to access the API
