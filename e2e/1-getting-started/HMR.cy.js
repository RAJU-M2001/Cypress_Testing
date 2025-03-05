describe('Fundamental Testing',() => {
    it('Test the HRM',() =>  {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();
        cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click();
        cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
        cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').click();
        //cy.get('input[placeholder="yyyy-dd-mm"]').type('2025-03-20');
        cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").type('2025-3-4');

    });

});