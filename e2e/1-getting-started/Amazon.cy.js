//const cypress = require("cypress");

describe ('My First Test',() => {

    it ('Verify title-positive', () => {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.title().should ('eq', 'OrangeHRM')

    })

    it('verify title-Negive test',() => {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.title().should('eq', 'OrangeHRM123')
    })

})
