const express = require('express') 
const app = express()


//GET= envia informacoes do back end para o front end
//POST = recebe informacoes do front do back-end


app.get('/', (requisicao, resposta) =>{
    resposta.send("este eh o meu back-end")
    
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

