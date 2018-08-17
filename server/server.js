const express = require('express');
const app = express();

app.get('/hello', (req,res)=>{
    res.send('Hello World');
});

app.listen(process.env.PORT || 5000, () => console.log('Servidor Gerenciador Financeiro rodando na porta 5000!'));