import { randomUUID } from 'node:crypto'
import { db } from './sql.js'

export class DatabaseSql {
    async list() {
        const alunos = await db.query`select * from alunos`
        return alunos.recordset
    }

    async create(aluno) {
        const alunoId = randomUUID()

        const { nome, idade, matriculado, time } = aluno

        await db.query`insert into alunos (id, name, age, registered, team) values
            (${alunoId}, ${nome}, ${idade}, ${matriculado}, ${time})`
    }

    async update(id, aluno) {
        const { nome, idade, matriculado, time } = aluno

        await db.query`update alunos set name = ${nome}, age = ${idade}, registered = ${matriculado}, team = ${time}`
    }

    async delete(id) {
        console.log(`delete from alunos where id = '${id}'`)
        await db.query`delete from alunos where id = '${id}'`
    }
}