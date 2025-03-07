describe('Fundamental Testing',() => {
    it('Test the HRM',() =>  {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click();
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
        cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').click();
        cy.xpath("(//a[@class='oxd-main-menu-item'])[3]").click();
        cy.xpath("(//a[@class='oxd-main-menu-item'])[4]").click();
        cy.xpath("(//a[@class='oxd-main-menu-item'])[5]").click();
        cy.xpath("//input[@placeholder='First Name']").clear().type('Raju');
        cy.xpath("//input[@placeholder='Last Name']").clear().type('M');
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").clear().type('RFD123');
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[3]").clear().type('282545645656');
        
        //cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").clear().type('2025-3-4');    
        //cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").click();
        //cy.xpath("(//input[@class='oxd-input oxd-input--active'])[3]").type('2025-3-8');

    });

});