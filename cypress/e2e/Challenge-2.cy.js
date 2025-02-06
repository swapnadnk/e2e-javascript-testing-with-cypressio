describe('challenge 2', ()=>{
    beforeEach(()=>{
        cy.visit('/example-4')
    })

    it('backgound color of the selection is grey in box1', ()=>{
        cy.get('ul[data-cy=box-1-items-list] > li').eq(2).as('thirdItem');
        cy.get('@thirdItem').click()
        .should('have.css', 'background-color', 'rgb(221, 221, 221)')
    })

})