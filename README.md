# Projeto de Testes Automatizados com Cypress

Este repositório contém a automação de testes para a aplicação **Advantage Online Shopping**, utilizando o framework Cypress para testes web e API.

## Requisitos

- **Node.js** (versão 16 ou superior)
- **npm** (gerenciador de pacotes)

## Instalação e Execução

Para executar o projeto na sua máquina local, siga os passos abaixo:

### 1. Clonar o Repositório

Primeiro, clone este repositório para o seu ambiente local:

git clone https://github.com/kaiqferraz/automacao_advantage.git
cd automacao_advantage.git

### 2. Instalar Dependências

Em seguida, instale as dependências do projeto usando o npm:

npm install 

### 3. Executar o Cypress
Para iniciar o Cypress e executar os testes de forma interativa, use o seguinte comando:

npm run cypress:open
Isso abrirá a interface gráfica do Cypress, onde você pode selecionar as specs que deseja executar.

# Testes Automatizados
## WEB
**Teste 01:** Buscar Produto e Validar Carrinho
Descrição: Este teste realiza as seguintes etapas:

### Busca por um produto na aplicação.
- Adiciona o produto ao carrinho de compras.
- Valida os produtos presentes no carrinho na tela de pagamento.
Spec: validarProdutos.cy.js
Caminho: ADVANTAGE/e2e
Testar usando: Execute a spec acima para rodar o teste.

## API
**Teste 01:** Verificar Lista de Produtos e Status Code
Descrição: Este teste realiza as seguintes etapas:

- Verifica se a lista de produtos exibe apenas os produtos conforme a busca realizada.
- Valida o status code "200" da resposta do serviço.
Spec: procurarProduto.cy.js
Caminho: ADVANTAGE/e2e/api
Testar usando: Execute a spec acima para rodar o teste.

**Teste 02:** Atualizar Produto e Validar Dados
Descrição: Este teste realiza as seguintes etapas:

- Verifica se o produto foi atualizado corretamente.
- Verifica o ID da nova imagem inserida.
- Valida o status code "200" da resposta do serviço.
Spec: atualizarProduto.cy.js
Caminho: ADVANTAGE/e2e/api
Testar usando: Execute a spec acima para rodar o teste.

## FUNCIONAL
Descrição: Este teste realiza as seguintes etapas:

- Realize a busca de um produto;
- Incluir produto no carrinho;
- Validar os produtos incluídos no carrinho na tela de pagamento
Caminho: ADVANTAGE/funcional

**Links Úteis**
Documentação Swagger da Aplicação de Teste: Swagger API Docs
URL Padrão da Aplicação: Advantage Online Shopping
