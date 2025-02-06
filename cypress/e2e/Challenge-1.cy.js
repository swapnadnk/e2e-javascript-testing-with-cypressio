describe('challenge-1', function(){
    beforeEach(()=>{
        cy.visit('/challenge-1');
        cy.get('input[data-cy=first-name-input]').as('fnInput')
        cy.get('span[data-cy=name-greeting]').invoke('text').as('nGreeting')
    })

    it('doesn\'t display any message when the text input is empty', function(){
        cy.get('@fnInput').should('have.value', '')
        cy.get('@nGreeting').should('equal', '')
    })

    it('displays a greeting when there is something inside the input', function(){
        cy.get('@fnInput').type('Swapna')
        cy.get('@nGreeting').should('equal', 'Hello, Swapna!')
    })
})