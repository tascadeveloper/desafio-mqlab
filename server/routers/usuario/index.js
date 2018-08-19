const express = require('express');
const COLECAO = require('../../database/types/collectionTypes');
const DbConnection = require('../../database/utils/dbConnection');

const router = express.Router({});

router.use((req, res, next) => {
  console.log(`Usuario routes - ${req.originalUrl} - Time: `, Date.now());
  next();
});

router.get('/', async (req, res) => {
  try {
    const dbConnection = await DbConnection.Get();

    const data = await dbConnection.db(DbConnection.DatabaseName)
      .collection(COLECAO.USUARIO, DbConnection.FetchCollection)
      .find({})
      .toArray();

    const mensagemSucesso = 'Usuarios encontrados com sucesso!';
    console.log(mensagemSucesso);

    res.status(202).send({ data, message: mensagemSucesso });
  } catch (e) {
    console.log('Erro ao encontrar os usuario', e.toString());
    res.status(500).send(e.toString());
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dbConnection = await DbConnection.Get();

    const data = await dbConnection.db(DbConnection.DatabaseName)
      .collection(COLECAO.USUARIO, DbConnection.FetchCollection)
      .findOne({ _id: DbConnection.ObjectID(req.params.id) });

    const mensagemSucesso = 'Usuario encontrado com sucesso!';
    console.log(mensagemSucesso);

    res.status(202).send({ data, message: mensagemSucesso });
  } catch (e) {
    console.log('Erro ao encontrar o usuario', e.toString());
    res.status(500).send(e.toString());
  }
});

router.put('/:id', async (req, res) => {
  try {
    const dbConnection = await DbConnection.Get();

    const data = await dbConnection.db(DbConnection.DatabaseName)
      .collection(COLECAO.USUARIO, DbConnection.FetchCollection)
      .updateOne(
        { _id: DbConnection.ObjectID(req.params.id) },
        { $set: req.body },
        { upsert: false },
      );

    const mensagemSucesso = 'Usuario atualizado com sucesso!';
    console.log(mensagemSucesso);

    res.status(202).send({ data, message: mensagemSucesso });
  } catch (e) {
    console.log('Erro ao atualizar o usuario', e.toString());
    res.status(500).send(e.toString());
  }
});

router.post('/', async (req, res) => {
  try {
    const dbConnection = await DbConnection.Get();

    const data = await dbConnection.db(DbConnection.DatabaseName)
      .collection(COLECAO.USUARIO, DbConnection.FetchCollection)
      .insertOne(req.body);

    const mensagemSucesso = 'Usuario inserido com sucesso!';
    console.log(mensagemSucesso);

    res.status(201).send({ data, message: mensagemSucesso });
  } catch (e) {
    console.log('Erro ao inserir o usuario', e.toString());
    res.status(500).send(e.toString());
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const dbConnection = await DbConnection.Get();

    const data = await dbConnection.db(DbConnection.DatabaseName)
      .collection(COLECAO.USUARIO, DbConnection.FetchCollection)
      .deleteOne({ _id: DbConnection.ObjectID(req.params.id) });

    const mensagemSucesso = 'Usuario removido com sucesso!';
    console.log(mensagemSucesso);

    res.status(202).send({ data, message: mensagemSucesso });
  } catch (e) {
    console.log('Erro ao remover o usuario', e.toString());
    res.status(500).send(e.toString());
  }
});

module.exports = router;
