import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #alunos = new Map()
    #cep = new Map();

    list() {
        return Array.from(this.#alunos.entries())
            .map((alunoArray) => {
                const id = alunoArray[0]
                const data = alunoArray[1]

                return {
                    id,
                    ...data
                }
            })
    }
    listCep() {
        return Array.from(this.#cep.entries())
            .map((cepArray) => {
                const id = cepArray[0]
                const data = cepArray[1]

                return {
                    id,
                    ...data
                }
            })
    }

    create(aluno) {
        const alunoId = randomUUID()

        this.#alunos.set(alunoId, aluno)
    }
    create(cep) {
        const cepID = randomUUID()
        
        this.#cep.set(cepID, cep)
    }

    update(id, aluno) {
        this.#alunos.set(id, aluno)
    }

    delete(id) {
        this.#alunos.delete(id)
    }
   
}