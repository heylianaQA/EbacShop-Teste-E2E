/// <reference types="cypress"/>

describe('Funcionalidade: Detalhes da Conta', ()=> {
    before(() => {
        cy.visit('minha-conta/edit-account/')
        cy.fixture('perfil').then(login => {
            cy.login(login.usuario, login.senha)
        })
    });

    it('Alterar Detalhes da conta com sucesso', ()=> {
        cy.detalhesConta('Liana', 'Kahil', 'Liana')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    })
})