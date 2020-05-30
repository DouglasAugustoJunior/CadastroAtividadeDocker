const { AtividadeDao } = require('../infra')

const api = {}

api.getAll = async (req, res) => { // Pega todos os dados
    const { page } = req.query // Pega a página
    const atividades = await new AtividadeDao(req.db).getAll(page) // Solicita os dados da página no DAO
    console.log(atividades) // Loga os dados no prompt
    res.json(atividades) // Retorna os dados
}

api.findById = async (req, res) => { // Busca por ID
    const { atividadeId } = req.params // Pega o ID recebido
    console.log('########################################################################')
    console.log(`Buscando atividade pelo ID ${atividadeId}`)
    const atividade = await new AtividadeDao(req.db).findById(atividadeId) // Solicita a atividade no DAO
    if(atividade) { // Se houve retorno
        res.json(atividade) // manda a atividade para o front
    } else { // Se não houver
        res.status(404).json({ message: 'Atividade não existe!'}) // Retorna que não existe
    } 
}

api.add = async (req, res) => {
    const atividade = req.body // Pega atividade recebida
    console.log('########################################################################')
    const atividadereturn = await new AtividadeDao(req.db).add(atividade) // Manda para o DAO
    if(atividadereturn){ // Se cadastrou
        res.json(atividadereturn) // retorna ao front
    }else{ // Se houve erro
        res.status(204).end()
    }
}

api.update = async (req,res) => { // Atualiza atividades
    const atividade = req.body // Pega atividade atualizada
    console.log('########################################################################')
    const atividadereturn = await new AtividadeDao(req.db).update(atividade) // Manda ao DAO
    if(atividadereturn){ // Se atualizou
        res.json(atividadereturn) // Manda para o front
    }else { // Se houve erro
        res.status(204).end()
    }
}

api.remove = async (req, res) => { // Deleta do banco
    const { atividadeId } = req.params // Pega o id recebido
    const dao = new AtividadeDao(req.db) // instância para busca
    const atividade = await dao.findById(atividadeId) // busca pelo ID
    console.log('########################################################################')

    if(!atividade) { // Se a atividade não existir
        const message = 'Atividade não existe!'
        console.log(message)
        return res.status(404).json({ message })
    }else{ // Se existir
        const atividadedeleted = await dao.remove(atividadeId) // Manda ao Dao
        if(atividadedeleted){ // Se deletou
            console.log(`Atividade ${atividadeId} deletada!`)
            res.json(true)
        }else{ // Se houve erro
            res.status(200).end()
        }
    }

}

module.exports = api