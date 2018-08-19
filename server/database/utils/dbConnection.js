// Inicializar mongo
const { MongoClient } = require('mongodb');

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gerenciador';

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
      console.log(`DbConnection called ${instance} times`);

      if (db != null) {
        console.log('Conexao ja esta ativa');
        return db;
      } else {
        console.log('Buscando nova conexao');
        db = await DbConnect();
        return db;
      }
    } catch (e) {
      return e;
    }
  }

  return {
    Get,
  };
};

module.exports = DbConnection();
