# Truffle Express Boilerplate
A simple boilerplate that contains a setup of truffle and express.

## Stack
- [Truffle](https://truffleframework.com/) - Ethereum development environment
- [Express](https://expressjs.com/) - HTTP server
- [Mocha](https://mochajs.org/) - Test framework
- [Express Validator](https://express-validator.github.io/) - Validation middleware
- [Winston](https://github.com/winstonjs/winston#readme) - Logging
- [Mongoose](https://mongoosejs.com/) - MongoDB ORM
- [MongoDB](https://www.mongodb.com/) - Database
- [ESLint](https://eslint.org/) - Code linting
- [Airbnb](https://github.com/airbnb/javascript) - Code standard 

## File Structure
- `server.js` - Express server
- `routes.js` - Routes
- `controller.js` - Route logic
- `validator.js` - Route validators
- `models/*.js` - Mongoose models
- `helpers/*.js` - Helper functions
- `test/*.js` - Test files
- `contracts/*.sol` - Solidity contracts
- `migration/*.js` - Truffle migrations

## Setup
#### Install Truffle and Ganache
```bash
npm install -g truffle ganache
```

#### Install dependencies
```bash
npm install
```

## Usage
#### Run the ganache server
```bash
ganache
```

#### Migrate contracts
```bash
truffle migrate
```

#### Run the server
```bash
npm start
```

## Testing
#### Run the tests
```bash
npm test
```
