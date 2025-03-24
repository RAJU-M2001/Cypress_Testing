// describe('Fundamental Testing',() => {
//     it('Test the HRM',() =>  {
//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//         cy.get('input[name="username"]').type('Admin');
//         cy.get('input[name="password"]').type('admin123');
//         cy.get('button[type="submit"]').click();
//         cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click();
//         cy.get('a[href="/web/index.php/pim/viewPimModule"]').click();
//         cy.get('a[href="/web/index.php/leave/viewLeaveModule"]').click();
//         cy.xpath("(//a[@class='oxd-main-menu-item'])[3]").click();
//         cy.xpath("(//a[@class='oxd-main-menu-item'])[4]").click();
//         cy.xpath("(//a[@class='oxd-main-menu-item'])[5]").click();
//         cy.xpath("//input[@placeholder='First Name']").clear().type('Raju');
//         cy.xpath("//input[@placeholder='Last Name']").clear().type('M');
//         cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").clear().type('RFD123');
//         cy.xpath("(//input[@class='oxd-input oxd-input--active'])[3]").clear().type('282545645656');
        
//         //cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").clear().type('2025-3-4');    
//         //cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]").click();
//         //cy.xpath("(//input[@class='oxd-input oxd-input--active'])[3]").type('2025-3-8');

//     });

// });

describe('Test the HRM Demo website by cypress',()=>{
    it('Test content',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get("input[placeholder='Username']").type('Admin');
        cy.get("input[placeholder='Password']").type('admin123');
        cy.get("button[type='submit']").click();
        cy.wait(1000);
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)").click();
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
        cy.xpath("(//div[@class='oxd-select-text-input'])[1]").click();
        cy.get(".oxd-select-dropdown").should('be.visible').contains('Admin').click();
        cy.xpath("(//div[@class='oxd-select-text-input'])[2]").click();
        cy.get(".oxd-select-dropdown").should('be.visible').contains('Enabled').click();
        cy.get("input[placeholder='Type for hints...']").type('Ranga Akunuri')
        cy.get(".oxd-autocomplete-wrapper").contains('Ranga Akunuri').click();
        cy.get("div[class='oxd-form-row'] div[class='oxd-grid-2 orangehrm-full-width-grid'] div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").type('Race901');
        cy.get("div[class='oxd-grid-item oxd-grid-item--gutters user-password-cell'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").type('Race$901')
        cy.get("div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").type('Race$901');
        cy.get("button[type='submit']").click();
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)").click();
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)").click();
        // cy.get(".oxd-icon.bi-plus").click()
        // cy.get('input[type="file"]').selectFile('cypress/fixtures/20220210_230553.jpeg', {force : true});
        cy.wait(2000);
        cy.get(".oxd-icon.bi-plus").click()
        cy.get('input[type="file"]').selectFile('cypress/fixtures/20220210_230553.jpeg',{force : true});
        cy.wait(1000);
        cy.get("input[placeholder='First Name']").type('Race')
        cy.get("input[placeholder='Middle Name']").type('AK')
        cy.get("input[placeholder='Last Name']").type('24H')
        cy.get("div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']").clear().type('901');
        cy.get(".oxd-switch-input.oxd-switch-input--active.--label-right").click();
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)").type('Race901')
        cy.get("div[class='oxd-grid-item oxd-grid-item--gutters user-password-cell'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").type('Race$901');
        cy.get("div[class='oxd-grid-item oxd-grid-item--gutters'] div[class='oxd-input-group oxd-input-field-bottom-space'] div input[type='password']").type('Race$901');
        cy.get("button[type='submit']").click();
        cy.get("a[class='oxd-main-menu-item active'] span[class='oxd-text oxd-text--span oxd-main-menu-item--name']").click();
        cy.get("div[class='--toggle'] button[type='button']").click();
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)").clear().type('2025-02-02')
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)").clear().type('2025-02-09');
        cy.get("div[class='oxd-multiselect-wrapper'] div[class='oxd-select-text-input']").click();
        cy.get(".oxd-multiselect-wrapper").contains('Scheduled').click();
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").click();
        cy.get(".oxd-select-wrapper").contains('CAN - FMLA').click()
        cy.get("input[placeholder='Type for hints...']").type('Race901');
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)").click()
        cy.get(".oxd-select-wrapper").contains('Quality Assurance').click();
        cy.get(".oxd-switch-input.oxd-switch-input--active.--label-right").click();
        cy.get("button[type='submit']").click();
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(4) > a:nth-child(1) > span:nth-child(2)").click();
        cy.get("input[placeholder='Type for hints...']").type('Race901');
        cy.get("button[type='submit']");
        cy.get("div[role='rowgroup'] div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(3) div:nth-child(1) div:nth-child(1) button:nth-child(1)").click();
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--ghost']").click();
        cy.get("input[placeholder='Type for hints...']").type('HRMDemo');
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(1) > td:nth-child(3) > div:nth-child(2) > div:nth-child(2) > input:nth-child(1)").type('02:22')
        cy.get("button[type='submit']").click();
    

    })
})