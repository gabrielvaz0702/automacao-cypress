// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const cypress = require("cypress")


Cypress.Commands.add('selectitem',(item) =>{
    cy.get('div').contains(item).click()
})

Cypress.Commands.add('addtocart',() =>{
    cy.get('[class="shopping_cart_container"]').click()
})

Cypress.Commands.add('orderby', (order) => {
    // cy.get('[class="select_container"]').contains(order).click(order)
    cy.get('[data-test="product_sort_container"]').select(order)
})

Cypress.Commands.add('first_item', () => {
    cy.get('[class="inventory_item_description"]').first().click()
    cy.get('button').contains('Add to cart').first().click()
})

Cypress.Commands.add('click_to_continue', () => {
    cy.get('[data-test="continue"]').click()
})

