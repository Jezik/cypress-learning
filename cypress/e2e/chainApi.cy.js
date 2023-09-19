describe("API chains", () => {
  let userId;

  it("GET user id for POST request", () => {
    cy.request("GET", "https://jsonplaceholder.typicode.com/users").then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.an("array").that.is.not.empty;

      const user = response.body.find((user) => user.username === "Antonette");
      expect(user).to.exist;
      userId = user.id;
    });
  });

  it("Make a POST request to /todos with the extracted user id", () => {

    const requestBody = {
      userId: userId,
      title: "make the homework",
      completed: true,
    };

    cy.request("POST", 'https://jsonplaceholder.typicode.com/todos', requestBody).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.userId).to.eq(2)
      expect(response.body.title).to.eq("make the homework")
      expect(response.body.completed).to.eq(true)        
    });
  });
});
