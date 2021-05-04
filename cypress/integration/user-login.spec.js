/* eslint-disable prettier/prettier */

describe('User form', () => {
    it('Contains input and instruction', () => {
        cy.visit('/')
        
        cy.get('#formVal').within(() => {
            cy.get('h1').contains('Hello there!')
            cy.get('p').contains('Please enter your 4-digit account reference number:')
        })
    })
    it('Does not submit without a user input', () => {
        cy.visit('/')

        cy.get('#formVal').invoke('submit', (e) => {
            e.preventDefault()
            throw new Error('Submitting without value!!!')
        })

        cy.get('#formVal').within(() => {
            cy.get('button').click()
        })
    })
})