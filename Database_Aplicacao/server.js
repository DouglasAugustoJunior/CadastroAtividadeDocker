var http = require('http'),
    app  = require('./config/express')

http.createServer(app).listen(3000, function() { // Cria o servidor na porta 3000 com as configurações do express
    console.log('Servidor escutando na porta: ' + this.address().port) // Avisa no prompt
})