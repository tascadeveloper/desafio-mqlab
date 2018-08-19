const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const criarColecoesBanco = require('./database/populate');

if (process.env.NODE_ENV !== 'production') {
  dotenv.load();
}

const app = express();
const authRouter = require('./routers/auth');
const otherRouter = require('./routers/other');

// Valor inicial de 100kb, ajustar conforme demanda
app.use(bodyParser.json({ limit: '100kb' }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'POST, GET');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Criar colecoes MongoDB
criarColecoesBanco();

app.use('/auth', authRouter);
app.use('/', otherRouter);


app.listen(process.env.PORT || 5000, () => console.log('🚀 Servidor Gerenciador Financeiro rodando na porta 5000!'));
