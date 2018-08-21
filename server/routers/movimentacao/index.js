const express = require('express');
const COLECAO = require('../../database/types/collectionTypes');
const DbConnection = require('../../database/utils/dbConnection');

const router = express.Router({});

router.use((req, res, next) => {
  console.log(`Movimentacao routes - ${req.originalUrl} - Time: `, Date.now());
  next();
});

router.get('/', async (req, res) => {
  try {
    const dbConnection = await DbConnection.Get();

    const data = await dbConnection.db(DbConnection.DatabaseName)
      .collection(COLECAO.MOVIMENTACOES, DbConnection.FetchCollection)
      .find({})
      .toArray();

    const mensagemSucesso = 'Movimentacaos encontrados com sucesso!';
    console.log(mensagemSucesso);

    res.status(202).send({ data, message: mensagemSucesso });
  } catch (e) {
    console.log('Erro ao encontrar os movimentação', e.toString());
    res.status(500).send(e.toString());
  }
});

router.get('/:id', async (req, res) => {
  try {
    const dbConnection = await DbConnection.Get();

    const data = await dbConnection.db(DbConnection.DatabaseName)
      .collection(COLECAO.MOVIMENTACOES, DbConnection.FetchCollection)
      .findOne({ _id: DbConnection.ObjectID(req.params.id) });

    const mensagemSucesso = 'Movimentacao encontrada com sucesso!';
    console.log(mensagemSucesso);

    res.status(202).send({ data, message: mensagemSucesso });
  } catch (e) {
    console.log('Erro ao encontrar a movimentação', e.toString());
    res.status(500).send(e.toString());
  }
});

router.put('/:id', async (req, res) => {
  try {
    const dbConnection = await DbConnection.Get();

    const data = await dbConnection.db(DbConnection.DatabaseName)
      .collection(COLECAO.MOVIMENTACOES, DbConnection.FetchCollection)
      .updateOne(
        { _id: DbConnection.ObjectID(req.params.id) },
        { $set: req.body },
        { upsert: false },
      );

    const mensagemSucesso = 'Movimentacao atualizada com sucesso!';
    console.log(mensagemSucesso);

    res.status(202).send({ data, message: mensagemSucesso });
  } catch (e) {
    console.log('Erro ao atualizar a movimentacao', e.toString());
    res.status(500).send(e.toString());
  }
});

router.post('/', async (req, res) => {
  try {
    const dbConnection = await DbConnection.Get();

    const data = await dbConnection.db(DbConnection.DatabaseName)
      .collection(COLECAO.MOVIMENTACOES, DbConnection.FetchCollection)
      .insertOne(req.body);

    const mensagemSucesso = 'Movimentacao inserida com sucesso!';
    console.log(mensagemSucesso);

    res.status(201).send({ data, message: mensagemSucesso });
  } catch (e) {
    console.log('Erro ao inserir a movimentacao', e.toString());
    res.status(500).send(e.toString());
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const dbConnection = await DbConnection.Get();

    const data = await dbConnection.db(DbConnection.DatabaseName)
      .collection(COLECAO.MOVIMENTACOES, DbConnection.FetchCollection)
      .deleteOne({ _id: DbConnection.ObjectID(req.params.id) });

    const mensagemSucesso = 'Movimentacao removida com sucesso!';
    console.log(mensagemSucesso);

    res.status(202).send({ data, message: mensagemSucesso });
  } catch (e) {
    console.log('Erro ao remover a movimentacao', e.toString());
    res.status(500).send(e.toString());
  }
});

module.exports = router;
