/* eslint-disable prettier/prettier */

describe('User form', () => {
    it('Contains input and instruction', () => {
        cy.visit('/')
        
        cy.get('#formVal').within(() => {
            cy.get('h1').contains('Hello there!')
            cy.get('p').contains('Please enter your 4-digit account reference number:')
        })
    })
})