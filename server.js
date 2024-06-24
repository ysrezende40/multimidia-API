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

server.post('/alunos', async (req, res) => {
    const { nome, idade, matriculado, time } = req.body

    await database.create({
        nome,
        idade,
        matriculado,
        time
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

server.listen({
    port: 3333
})