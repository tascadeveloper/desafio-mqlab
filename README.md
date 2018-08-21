## Instruções para execução

### Pré requisitos:

* Possuir Node JS versão 8.x.x ou superior
* Possuir MongoDB versão 3.x.x instalado e rodando na máquina (mongod)

### Instruções:

Para executar o projeto é necessário executar `npm install` e aguardar a instalação de todas as dependências. Em seguida basta executar os seguintes comandos:

`npm start`

Este comando irá inicializar o front-end na porta 3000 e a API na porta 5000.
O front está redirecionado via proxy no `package.json` para `http://localhost:5000/`

`npm test`

Este comando irá executar os testes unitários

`npm build`

Este comando irá construir um pacote distribuível e minificado do front-end

`npm run lint`

Este comando irá executar o linter com as configurações do arquivo .eslintrc.js

**IMPORTANTE** :

Certifique-se de que o arquivo .env possui a propriedade POPULATE_DB como "on" quando for rodar o projeto primeira vez, dessa forma, as coleções do banco de dados serão criadas.

Qualquer dúvida quanto a execução e implementação, entre em contato:

**Email**: tascadeveloper@gmail.com


