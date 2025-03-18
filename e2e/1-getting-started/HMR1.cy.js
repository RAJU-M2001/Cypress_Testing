describe('Test the HRM Demo Website',()=> {
    it('Test by cypress',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type('admin123');
        cy.get("button[type='submit']").click();
       
        //Open Admin fields
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)").click();
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
      
        //Handeling the dropdown method 
        cy.xpath("(//div[@class='oxd-select-text-input'])[1]").click()
        cy.get('.oxd-select-dropdown').should('be.visible').contains('Admin').click();

        cy.xpath("(//div[@class='oxd-select-text-input'])[2]").click();
        cy.get('.oxd-select-dropdown').should('be.visible').contains('Enabled').click();
        
        //Set Emp name & User name
        cy.get("input[placeholder='Type for hints...']").type('Anna Garcia')
        cy.get(".oxd-autocomplete-wrapper").contains('Anna Garcia').click();
        
        cy.get("div[class='oxd-form-row'] div[class='oxd-grid-2 orangehrm-full-width-grid'] div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").type('arun2001');
        
        //Set password
        cy.get("div[class='oxd-grid-item oxd-grid-item--gutters user-password-cell'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").type('Lara@8989');
        cy.get("div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").type('Lara@8989');
        
        //Subit the Admin field 
        cy.get("button[type='submit']").click();



    })

});