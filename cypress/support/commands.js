
Cypress.Commands.add("GETrequest", (query) => {
    cy.request("GET",`${Cypress.env("env").apiURL+query}`)
})

Cypress.Commands.add("POSTrequest", (body) => {
    cy.request("POST", `${Cypress.env("env").todosURL}`, body)
})

Cypress.Commands.add("PUTrequest", (body) => {
    cy.request("PUT", `${Cypress.env("env").exampleTodosURL}`, body)
})

Cypress.Commands.add("PATCHrequest", (body) => {
    cy.request("PATCH", `${Cypress.env("env").exampleTodosURL}`, body)
})

Cypress.Commands.add("DELETErequest", (query) => {
    cy.request("DELETE", `${Cypress.env("env").apiURL+query}`)
})