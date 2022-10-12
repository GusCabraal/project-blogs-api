# Projeto Blogs Api

Esse projeto foi realizado durante o Modulo de Back-end no Bloco 6 da formação da Trybe em outubro de 2022.

## O que foi desenvolvido

Neste projeto foi desenvolvida uma API e um banco de dados para a produção de conteúdo para um blog, foi realizado um CRUD de postagens com uma camada de autenticação de pessoas usuárias.

Essa aplicação é em Node.js e foi utilizado o Sequelize como ORM, MySQL como banco de dados e JWT para autenticação de usuários.


## Como rodar a aplicação

- Clone o repositório com `git clone git@github.com:GusCabraal/project-blogs-api.git`

- ### Usando o docker

- Há um arquivo `docker-compose.yml` configurado na raiz do projeto com os serviços `node` e `db`, rode  `docker-compose up -d` para subir os containers;
- Entre no container `blogs_api` com `docker exec -it blogs_api bash`
- Instale as dependencias `npm install`
- Crie o banco de dados e as tabelas `npm run prestart`
- Popule as tabelas `npm run seed`
- Inicie o servidor `npm run debug`
- Importe o arquivo `routes-project-blogs-api.json` para dentro do Insominia
- Consuma a API sem moderação.


## Rotas da aplicação

Com essas rotas pode ser realizado um CRUD com o banco de dados. O usuário logado pode modificar apenas os posts de sua autoria.


### Rotas de usuário

- POST `/login` -> Faz o login na aplicação;
- POST `/user` -> Cadastra um novo usuário;
- GET `/user` -> Lista todos os usuários;
- GET `/user/:id` -> Busca um usuário pelo seu ID;
- DELETE `/user/:id` -> Deleta um usuário com base no seu ID;
- PUT `/user/:id` -> Atualiza um usuário com base no seu ID;

### Rotas de categorias

- GET `/categories` -> Lista todos as categorias;
- POST `/categories` -> Cadastra uma nova categoria;

### Rotas de posts

- GET `/post` -> Lista todos os posts, com categoria e usuário autor;
- GET `/post/:id` -> Busca um post pelo seu ID, com categoria e usuário autor;
- GET `/post/search?q=searchTerm` -> Busca um post pelo seu titulo ou conteúdo;
- POST `/post` -> Cadastra um novo post vinculado ao usuário que esta logado;
- DELETE `/post/:id` -> Deleta um post com base no seu ID;
- PUT `/post/:id` -> Atualiza um post com base no seu ID;
