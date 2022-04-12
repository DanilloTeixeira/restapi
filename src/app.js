const express = require('express');// importando express
const cors = require('cors'); // importando cors
const routes = require('./routes'); // importando as routes

class app{  // Criando uma classe
    constructor() { // Quando ele chama esse metodo constructor ele start os 3 abaixo
        this.app = express();  // ROUTAS DA APLICAÇAO
        this.middlewares(); // instaciando as rotas de aplicação
        this.routes();
    }
    middlewares() {
        this.app.use(express.json()); //Usando o modulo json para entender o modo json
        
        this.app.use((req, res, next) => { // req ( requisiçao), res (resposta), next (Intercepitar) middlewares consegue intercipitar uma requisisaçao, pegar  e validar algum  
            res.header("Access-Controll-Allow-Origin", "*");
            res.header("Access-Controll-Allow-Methods", "Get, POST, PUT, DELETE ");
            res.header("Access-Controll-Allow-Headers", "Access, Content-type, Authorization, Acept, Origin, X-Requested-With");
            
            this.app.use(cors());
            next();
        })
    }

    routes() {
        this.app.use(routes); //chamar as rotas na aplicaçao
    }
}

module.exports = new app().app; //Exporta esse module para 
