describe('My First Test', () => {
    it('test1 - Verify the title-positive', () => {

         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); //Positive Code

         cy.title().should('eq','OrangeHRM');
    });

    it('test1 - Verify the title-Negative', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"); ///Negative Code

        cy.title().should('eq','OrangeHRM123');
    });
});