describe('different types of assertions', ()=>{
    beforeEach(()=>{
        cy.visit('/example-4')
    })

    it('has a list in box 1', ()=>{
        cy.get('[data-cy=box-1-items-list]').should('exist');
    })

    it('displays three options in box 1', ()=>{
        cy.get('[data-cy=box-1-items-list] > li').should('have.length', 3);
    })
})