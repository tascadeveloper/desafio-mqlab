## Você foi contratado para projetar esse sistema. Que resposta você daria para as seguintes perguntas:

### Quais são as principais perguntas que você faria para a Mastermaq?

Para que tipo de dispositivo este aplicativo precisa ser desenvolvido? (iOS, Android, WebApp , Sistema Desktop) ?

Quais são as expectativas em termos de prazo para aqueles que requisitam o serviço?

A Mastermaq possui sistemas de hosting de servidores de aplicação na nuvem com suporte a escalabilidade?

Que tipo de informação relacionada ao negócio trafegará no gerenciador financeiro?

Os dados precisam ser criptografados?

Quais os requisitos funcionais do gerenciador finaceiro?

Quais os requisitos não funcionais do gerenciador finaceiro?

Como devo expor os endpoints da API do sistema para consumo de outros sistemas da Mastermaq?
REST API com métodos tradicionais? Algum sistema atual utiliza SOAP e WSDLs que utilizem XML?

Qual equipe terei a disposição?

Quais máquinas e sistemas operacionais a Mastermaq oferece para seus desenvolvedores?

### O que você imagina como um primeiro backlog?

  - Criação de REST API em Node JS
    - Configuração do Banco de dados (Postgres ou Mongodb)
    - CRUD de Usuário
    - CRUD de Movimentação Financeira
    - Endpoints de Login
    - SSO: Facebook, Google
  - Criação da arquitetura e scaffolding inicial do front-end em ReactJS+Redux
      - Criação + Estilização da tela de Login
      - Criação + Estilização da tela de Usuário (Criação, Edição, Listagem, Remoção)
      - Criação + Estilização da tela de Movimentação Financeira (Criação, Edição, Listagem, Remoção)

**OBS:.** Vale ressaltar que caso um UX/UI designer esteja presente na equipe, será necessária uma sprint para definição de telas e funcionalidades antes do início das implementações tanto
do front-end quanto do back-end e banco de dados.