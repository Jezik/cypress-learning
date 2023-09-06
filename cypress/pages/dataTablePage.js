class dataTablePage {
    elements = {
        firstName : () => cy.get("#t01 tbody tr").eq(1).find("td").eq(0),
        secondName : () => cy.get("#t01 tbody tr").eq(2).find("td").eq(0),
        thirdName : () => cy.get("#t01 tbody tr").eq(3).find("td").eq(0)
    }

    createTestFile(name1Txt, name2Txt, name3Txt) {        
        cy.writeFile("cypress/fixtures/names.json", { name1: name1Txt, name2: name2Txt, name3: name3Txt })
    }
}

module.exports = new dataTablePage();