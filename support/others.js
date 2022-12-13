Cypress.Commands.add('clickcheckout',() =>{
    cy.get('[data-test="checkout"]').click()
})


Cypress.Commands.add('completebuy',() =>{
    cy.get('[data-test="finish"]').click()
})

Cypress.Commands.add('validatemessageofthanks',() =>{
cy.get('span').contains('Checkout: Complete!').should('be.visible')
})
