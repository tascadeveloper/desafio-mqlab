const express = require('express');
const app = express();
const authRouter = require('./auth');
const otherRouter = require('./other');

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Methods", "POST, GET");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/auth', authRouter);
app.use('/',  otherRouter);


app.listen(process.env.PORT || 5000, () => console.log('🚀 Servidor Gerenciador Financeiro rodando na porta 5000!'));
