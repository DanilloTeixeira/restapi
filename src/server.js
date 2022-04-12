const app = require('./app');



var PORT = process.env.PORT || 8080; // se ele estiver contido ele usa o numero da porta correta ou vai usar a porta 8080
app.listen(PORT, () => { //Variavel app + listen(escute) + eurofach
    console.log(`App listen on port ${PORT}`);
})
