describe('challenge 3', function(){
    it('displays the second input', function(){
        cy.visit('/example-3')

        // cy.get('input').filter('[data-cy=input-last-name]').should('exist')
        cy.get('input').not('[data-cy=input-first-name]').should('exist')
    })
})