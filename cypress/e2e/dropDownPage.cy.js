import dropDownPage from "../pages/dropDownPage"


describe("DropDown, Checkbox, Radio Button and Selected interaction implementation", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html")
  }),

  it("Dropdown: select Java, TestNG, Javascript", () => {
    dropDownPage.selectAllDropdowns();
    dropDownPage.elements.dropDown1().should("have.value", "java")
    dropDownPage.elements.dropDown2().should("have.value", "testng")
    dropDownPage.elements.dropDown3().should("have.value", "javascript")
  }),   

  it("Select 1st and 2nd checkboxes, deselect the 3rd", () => {
    dropDownPage.selectCheckboxes();
    dropDownPage.elements.checkbox1().should("be.checked")
    dropDownPage.elements.checkbox2().should("be.checked")
    dropDownPage.elements.checkbox3().should("not.be.checked")
  }),

  it("Select orange radiobutton", () => {
    dropDownPage.selectDesiredRadio();
    dropDownPage.elements.radiobutton().should("be.checked")
  }),

  it("Select lettuce and apple", () => {
    dropDownPage.selectVitamins();
    dropDownPage.elements.vitamin1().should("be.checked")
    dropDownPage.elements.vitamin2().should("have.value", "apple")
  })
})