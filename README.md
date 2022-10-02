# Projeto Blogs Api

Esse projeto foi realizado durante o Modulo de Back-end no Bloco 6 da formação da Trybe em outubro de 2022.

## O que foi desenvolvido

Neste projeto foi desenvolvida uma API e um banco de dados para a produção de conteúdo para um blog, essa aplicação é em Node.js e foi utilizado o Sequelize como ORM, MySQL como banco de dados e JWT para validações do usuário.

Você deverá desenvolver uma aplicação em Node.js usando o pacote sequelize para fazer um CRUD de posts.

## Como rodar a aplicação

Clone o repositório com o comando `git clone git@github.com:GusCabraal/project-blogs-api.git`

- ### Usando o docker

Há um arquivo `docker-compose.yml` configurado na raiz do projeto com os serviços `node` e `db`, rode o comando `docker-compose up -d` para subir os containers, e dentro do container `blogs_api` instale as dependencias com `npm install`.


## Rotas da aplicação

Há uma coleção de endpoints em formato JSON para importar no Insomnia no arquivo `routes-project-blogs-api.json`;

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

O usuário logado pode modificar apenas os posts de sua autoria.

- GET `/post` -> Lista todos os posts, com categoria e usuário autor;
- GET `/post/:id` -> Busca um post pelo seu ID, com categoria e usuário autor;
- GET `/post/search?q=searchTerm` -> Busca um post pelo seu titulo ou conteúdo;
- POST `/post` -> Cadastra um novo post vinculado ao usuário que esta logado;
- DELETE `/post/:id` -> Deleta um post com base no seu ID;
- PUT `/post/:id` -> Atualiza um post com base no seu ID;