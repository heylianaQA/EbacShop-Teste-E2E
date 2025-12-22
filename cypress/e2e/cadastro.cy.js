/// <reference types="cypress"/>

import {faker} from '@faker-js/faker'

describe('Funcionalidade: Cadastro', () => {
  beforeEach(() => {
    cy.visit('minha-conta/')
  });

  it('Cadastro com Sucesso', () =>{
    // criando cadastro
    cy.get('[name="email"]').type(faker.internet.email())
    cy.get('.register > :nth-child(2) > [name="password"]').type(faker.internet.password())
    cy.get('[name="register"]').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')

    // alterações cadastrais
      cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
      cy.get('[name="account_first_name"]').type(faker.person.firstName())
      cy.get('[name="account_last_name"]').type(faker.person.lastName())
      cy.get('[name="save_account_details"]').click()
      cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  })

  it('Cadastro com Sucesso e alterações cadastrais usando variaveis', () => {
    let name = faker.person.firstName()
    let lastName = faker.person.lastName()
    let email = faker.internet.email(name)

    // criando cadastro
      cy.get('[name="email"]').type(email)
      cy.get('.register > :nth-child(2) > [name="password"]').type('qateste123')
      cy.get('[name="register"]').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
      // alterações cadastrais
      cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
      cy.get('[name="account_first_name"]').type(name)
      cy.get('[name="account_last_name"]').type(lastName)
      cy.get('[name="save_account_details"]').click()
      cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
  })

  it('Cadastro com sucesso - usando comando', ()=> {
    cy.preCadastro(faker.internet.email(), 'qateste123', faker.person.firstName(), faker.person.lastName())
    cy.get('.woocommerce-message').should('exist')
  })

})