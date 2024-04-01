# 🚀 Projeto: Trybesmith

## ℹ️ Sobre o Projeto

O projeto Trybesmith consiste no desenvolvimento de uma API para uma loja de itens medievais, utilizando Typescript e Sequelize. A aplicação terá endpoints para cadastro e listagem de produtos, listagem de pedidos, login de usuários, e validações dos produtos. Os testes serão desenvolvidos para garantir a qualidade e funcionamento correto das funcionalidades.

## 🛠️ Tecnologias e Habilidades

- **Linguagens Utilizadas:** Typescript, JavaScript
- **Framework:** Express.js
- **ORM:** Sequelize
- **Autenticação:** JWT (JSON Web Tokens)
- **Padrões de Projeto:** MVC (Model-View-Controller)
- **Testes:** Jest
- **Validação de Dados:** Middleware do Express.js
- **Persistência de Dados:** Interfação com banco de dados relacional usando Sequelize

## 📋 Funcionalidades Implementadas

### 01 - Cadastro de Produtos

- Desenvolvimento do endpoint POST /products para cadastrar novos produtos na loja.
- Implementação dos testes para garantir o correto funcionamento do cadastro de produtos.

### 02 - Listagem de Produtos

- Desenvolvimento do endpoint GET /products para listar todos os produtos disponíveis na loja.
- Implementação dos testes para garantir o correto funcionamento da listagem de produtos.

### 03 - Listagem de Pedidos

- Desenvolvimento do endpoint GET /orders para listar todos os pedidos realizados na loja, incluindo os produtos associados a cada pedido.
- Implementação dos testes para garantir o correto funcionamento da listagem de pedidos.

### 04 - Login de Usuários

- Desenvolvimento do endpoint POST /login para autenticar usuários e gerar um token JWT de acesso.
- Implementação dos testes para garantir o correto funcionamento do login de usuários.

### 05 - Validações de Produtos

- Implementação das validações necessárias para o cadastro de produtos, incluindo verificação de campos obrigatórios e formato dos dados.
- Desenvolvimento dos testes para garantir o correto funcionamento das validações de produtos.

## 🪑 Tabelas do Banco de Dados

![Trybesmith](src/diagram-der.png)

## ℹ️ Habilidades Demonstradas

- Utilização do framework Express.js para desenvolvimento de APIs RESTful.
- Integração com banco de dados relacional MySQL através do ORM Sequelize.
- Implementação de autenticação de usuários com JWT.
- Desenvolvimento de CRUD para múltiplas entidades (Usuários, Produtos e Pedidos).
- Realização de validações de dados para garantir a integridade das informações na aplicação.
- Utilização de testes automatizados com Jest para garantir a qualidade e funcionamento correto das funcionalidades.
