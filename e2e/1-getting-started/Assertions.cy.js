describe("Assertion demo", () => {

    it("Implicit Assertion", () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    // In Implicit Assertion they using some keyword like (Should , And)--------

        //cy.url().should('include','orangehrmlive.com'); //the paticular text is match or not
        // url means website url // should is means keywords //// 'include also important keywords for implicit
        
        //cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); //exectly match
        //'eq' means equality for the given url and get url

        //cy.url().should('contain','orangehrmlive');
        //This is the another method of compareasion for implicit assertion 

        //Another methods
      
    //   cy.url().should('include','orangehrmlive.com');
    //   .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    //   .should('contain','orangehrmlive');

      cy.url().and('include','orangehrmlive.com');
      cy.url().and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      cy.url().and('contain','orangehrmlive');

      cy.title().should('include','Orange');
      cy.title().and('eq',"OrangeHRM");
      cy.title().and('contain',"HRM");

      cy.get('.orangehrm-login-branding > img').should('be.visible'); //This methods are used to check the image is visible or not
      cy.get('.orangehrm-login-branding > img').should('exist'); //It will check the logo exist or not

      cy.xpath("//a").should('have.length','5'); // find tge number of links in the site

      cy.get("input[placeholder='Username']").type("Admin"); // provided the value into inputbox 

      cy.get("input[placeholder='Username']").should('have.value','Admin');




    });
});