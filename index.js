//importação 
const express = require ("express");

//corpo 
const raiz = (req, res)=>{
    res.send("Back End Ativo");
}

const interacao = (req, res)=>{
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.send(`Ola ${nome}, voce tem ${idade} anos`);
}

//configuração HTTP 
const app = express();
app.get("/", raiz);
app.get("/interacao", interacao);

//teste no console 
app.listen(3000, ()=>{
    console.log("respondendo na porta 3000");
})
