// <reference types="cypress" />
//let url = require("../Automação cypress/cypress/fixtures/example.json");

describe('buy product', () => {
    it('Login test', () => {
        cy.logar('performance_glitch_user','secret_sauce')
        cy.selectitem('Sauce Labs Backpack')
        cy.addtocart()
        cy.clickcheckout()
        cy.fillpersonaldata('Gabriel', "Araujo", "12345")
        cy.completebuy()
        cy.validatemessageofthanks()
    });
});

describe('hight price', () => {
    it('Login test', () => {
        cy.logar('performance_glitch_user','secret_sauce')
        cy.orderby('Price (high to low)')  
        cy.first_item()  
        cy.addtocart()
        cy.clickcheckout()   
        cy.click_to_continue()
        cy.name_is_required()
    });
});

describe('validate error with specific product', () => {
    it('validate error', () => {
        cy.logar('performance_glitch_user','secret_sauce')
        cy.selectitem('Sauce Labs Backpack')
        cy.addtocart()
        cy.clickcheckout()
        cy.click_to_continue()
        cy.name_is_required()
    });
    });
