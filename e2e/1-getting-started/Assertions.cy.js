describe("Assertion demo", () => {

    it("Implicit Assertion", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // In Implicit Assertion they using some keyword like (Should , And)--------

        cy.url().should('include','orangehrmlive.com'); //the paticular text is match or not
        // url means website url // should is means keywords //// 'include also important keywords for implicit
        
        cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //exectly match
        //'eq' means equality for the given url and get url

        cy.url().should('contain','orangehrmlive');
        //This is the another method of compareasion for implicit assertion 

    });
});