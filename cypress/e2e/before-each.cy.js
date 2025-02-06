describe('Max character input functionality', function(){
    beforeEach(()=>{
        cy.visit('/example-3')

        cy.get('span[data-cy=first-name-chars-left-count]').invoke('text').as('fnCharsLeft')
        cy.get('#first-name-input').as('fnInput')
    })

    it('displays the appropriate remaining characters count with 5 characters', function(){
        cy.get('@fnCharsLeft').should('equal', '15')
        cy.get('@fnInput').type('Hello')
        cy.get('@fnCharsLeft').should('equal', '10')
    })

    it('displays the appropriate remaining characters count with 10 characters', function(){
        cy.get('@fnInput').type('HelloHello')
        cy.get('@fnCharsLeft').should('equal', '5')
    })

    it('displays the appropriate remaining characters count and prevents extra characters when full', function(){
        cy.get('@fnInput').type('HelloHelloHelloHello')
        cy.get('@fnInput').should('have.value', 'HelloHelloHello')
        cy.get('@fnCharsLeft').should('equal', '0')
    })
})