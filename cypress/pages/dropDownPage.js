class dropDownPage {
    elements = {
        dropDown1 : () => cy.get("#dropdowm-menu-1"),
        dropDown2 : () => cy.get("#dropdowm-menu-2"),
        dropDown3 : () => cy.get("#dropdowm-menu-3"),

        checkbox1 : () => cy.get("[value='option-1']"),
        checkbox2 : () => cy.get("[value='option-2']"),
        checkbox3 : () => cy.get("[value='option-3']"),

        radiobutton : () => cy.get("[name='color'][value='orange']"),

        vitamin1 : () => cy.get("[value='lettuce']"),
        vitamin2 : () => cy.get("#fruit-selects")
    }

    selectAllDropdowns() {
        this.elements.dropDown1().select("JAVA");
        this.elements.dropDown2().select("TestNG");
        this.elements.dropDown3().select("JavaScript");
    }

    selectCheckboxes() {
        this.elements.checkbox3().uncheck();
        this.elements.checkbox1().check();
        this.elements.checkbox2().check();
    }

    selectDesiredRadio() {
        this.elements.radiobutton().check();
    }

    selectVitamins() {
        this.elements.vitamin1().check();
        this.elements.vitamin2().select("Apple");
    }
}

module.exports = new dropDownPage();