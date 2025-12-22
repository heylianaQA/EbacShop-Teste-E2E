/// <reference types="cypress"/>

const perfil = require('../fixtures/perfil.json')

describe('Funcinalidade: Login', ()=> {
    beforeEach(() => {
        cy.visit('minha-conta/')
    })

    it('Login com sucesso com dados fixos', ()=>{
        cy.get('#username').type('liana.teste@cypress.com')
        cy.get('#password').type('qateste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })

    it('Menssagem de erro ao inserir usuario incorreto', ()=> {
        cy.get('#username').type('lianateste@cypress.com')
        cy.get('#password').type('qateste123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido')
    })

    it('Menssagem de erro ao inserir senha incorreto', ()=> {
        cy.get('#username').type('liana.teste@cypress.com')
        cy.get('#password').type('qateste')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain', 'Erro:')
    })

    it('Login com sucesso utilizando fixtures', ()=> {
        cy.fixture('perfil').then(dados => {
        cy.get('#username').type(dados.usuario)
        cy.get('#password').type(dados.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
        })
    })

    it('Login com sucesso usando Commands', ()=> {
        cy.login('liana.teste@cypress.com', 'qateste123')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá,')
    })

})