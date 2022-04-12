const { Router } = require('express');

const UserController = require('./app/Controllers/UserController');

const routes = new Router();

routes.post("/user", UserController.index ); // quando fazer a requisicao nessa rota "/"
routes.get("/user", UserController.show ); // quando fazer a requisicao nessa rota "/"

module.exports = routes; // exporta esse modulo