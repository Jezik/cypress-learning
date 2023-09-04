describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://sperasoft.com/')
  }),

  it('check sperasoft main page', () => {    
    cy.log().title()
    cy.get('#menu-main-menu > li.mk-header-logo > a > imgjjjjjjjj').should('be.visible')
  })   
})