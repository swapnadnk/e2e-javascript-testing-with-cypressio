describe('basic page interactions', ()=>{
    beforeEach(()=>{
        // cy.visit('/example-4')
        const e4Path = Cypress.env('EXAMPLE_4_PATH')
        cy.visit(e4Path)
    })

    it('shows three options in box 1', ()=>{
        // cy.get('ul[data-cy=box-1-items-list] > li').filter('.box-1-list-item').should('have.length', 3)
        cy.get('ul[data-cy=box-1-items-list] > li').not('.extra-li').should('have.length', 3)
    })

    it('sets the header text to the item name when double clicked', ()=>{
        cy.get('ul[data-cy=box-1-items-list] > li').eq(2).dblclick()
        cy.get('span[data-cy=box-1-selected-name]').invoke('text').should('equal', 'Option Three')
    })

    it('displays the correct number of options', ()=>{
        cy.get('div[data-cy=box-2-checkboxes] input[type=checkbox]').eq(0).check()
        cy.get('div[data-cy=box-2-checkboxes] input[type=checkbox]').eq(1).check()
        cy.get('span[data-cy=box-2-selected-count]').invoke('text').should('equal', '2')

        cy.get('div[data-cy=box-2-checkboxes] input[type=checkbox]').eq(1).uncheck()
        cy.get('span[data-cy=box-2-selected-count]').invoke('text').should('equal', '1')
    })

    it('displays the currently selected dropdown option', ()=>{
       cy.get('span[data-cy=box-3-selected-name').invoke('text').should('equal', 'Nothing selected')
       cy.get('select[data-cy=box-3-dropdown]').select('Option Two')
       cy.get('span[data-cy=box-3-selected-name').invoke('text').should('equal', 'Option Two')
    })

    it('sets the header text to the item name when hovered over', ()=>{
        cy.get('span[data-cy=box-4-selected-name]').invoke('text').should('equal', 'Nothing selected')
        cy.get('ul[data-cy=box-4-items-list] > li').eq(2).trigger('mouseover')
        cy.get('span[data-cy=box-4-selected-name]').invoke('text').should('equal', 'Option Three')
    })

})