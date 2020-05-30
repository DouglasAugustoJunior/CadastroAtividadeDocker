const atividadeConverter = row => ({
    id:        row.atividade_id,
    name:      row.atividade_name,
    join_date: row.atividade_join_date
}) // Converte os dados vindos do banco para nomes amigáveis

const maxRows = 6 // Itens por página

class AtividadeDao {

    constructor(db) {
        this._db = db
    }

    getAll(page) { // Retorna a lista de atividades

        const from = (page - 1) * maxRows

        let limitQuery = ''

        if (page) limitQuery = `LIMIT ${from}, ${maxRows}`

        return new Promise((resolve, reject) => {
            this._db.all(`
                SELECT 
                    atividade_id, atividade_name, atividade_join_date 
                FROM atividades ${limitQuery} `, // Faz a busca com o limite da paginação
                (err, rows) => {
                    if (err) { // Se houver erros
                        console.log('Deu ruim: ',err)
                        return reject('Não foi possível carregar as atividades!')
                    }
                    const atividades = rows.map(atividadeConverter) // Converte o retorno
                    return resolve(atividades) // Envia para a API
                }
            )
        })
    }

    findById(id) { // Busca por ID

        return new Promise((resolve, reject) => this._db.get(`
            SELECT  atividade_id, atividade_name 
            FROM atividades
            WHERE atividade_id = ?
            ORDER BY atividade_join_date DESC`, // Faz a busca com o ID informado
            [id], // ID na query
            (err, row) => {
                if (err) { // Se houver erro
                    console.log('Deu ruim: ',err)
                    return reject('Nenhuma atividade encontrada!')
                }
                if (row) { // Se houve retorno
                    resolve(atividadeConverter(row)) // Converte e retorna
                } else { // Se não houve retorno
                    resolve(null) // manda null
                }
            }
        ))
    }

    add(atividade) { // Cadastra na base
        return new Promise((resolve, reject) => {
            this._db.run(` INSERT INTO atividades (atividade_name) values (?)`, // consulta para inserir
                [ atividade.name ], // parâmetro da query
                function (err) {
                    if (err) { // Se houver erro
                        console.log('Deu ruim: ',err)
                        return reject('Não foi possível registrar a atividade!')
                    }
                    console.log(`Atividade ${atividade.name} registrada!`) // Loga no console
                    resolve(atividade) // devolve a atividade
                })
        })
    }

    remove(id) { // Deleta da base
        return new Promise((resolve, reject) => this._db.run(
            `DELETE FROM atividades where atividade_id = ?`, // consulta
            [id], // parâmetro da query
            err => {
                if (err) { // Se houver erro
                    console.log('Deu ruim: ',err)
                    return reject('Não foi possível remover a atividade!')
                }
                resolve(true)
            }
        ))
    }

    update(atividade){ // Atualiza atividades
        return new Promise((resolve, reject) => this._db.run(
            `UPDATE atividades SET atividade_name = ? WHERE atividade_id = ?`, // Consulta
            [atividade.name, atividade.id], // Parâmetros
            err => {
                if (err) { // Se houver erro
                    console.log('Deu ruim: ',err)
                    return reject('Não foi possível atualizar a atividade!')
                }
                console.log(`Atividade ${atividade.name} atualizada!`) // loga no console
                resolve(atividade) // retorna a atividade
            }
        ))
    }

}

module.exports = AtividadeDao