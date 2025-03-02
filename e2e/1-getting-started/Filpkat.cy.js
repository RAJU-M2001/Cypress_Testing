describe('Login Test',() => {
    
    it('Should open sucessfully',()=>{

        cy.visit('https://www.flipkart.com/');
       // cy.xpath("//span[text()='Login']").click();
        // cy.xpath("//input[@class='r4vIwl BV+Dqf']").type('rajutamilarasan1@gmail.com');
        // cy.xpath("//button[@class='QqFHMw twnTnD _7Pd1Fp']").click();

        cy.xpath("//input[@class='Pke_EE']").type('jbl headphones');
        cy.xpath("//button[@class='_2iLD__']").click();
       
       cy.get('#JBL Tune 770NC Active Noise Cancelling, 70Hr Playtime, Fast Pair & Multi Connect Bluetooth').click();




    });


});