## About

TypeORM is an Object Relational Mapper for SQL Databases ( Its now experimental for MongoDB). With TypeORM SQL queries can be done easily through few functions, which otherwise would be very difficult to do with SQL drivers.

## Terminologies

### Entities

Entities in TypeORM equates to Schema, which represents a table, its columns and its relationships with other tables.

## Project Structure

```sh
├───api
│   ├───controllers
│   ├───helpers
│   ├───lib
│   ├───middlewares
│   ├───models
│   ├───routes
│   ├───services
│   ├───types
│   │   └───express
│   └───utils
├───config
└───public
```

## Todo

- [ ] Error Classes Implementation
- [ ] JWT Implementation
- [ ] Test Tool
- [ ] Socket IO Implementation

### helpers

- [x] stringHelpers.js: contains functions to manipulate strings, such as capitalizeFirstLetter or truncate.
- [x] dateHelpers.js: contains functions to work with dates, such as formatDate or getDateDiff
- [ ] logger.js: contains functions to log messages to the console or a file
- [ ] errorHandlers.js: contains functions to handle errors in the app, such as handleDatabaseError or handleAuthenticationError

### lib

- [x] database.js: contains functions to interact with the database.
- [ ] email.js: contains functions to send emails, such as sendWelcomeEmail or sendPasswordResetEmail
- [ ] jwt.js: contains functions to work with JSON Web Tokens (JWTs), such as generateToken or verifyToken
- [x] http.js: contains functions to make HTTP requests, such as get, post, or put

### util

- [ ] pagination.js: contains functions to paginate lists of data, such as paginateResults or calculateNumberOfPages
- [ ] formatting.js: contains functions to format data, such as formatCurrency or formatPhoneNumber
- [ ] validation.js: contains functions to validate user input, such as validateEmail or validatePasswordStrength
- [ ] caching.js: contains functions to cache data, such as setCache or getCache
