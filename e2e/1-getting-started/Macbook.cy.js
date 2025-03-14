describe('HRM',()=>{
    it('Test the case',()=>{

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get("input[placeholder='Username']").type('Admin');
    cy.get("input[placeholder='Password']").type('admin123');
    cy.get("button[type='submit']").click();
    cy.get('body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1) > span:nth-child(2)').click();
    cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
   // cy.xpath("(//div[@class='oxd-select-text-input'])[1]").select('Admin').should('value.check','Admin').click();
//    cy.get(".oxd-select-text").click()
//    cy.get(".oxd-select-dropdown").should('be.visible').contains('Admin').click();
// cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1) > span:nth-child(2)").click();
// cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
// cy.get(".oxd-select-text").click()
// cy.get(".oxd-select-dropdown").should('be.visible').contains('Senior QA Lead').click()
cy.xpath("(//div[@class='oxd-select-text-input'])[1]").click()
cy.get(".oxd-select-dropdown").should('be.visible').contains('Admin').click();

cy.xpath("(//div[@class='oxd-select-text-input'])[2]").click()
cy.get(".oxd-select-dropdown").should('be.visible').contains('Enabled').click();
    })
})