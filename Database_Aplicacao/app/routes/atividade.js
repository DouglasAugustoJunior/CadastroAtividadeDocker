const { atividadeAPI } = require('../api'),
      { wrapAsync }    = require('../infra')

module.exports = app => {

    app.route('/atividades') // Rota para listagem e criação de novos registros
        .get(wrapAsync(atividadeAPI.getAll))
        .post(wrapAsync(atividadeAPI.add))

    app.route('/atividades/:atividadeId') // rota para consulta, alteração e exclusão
        .get(wrapAsync(atividadeAPI.findById))
        .put(wrapAsync(atividadeAPI.update))
        .delete(wrapAsync(atividadeAPI.remove))

}