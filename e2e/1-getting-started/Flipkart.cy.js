describe('Fundamental Testing',()=>{
    it('passes',() =>{
        // cy.visit('https://www.flipkart.com/');
        // cy.xpath("//div[@class='H6-NpN _3N4_BX']").click();
        // cy.xpath("//input[@class='r4vIwl BV+Dqf']").type('9629113839');
        // cy.go('back');
        // cy.xpath("//span[@role='button']").click();
        // cy.xpath("//input[@class='Pke_EE']").type('JBL Headphone');
        // cy.xpath("//button[@class='_2iLD__']").click();
        // cy.scrollTo(0,2600);
        // cy.xpath("(//a[@rel='noopener noreferrer'])[20]").click();
         
    
        ////invoke('removeAttr','target').click();
        //cy.url().should('include','https://www.flipkart.com/jbl-tune-770nc-active-noise-cancelling-70hr-playtime-fast-pair-multi-connect-bluetooth-gaming/p/itmdf5c83684df50?pid=ACCGQZVZWZFFPGYE&lid=LSTACCGQZVZWZFFPGYEZQYCGO&marketplace=FLIPKART&q=jbl+headphones&store=0pm%2Ffcn&srno=s_1_5&otracker=AS_QueryStore_OrganicAutoSuggest_1_8_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_8_na_na_na&fm=search-autosuggest&iid=1c742c37-1af9-4620-88f4-9789dfd45686.ACCGQZVZWZFFPGYE.SEARCH&ppt=sp&ppn=sp&ssid=tcpc22fg400000001741099495617&qH=0e8eaa0d16605fd0')
          cy.visit('https://www.amazon.in/');
          cy.get('#twotabsearchtextbox').type('jbl bluetooth headphones');
          cy.get('#nav-search-submit-button').click();
          cy.scrollTo(0,2100);
          //cy.xpath("//div[@class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_7']//div[@class='puis-card-container s-card-container s-overflow-hidden aok-relative puis-include-content-margin puis puis-v3rn136fedou3o2d7qtkyoduse5 s-latency-cf-section puis-card-border']").invoke('removeAttr','target').click();
          //cy.scrollTo(0,1000);
          //cy.get('#add-to-cart-button').click();
          //cy.get('.puis-card-container.s-card-container.s-overflow-hidden.aok-relative.puis-include-content-margin.puis.puis-v3rn136fedou3o2d7qtkyoduse5.s-latency-cf-section.puis-card-border[data-cy=asin-faceout-container][data-dib-asin=B096FYLJ6M]').invoke('removeAttr','target').then((newTableUrl)=> {
          //cy.scrollTo(0,800);
          //});
         
          cy.xpath("//div[@class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_7']//div[@class='puis-card-container s-card-container s-overflow-hidden aok-relative puis-include-content-margin puis puis-v3rn136fedou3o2d7qtkyoduse5 s-latency-cf-section puis-card-border']").invoke('removeAttr','target').click();
          cy.url().should('include','https://www.amazon.in/JBL-Cancellation-Headphones-Playtime-Assistant/dp/B096FYLJ6M/ref=sr_1_7?crid=1OCM63XR1JC99&dib=eyJ2IjoiMSJ9.2htoFPPB6PgPsYqtgcy1a7eGn-9ifc9b-XNZ57C_wWn3jZ783TG6hrHmJYYaxGyY7xhcqOijXtvc9rxtnoxzLY2ucrc1eQymenj9BCKr4l1KMjMida4EXEKCLWu3CVlHGNSCZgL6-SQxKPBSz6UrWGFiiG3SDkFvC-hStAM0FG2cwmAbWVI9SCVsw1JT5dgkgjDd6Y2bAuLsm4-3feqtfGNiBcpeJCb91rMmeHpwv7A.D4qXN8DmxgEwCLr9D84S5LzTRBRcgdVYenR0zCAFXHk&dib_tag=se&keywords=jbl%2Bbluetooth%2Bheadphones&nsdOptOutParam=true&qid=1741493095&sprefix=%2Caps%2C258&sr=8-7&th=1');
          cy.wait(3000);
          cy.go('back');
          


    

    
    });

});