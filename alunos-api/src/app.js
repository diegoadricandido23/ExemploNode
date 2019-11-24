const express = require('express')//importacao do pacote
const app = express()
// const cors = require('cors')

const alunos = [
    {
        nome : "Aluno 1",
        idade : 11
    },
    {
        nome : "Aluno 2",
        idade : 12
    },
    {
        nome : "Aluno 3",
        idade : 13
    },
    {
        nome : "Aluno 4",
        idade : 14
    },
    {
        nome : "Aluno 5",
        idade : 15
    },
    {
        nome : "Aluno 6",
        idade : 16
    }
]
// app.use(cors)

app.get('/api/v1/alunos', function(req, res){//endereco da requisicao onde o retornado o hello word
    res.send(alunos)
})

app.listen(3000)//execucao do servidor