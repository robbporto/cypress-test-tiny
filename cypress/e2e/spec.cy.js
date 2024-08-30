/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')

    // expect to find a text saying blablabla
    cy.get('h1').should('have.text', 'blablabla')

  })
})
