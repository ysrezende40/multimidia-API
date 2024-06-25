import { randomUUID } from 'node:crypto'
import { db } from './sql.js'

export class DatabaseSql {
    async list() {
        const alunos = await db.query`select * from tbl_Animes`
        return alunos.recordset
    }

    async create(anime) {
        const AnimeId = randomUUID()

        const {Nome, Estudio, Episodios, Completo } = anime

        await db.query`insert into tbl_Animes (ID, Nome, Estudio, Episodios, Completo) values
            (${AnimeId}, ${Nome}, ${Estudio}, ${Episodios}, ${Completo})`
    }

    async update(id, aluno) {
        const { nome, idade, matriculado, time } = aluno

        await db.query`update tbl_Animes set name = ${nome}, age = ${idade}, registered = ${matriculado}, team = ${time}`
    }

    async delete(id) {
        console.log(`delete from tbl_Animes where id = '${id}'`)
        await db.query`delete from tbl_Animes where id = '${id}'`
    }
}