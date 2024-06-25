import { fastify } from "fastify";
import cors from '@fastify/cors'

import { DatabaseMemory } from "./database/database-memory.js";
import { DatabaseSql } from "./database/database-sql.js";

const server = fastify();

await server.register(cors, {
    origin: '*',
    methods: ['GET']
})

// const database = new DatabaseMemory()
const database = new DatabaseSql()

server.get('/alunos', async () => {
    return await database.list()
})

server.post('/animes', async (req, res) => {
    const {Nome,Estudio,Episodios,Completo } = req.body

    await database.create({
        Nome,Estudio,Episodios,Completo
    })

    return res.status(201).send()
})

server.put('/alunos/:id', async (req, res) => {
   const id = req.params.id
   const { nome, idade, matriculado, time } = req.body

   await database.update(id, {
       nome,
       idade,
       matriculado,
       time
   })

   return res.status(204).send()
})

server.delete('/alunos/:id', async (req, res) => {
    const id = req.params.id
    await database.delete(id)
    return res.status(200).send()
})

function validateAnime({ Nome, Estudio, Episodios, Completo }) {
    if (typeof Nome !== 'string' || Nome.trim() === '') {
        throw new Error("Validation failed for parameter 'Nome'. Invalid string.");
    }
    if (typeof Estudio !== 'string' || Estudio.trim() === '') {
        throw new Error("Validation failed for parameter 'Estudio'. Invalid string.");
    }
    if (typeof Episodios !== 'number' || Episodios <= 0) {
        throw new Error("Validation failed for parameter 'Episodios'. Invalid number.");
    }
    if (typeof Completo !== 'string') {
        throw new Error("Validation failed for parameter 'Completo'. Invalid boolean.");
    }
}
server.listen({
    port: 3333
})