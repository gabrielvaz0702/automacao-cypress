Cypress.Commands.add('fillpersonaldata',(nome, sobrenome, cep) =>{
    cy.get('[data-test="firstName"]').type(nome)
    cy.get('[data-test="lastName"]').type(sobrenome)
    cy.get('[data-test="postalCode"]').type(cep)
    cy.get('[data-test="continue"]').click()
})

Cypress.Commands.add('name_is_required', () => {
    cy.contains('Error: First Name is required').should('be.visible')
})