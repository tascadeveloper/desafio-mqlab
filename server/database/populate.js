const createCollectionAsync = require('./utils/createCollections');
const COLECAO = require('./types/collectionTypes');

const listaColecoes = [COLECAO.USUARIO, COLECAO.MOVIMENTACOES];

function criarColecoesBanco() {
  if (process.env.POPULATE_DB === 'on') {
    listaColecoes.forEach((nomeColecao) => {
      createCollectionAsync(nomeColecao);
      console.log(`Colecao ${nomeColecao} Criada`);
    });
  }
}

module.exports = criarColecoesBanco;
