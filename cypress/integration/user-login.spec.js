/* eslint-disable no-unused-expressions */


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
    it('Does not submit with incorrect account number', () => {
        cy.visit('/')

        cy.get('#formVal').invoke('submit', (e) => {
            e.preventDefault()
            throw new Error('Invalid account number!!!')
        })

        cy.get('#formVal').within(() => {
            cy.get('#userIn').type(100)
            cy.get('button').click()
        
            cy.get('#userIn').type(10000)
            cy.get('button').click()
        })
    })
    it('Submits with correct user account number', () => {
        cy.visit('/')

        let submitted

        cy.get('#formVal').invoke('submit', (e) => {
            e.preventDefault()
            submitted = true
        })

        cy.get('#formVal').within(() => {
            cy.get('#userIn').type(1010)
            cy.get('button').click()
        })
        .then(() => {
            expect(submitted, 'form submitted').to.be.true
        })
    })
})

