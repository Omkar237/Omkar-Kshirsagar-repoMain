I have created  the backend for a hotel management system with three types of users: Users, Hotel Staff, and Hotel Admin. The backend provides REST API and GraphQL endpoints to perform CRUD operations, using different databases and ORM/ODM solutions.And i have used Thunderclient as a testing tool for rest api and graphql api

1] Technologies Used
Express.js: Web framework for Node.js.
MongoDB: Database for user data.
Mongoose: ODM for MongoDB.
MySQL: Database for hotel staff and hotel admin data.
Sequelize: ORM for MySQL.
GraphQL: API query language.
---------------------////////////////////////////////////////////////////////////////--------------------------------------
2] User Types

1. Users
Database: MongoDB
Schema: Mongoose
Operations: CRUD operations via REST API

2. Hotel Staff
Database: MySQL
Schema: Sequelize ORM
Operations: CRUD operations via GraphQL

3. Hotel Admin
Database: MySQL
Schema: Sequelize ORM
Operations: CRUD operations via GraphQL

-----------------------------------------///////////////////////////////////////////////////////////////////////////////////-----------------------------------------
3] Features
i] Users:-
[Create, Read, Update, Delete operations using REST API.
Mongoose schemas for data modeling.]

ii]Hotel Staff
[Create, Read, Update, Delete operations using GraphQL.
Sequelize ORM for data modeling with MySQL database.]

iii] Hotel Admin
Create, Read, Update, Delete operations using GraphQL.
Sequelize ORM for data modeling with MySQL database.
