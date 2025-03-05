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
        cy.xpath("(//a[@rel='noopener noreferrer'])[20]").click();
         
        


        ////invoke('removeAttr','target').click();
        //cy.url().should('include','https://www.flipkart.com/jbl-tune-770nc-active-noise-cancelling-70hr-playtime-fast-pair-multi-connect-bluetooth-gaming/p/itmdf5c83684df50?pid=ACCGQZVZWZFFPGYE&lid=LSTACCGQZVZWZFFPGYEZQYCGO&marketplace=FLIPKART&q=jbl+headphones&store=0pm%2Ffcn&srno=s_1_5&otracker=AS_QueryStore_OrganicAutoSuggest_1_8_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_8_na_na_na&fm=search-autosuggest&iid=1c742c37-1af9-4620-88f4-9789dfd45686.ACCGQZVZWZFFPGYE.SEARCH&ppt=sp&ppn=sp&ssid=tcpc22fg400000001741099495617&qH=0e8eaa0d16605fd0')

    });

});