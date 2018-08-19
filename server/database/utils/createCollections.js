const DbConnection = require('./dbConnection');

const databaseName = process.env.MONGODB_DB_NAME || 'gerenciador';

async function createCollectionAsync(nomeColecao) {
  try {
    const dbConnection = await DbConnection.Get();
    return await dbConnection.db(databaseName).createCollection(nomeColecao);
  } catch (e) {
    console.log(`Erro ao criar colecao ${nomeColecao}`, e.toString());
    return e;
  }
}

module.exports = createCollectionAsync;
