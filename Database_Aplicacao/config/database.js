const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('data.db')

const ATIVIDADE_SCHEMA = `
    CREATE TABLE IF NOT EXISTS atividades (
        atividade_id INTEGER PRIMARY KEY AUTOINCREMENT,
        atividade_name VARCHAR(300) NOT NULL UNIQUE,
        atividade_join_date TIMESTAMP DEFAULT current_timestamp
    )`

const INSERTS_DEFAULT_ATIVIDADE_1 = `
    INSERT INTO atividades (
        atividade_name
    ) SELECT 'Atividade 1' WHERE NOT EXISTS (SELECT * FROM atividades WHERE atividade_name = 'Atividade 1');
    `

const INSERTS_DEFAULT_ATIVIDADE_2 = `
    INSERT INTO atividades (
        atividade_name
    ) SELECT 'Atividade 2' WHERE NOT EXISTS (SELECT * FROM atividades WHERE atividade_name = 'Atividade 2');`

const INSERTS_DEFAULT_ATIVIDADE_3 = `
    INSERT INTO atividades (
        atividade_name
    ) SELECT 'Atividade 3' WHERE NOT EXISTS (SELECT * FROM atividades WHERE atividade_name = 'Atividade 3');`

const INSERTS_DEFAULT_ATIVIDADE_4 = `
    INSERT INTO atividades (
        atividade_name
    ) SELECT 'Atividade 4' WHERE NOT EXISTS (SELECT * FROM atividades WHERE atividade_name = 'Atividade 4');`


const INSERTS_DEFAULT_ATIVIDADE_5 = `
    INSERT INTO atividades (
        atividade_name
    ) SELECT 'Atividade 5' WHERE NOT EXISTS (SELECT * FROM atividades WHERE atividade_name = 'Atividade 5');`

const INSERTS_DEFAULT_ATIVIDADE_6 = `
    INSERT INTO atividades (
        atividade_name
    ) SELECT 'Atividade 6' WHERE NOT EXISTS (SELECT * FROM atividades WHERE atividade_name = 'Atividade 6');`

const INSERTS_DEFAULT_ATIVIDADE_7 = `
    INSERT INTO atividades (
        atividade_name
    ) SELECT 'Atividade 7' WHERE NOT EXISTS (SELECT * FROM atividades WHERE atividade_name = 'Atividade 7');`

const INSERTS_DEFAULT_ATIVIDADE_8 = `
    INSERT INTO atividades (
        atividade_name
    ) SELECT 'Atividade 8' WHERE NOT EXISTS (SELECT * FROM atividades WHERE atividade_name = 'Atividade 8');`

const INSERTS_DEFAULT_ATIVIDADE_9 = `
    INSERT INTO atividades (
        atividade_name
    ) SELECT 'Atividade 9' WHERE NOT EXISTS (SELECT * FROM atividades WHERE atividade_name = 'Atividade 9');`

const INSERTS_DEFAULT_ATIVIDADE_10 = `
    INSERT INTO atividades (
        atividade_name
    ) SELECT 'Atividade 10' WHERE NOT EXISTS (SELECT * FROM atividades WHERE atividade_name = 'Atividade 10');`

db.serialize(() => {
    db.run("PRAGMA foreign_keys=ON")
    db.run(ATIVIDADE_SCHEMA)
    db.run(INSERTS_DEFAULT_ATIVIDADE_1)
    db.run(INSERTS_DEFAULT_ATIVIDADE_2)
    db.run(INSERTS_DEFAULT_ATIVIDADE_3)
    db.run(INSERTS_DEFAULT_ATIVIDADE_4)
    db.run(INSERTS_DEFAULT_ATIVIDADE_5)
    db.run(INSERTS_DEFAULT_ATIVIDADE_6)
    db.run(INSERTS_DEFAULT_ATIVIDADE_7)
    db.run(INSERTS_DEFAULT_ATIVIDADE_8)
    db.run(INSERTS_DEFAULT_ATIVIDADE_1)
    db.run(INSERTS_DEFAULT_ATIVIDADE_10)


    console.log(`
    ########################################################################
    ###### Curso: Ciência da computação  Turma: CC7P13 Turno: Noturno ######
    ###### Douglas Augusto da Silva Jr                                ######
    ###### Disciplina: Sistemas Distribuídos                          ######
    ###### Prof: Dirceu Semighini Filho  Atividade: Docker            ######
    ########################################################################`)
    db.each("SELECT * FROM atividades", (err, atividade) => {
        console.log(`Atividade ${atividade.atividade_id}: ${atividade.atividade_name} | ${atividade.atividade_join_date}`)
    })
})

process.on('SIGINT', () =>
    db.close(() => {
        console.log('Database closed!!')
        process.exit(0)
    })
)

module.exports = db