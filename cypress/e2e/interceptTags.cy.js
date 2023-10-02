describe('Intercept request on https://angular.realworld.io/', () => {

  it('Intercept request and check against fixture', () => {

    cy.fixture('tags.json').then((array) => {
      cy.visit('https://angular.realworld.io/')

      cy.intercept('GET', '/api/tags', {fixture: 'tags.json'}).as('tags')

      cy.wait('@tags').then(intercept => {
        expect(intercept.response.body.tags.length).equal(10)
        expect(intercept.response.body).to.deep.equal(array)
      })
    })

  })

})