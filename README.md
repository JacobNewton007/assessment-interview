
Enyata Assessment 



> A Simple CRUD using RestAPI

## Getting Started

> [[Technologies](#technologies-used) &middot; [Testing Tools](#testing-tools) &middot; [Installations](#installations) &middot; [API Endpoints](#api-endpoints) &middot; [Tests](#tests) &middot; [Author](#author)


## Technologies Used

[node]: (https://nodejs.org)

- [Node.js](node)
- [postgreSQL](node)
- [Express.js](https://expressjs.com).
- [ESLint](https://eslint.org/).
- [Airbnb](https://www.npmjs.com/package/eslint-config-airbnb).

## Testing Tools

- [Mocha](https://mochajs.org/).
- [Chai](https://chaijs.com).

## Installations

#### Getting started

- You need to have Node and NPM installed on your computer.
- Installing [Node](node) automatically comes with npm.

#### Clone

- Clone this project to your local machine `git@github.com:JacobNewton007/enyata-assessment`

#### Setup

- Installing the project dependencies
  > Run the command below
  ```shell
  $ npm install
  ```
- Start your node server
  > run the command below
  ```shell
  $ npm run dev
  ```
- Use `http://localhost:8000` as base url for endpoints
- Use `https://documenter.getpostman.com/view/14172148/UzBmMmzz` as PostMan documentation.

## API Endpoints

| METHOD | DESCRIPTION                             | ENDPOINTS                 |
| ------ | --------------------------------------- | ------------------------- |
| POST   | Add a book                              | `/api/v1/users/create`           |
| GET    | Get all the book                        | `/api/v1/users`           |
| PUT    | Update the details of a book            | `/api/v1/users/:userId`   |
| GET    | Get a book particular book              | `/api/v1/users/:userId`   |
| DELETE | Remove a book                           | `/api/v1/users/:userId`   |


## Tests

- Run test for all endpoints
  > run the command below
  ```shell
  $ npm run test
  ```

