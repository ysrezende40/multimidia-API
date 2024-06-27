import { randomUUID } from 'node:crypto'
import { db } from './sql.js'

export class DatabaseSql {
    async list() {
        const alunos = await db.query`select * from tbl_Animes`
        return alunos.recordset
    }

    async create(Nome,Estudio,Episodios,Completo) {
        const AnimeId = randomUUID()

        console.log(AnimeId, Nome, Estudio, Episodios, Completo );
        //const {Nome, Estudio, Episodios, Completo } = anime

        
        await db.query`insert into tbl_Animes (ID, Nome, Estudio, Episodios, Completo) values
            (${AnimeId}, ${Nome}, ${Estudio}, ${Episodios}, ${Completo})`
    }
        
    async update(id, Nome, Estudio, Episodios, Completo) {
        //const { Nome, Estudio, Episodios, Completo } = anime

        await db.query`
        UPDATE tbl_Animes
        SET Nome = '${Nome}',
        Estudio = '${Estudio}',
        Episodios = ${Episodios},
        Completo = '${Completo}'
        WHERE ID = '${id}'
        `
        console.log(`UPDATE tbl_Animes
        SET Nome = '${Nome}',
        Estudio = '${Estudio}',
        Episodios = ${Episodios},
        Completo = ${Completo}
        WHERE ID = '${id}'`);
    }

    async delete(id) {
        console.log(`delete from tbl_Animes where id = '${id}'`)
        await db.query`delete from tbl_Animes where id = '${id}'`
    }
}