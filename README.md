# desafio-teste-back-end-node-js

## install

Install dependencies using:

> npm install

## Run

Run with:

> npm start

You'll need a mongo DB running and add the URL on the .env file.

DB_URL=mongodb://localhost:27017/productCatalog

## Test

Will run tests using mocha and sinon.

> npm test

## Code decisions

I have used mongoose as the lib to integrate with the Database, and I have created a package structure separating the application logic and the infrastructure.
