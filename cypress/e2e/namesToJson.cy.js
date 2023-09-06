import dataTablePage from "../pages/dataTablePage";

describe("Take first three names from a first table, push them into .json file, launch test to verify correct names", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/Data-Table/index.html")
    dataTablePage.elements.firstName().invoke("text").as("name1")
    dataTablePage.elements.secondName().invoke("text").as("name2")
    dataTablePage.elements.thirdName().invoke("text").as("name3")    
  })

  it("Create test .json file", function() {
    dataTablePage.createTestFile(this.name1, this.name2, this.name3)
  })

  it("Check test file content", () => {
    cy.readFile("cypress/fixtures/names.json").then((names) => {
      expect(names.name1).to.equal("John")
      expect(names.name2).to.equal("Jemma")
      expect(names.name3).to.equal("Michael")
    })
  })
})
