describe("leraning intercept and mocking api call", ()=>{

    it("sample api intercept", ()=>{

        cy.visit("https://dummyapi.io/explorer")

        cy.intercept({
            path : '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10'
        }).as('comments')

        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@comments').then(intercept => {
            expect(intercept.response.body.limit).equal(10)
            expect(intercept.response.body.total).equal(2)
        })
    })


    it("sample api mock", ()=>{

        cy.visit("https://dummyapi.io/explorer")

        cy.intercept('GET', '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10', {limit: 20, dummyName: 'joe poe'}).as("mockedComments")

        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@mockedComments').then(intercept => {
            expect(intercept.response.body.limit).equal(20)
            expect(intercept.response.body.dummyName).equal('joe poe')
        })
    })

    it("fixture api mock", ()=>{

        cy.visit("https://dummyapi.io/explorer")

        cy.intercept('GET', '/data/v1/post/60d21af267d0d8992e610b8d/comment?limit=10', {fixture: 'example.json'}).as("mockedComments")

        cy.get('.flex > :nth-child(5)').click()
        cy.wait('@mockedComments').then(intercept => {
            expect(intercept.response.body.email).equal('hello@cypress.io')

        })
    })

})