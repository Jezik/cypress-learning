describe("Using cypress for api testing", () => {

  it("GET request", () => {
    cy.GETrequest("posts/2").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property("userId", 1)
    })
  }),

  it("POST request", () => {
    cy.POSTrequest({"userId": 16, "title": "learn cypress", "completed": false}).then((response) => {
      expect(response.status).to.eq(201)
      expect(response.body.userId).to.eq(16)
      expect(response.body.title).to.eq("learn cypress")
    })
  }),

  it("PUT request", () => {
    cy.PUTrequest({"title": "learn cypress", "completed": false}).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.completed).to.eq(false)
      expect(response.body.title).to.eq("learn cypress")
    })
  }),

  it("PATCH request", () => {
    cy.PATCHrequest({"userId": 16, "title": "learn cypress", "completed": false}).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.userId).to.eq(16)
      expect(response.body.id).to.eq(5)
      expect(response.body.title).to.eq("learn cypress")
    })
  }),

  it("DELETE request", () => {
    cy.DELETErequest("todos/5").then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})