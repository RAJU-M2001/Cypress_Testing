//import 'cypress-file-upload';


describe('Upload Image for profile', ()=> {
    it('Using cypress to upload the image',()=> {
        // cy.visit("https://the-internet.herokuapp.com/upload") 
        // cy.get("#file-upload").attachFile('sample.png');
        // cy.get('#file-submit').click();
        // cy.wait(5000);
        // cy.get("div[class='example'] h3").should('have.text','File Uploaded!');

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click();
        cy.wait(1000);
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(2) > a:nth-child(1) > span:nth-child(2)").click();
        cy.get("button[class='oxd-button oxd-button--medium oxd-button--secondary']").click();
        //cy.xpath("//img[@class='employee-image']").attachFile('sample.png');
        //cy.wait(5000);
        //cy.xpath("(//button[@type='button'])[4]").click();
//         cy.get('.oxd-icon.bi-plus').click();
//         cy.get('input[type="file"]')
//   .selectFile('cypress/fixtures/sample.png', { force: true });

         cy.get(".oxd-icon.bi-plus").click()
         cy.get('input[type="file"]').selectFile('cypress/fixtures/20220210_230553.jpeg', {force : true});
         cy.get(".oxd-switch-input.oxd-switch-input--active.--label-right").click();
         cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > label:nth-child(1) > span:nth-child(2)").click();
         cy.get(".oxd-main-menu-item.active").click();
         cy.get("i[class='oxd-icon bi-caret-down-fill']").click();
    })

});