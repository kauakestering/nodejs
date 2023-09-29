const express = require('express') 
const path = require('path')
const app = express()




const caminho = path.join(__dirname, 'templates')

app.get('/', (requisicao, resposta) =>{
    resposta.send("estou usando  o m,on")
    
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

''