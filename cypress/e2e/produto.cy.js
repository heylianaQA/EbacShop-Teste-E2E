/// <reference types="cypress" />
import produtosPage from "../support/produtos.page";

describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
        produtosPage.visitarUrl('produtos')
    });

    it('Seleciona um produto na lista', () => {
        produtosPage.bucarProdutoLista('Arcadio Gym Short')
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Pesquisa de produto com sucesso', () => {
        let produto = 'Aero Daily Fitness Tee'
        produtosPage.buscarProdutos(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Visita página do produto', () => {
        produtosPage.visitarProduto('Zeppelin Yoga Pant')
        cy.get('.product_title').should('contain', 'Zeppelin Yoga Pant')
    });

    it('Adicionar produto ao carrinho', () => {
        let qtd = 3
       produtosPage.buscarProdutos("Orestes Fitness Short")
       produtosPage.adicionarProdutoCarrinho('34', 'Black', qtd)
       cy.get('.woocommerce-message').should('contain', 'adicionados no seu carrinho.')
    });

    it('Adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProdutos(dados[0].nomeProduto)
            produtosPage.adicionarProdutoCarrinho(
                dados[0].tamanhoProduto, 
                dados[0].corProduto, 
                dados[0].quantidadeProduto)
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
    });
});