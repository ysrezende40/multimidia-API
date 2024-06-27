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
    const {Nome,Estudio,Episodios,Completo} = req.body

    await database.create(
        Nome,Estudio,Episodios,Completo
    )
    return res.status(201).send()
})

server.put('/animes/:id', async (req, res) => {
   const id = req.params.id
   const { Nome, Estudio, Episodios, Completo  } = req.body

   await database.update(
       id, 
       Nome,
       Estudio,
       Episodios,
       Completo
   )
    console.log(req.body)
   return res.status(204).send()
})

server.delete('/animes/:id', async (req, res) => {
    const id = req.params.id
    await database.delete(id)
    return res.status(200).send()
})


server.listen({
    port: 3333
})