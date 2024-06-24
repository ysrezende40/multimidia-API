import { randomUUID } from 'node:crypto'

export class DatabaseMemory {
    #alunos = new Map()

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

    create(aluno) {
        const alunoId = randomUUID()

        this.#alunos.set(alunoId, aluno)
    }

    update(id, aluno) {
        this.#alunos.set(id, aluno)
    }

    delete(id) {
        this.#alunos.delete(id)
    }
}