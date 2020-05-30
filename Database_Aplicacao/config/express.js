const express              = require('express'),
      app                  = express(),
      bodyParser           = require('body-parser'),
      cors                 = require('cors'),
      db                   = require('./database'),
      { atividadesRoutes } = require('../app/routes')

const corsOptions = { exposedHeaders: ['x-access-token'] } // Cabeçalho para requisições POST,PUT...

app.use(cors(corsOptions)) // Permite que a API seja consumida

app.use(bodyParser.json()) // Permite o envio de JSON

app.use((req, res, next) => {
    req.db = db
    next()
})

atividadesRoutes(app) // Rotas de atividade

app.use('*', (req, res) => { // Caso tente consumir uma rota errada
    res.status(404).json({ message: `A rota ${req.originalUrl} não existe!` })
})

app.use((err, req, res, next) => { // Erros na API
    console.error(err.stack)
    res.status(500).json({ message: 'Erro interno, por favor, tente novamente!' })
})

module.exports = app