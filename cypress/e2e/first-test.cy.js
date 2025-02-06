describe('Heading text', () => {
  it('contains the title of the site', () => {
    cy.visit('/example-1')
    cy.get('h1').should("have.text", "My Awesome Web Application")
  })
})