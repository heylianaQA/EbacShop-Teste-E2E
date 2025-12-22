// ***********************************************

Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha), {log:false}
    cy.get('.woocommerce-form > .button').click()

})

Cypress.Commands.add('preCadastro', (email, senha, firstName, lastName) => {
    cy.get('[name="email"]').type(email)
    cy.get('.register > :nth-child(2) > [name="password"]').type(senha)
    cy.get('[name="register"]').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
    cy.get('[name="account_first_name"]').type(firstName)
    cy.get('[name="account_last_name"]').type(lastName)
    cy.get('[name="save_account_details"]').click()
})

Cypress.Commands.add('detalhesConta', (firstName, lastName, username)=> {
    cy.get('[name="account_first_name"]').type(firstName)
    cy.get('[name="account_last_name"]').type(lastName)
    cy.get('#account_display_name').type(username)
    cy.get('.woocommerce-Button').click()
})