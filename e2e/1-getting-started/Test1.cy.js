describe('Login test', () => {
    it('should open clssuccessfully', () => {
        cy.visit('https://www.amazon.in/'); // Replace with your URL
        // cy.get('#username').type('your_username');
        // cy.get('#password').type('your_password');
        // cy.get('#login-button').click();
        // cy.url().should('include', '/dashboard');
        cy.get('#twotabsearchtextbox').type('JBL Tune 770NC Wireless');
        cy.get('#nav-search-submit-button').click();
        cy.scrollTo(0, 200) // Scroll the window 500px down
            cy.get('.sidebar').scrollTo('bottom')
            cy.xpath("(//a[@class='a-link-normal s-line-clamp-2 s-link-style a-text-normal'])[7]").click();

        });
        //it('should scroll the window to the bottom',() => {
            // cy.scrollTo(0, 500) // Scroll the window 500px down
            // cy.get('.sidebar').scrollTo('bottom')
       // });
       //cy.contains('ul').end()
});

