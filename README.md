# EbacShop-Teste-E2E
Projeto de automação de testes end-to-end para o e-commerce EBAC Shop, focando no gerenciamento de cadastros e produtos utilizando Cypress.

## 💡 Sobre o Projeto
Este projeto automatiza os principais fluxos do e-commerce EBAC Shop (http://lojaebac.ebaconline.art.br/), incluindo gestão de cadastros, autenticação e interações com produtos. Os testes foram desenvolvidos utilizando Cypress e organizados em diferentes suites para melhor manutenção e escalabilidade.

## 🛠️ Tecnologias Utilizadas
- Cypress - Framework de teste E2E
- Faker - Geração de dados para teste
- VSCode - Editor de código

## 📁 Estrutura do Projeto

```
└── cypress/
    ├── e2e/
    │   └── loja-ebac/
    │       ├── cadastro.cy.js
    │       ├── detalhes-conta.cy.js
    │       ├── login.cy.js
    │       └── produtos.cy.js
    ├── fixtures/
    │   ├── perfil.json
    │   └── produtos.json
    └── support/
        └── produtos.page.js
```

## 📋 Suites de Testes
- Cadastramento com Sucesso (dados dinâmicos)
- Cadastramento com Sucesso e Alteração de Dados Cadastrais
- Cadastramento com Sucesso com Dados Fixos

### Detalhes da Conta
- Alteração de dados cadastrais (utilizando dados fixos do arquivo perfil.json)

### Login
- Login com sucesso
- Mensagem de erro com email incorreto
- Mensagem de erro com senha incorreta
- Login com sucesso (utilizando dados do perfil.json)

### Produtos
- Selecionar um produto na Lista
- Pesquisar produto com sucesso
- Visitar página do produto
- Adicionar Produto ao Carrinho
- Adicionar produtos ao carrinho (utilizando massa de dados)

## 🚀 Como Executar

1. Clone o repositório
2. Instale as dependências:
```bash
npm install
```
3. Execute os testes:
```bash
npm run cy:run    # Executa em modo headless
```

## 📝 Notas Importantes

- O projeto utiliza o Faker para geração de dados dinâmicos nos testes de cadastro
- Alguns testes utilizam dados fixos armazenados em arquivos JSON na pasta fixtures
- A página de produtos possui sua própria classe de página (page object) em support/produtos.page.js
- Testes podem ser executados via interface do Cypress ou linha de comando
