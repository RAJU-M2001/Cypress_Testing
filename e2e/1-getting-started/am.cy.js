describe('window handleing test',()=>{
    it('Test',() => {
        cy.visit("https://www.amazon.in/")
        cy.get('#twotabsearchtextbox').type('jbl bluetooth headphones');
        cy.get('#nav-search-submit-button').click();
        cy.xpath("(//div[@class='a-section aok-relative s-image-fixed-height'])[1]").invoke('removeAttr', 'target').click();
        cy.xpath("//input[@id='add-to-cart-button']").click();
        



    });

});