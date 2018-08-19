// Inicializar mongo
const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gerenciador';
const DatabaseName = process.env.MONGODB_DB_NAME || 'gerenciador';

const DbConnection = () => {
  let db = null;
  let instance = 0;

  async function DbConnect() {
    try {
      return await MongoClient.connect(mongoURI, { useNewUrlParser: true });
    } catch (e) {
      return e;
    }
  }

  async function Get() {
    try {
      instance += 1; // contar quantas vezes a instancia do banco foi chamada
      console.log(`Conexao de banco chamada ${instance} vez(es)`);

      if (db != null) {
        console.log('Conexao ja esta ativa');
        return db;
      }
      console.log('Buscando nova conexao');
      db = await DbConnect();
      return db;
    } catch (e) {
      return e;
    }
  }

  function FetchCollection(err, result) {
    if (!err) {
      console.log(`Colecao ${result.s.name} encontrada`);
    } else {
      console.log('Erro ao buscar colecao!', err.toString());
    }
  }

  return {
    Get,
    FetchCollection,
    DatabaseName,
    ObjectID,
  };
};

module.exports = DbConnection();
