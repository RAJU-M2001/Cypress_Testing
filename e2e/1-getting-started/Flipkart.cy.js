describe('Fundamental Testing',()=>{
    it('passes',() =>{
        cy.visit('https://www.flipkart.com/');
        cy.xpath("//div[@class='H6-NpN _3N4_BX']").click();
        cy.xpath("//input[@class='r4vIwl BV+Dqf']").type('9629113839');
        cy.go('back');
        cy.xpath("//span[@role='button']").click();
        cy.xpath("//input[@class='Pke_EE']").type('JBL Headphone');
        cy.xpath("//button[@class='_2iLD__']").click();
        cy.scrollTo(0,2600);
        cy.xpath("(//a[@class='wjcEIp'])[19]").click();
        cy.xpath("//button[@class='QqFHMw vslbG+ _3Yl67G FMWyoY']").invoke


        


    });

});