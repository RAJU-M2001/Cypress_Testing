describe('Using Window Handeling', ()=> {
    it('Test',()=> {
        cy.visit('https://www.amazon.in/');
        cy.get('#twotabsearchtextbox').type('Iphoen 16');
        cy.get('#nav-search-submit-button').click();
        //cy.xpath("(//div[@class='a-section a-spacing-small a-spacing-top-small'])[2]").invoke('removeAttr','target').click();
        
        //cy.url().should('include','https://www.amazon.in/iPhone-16-128-GB-Control/dp/B0DGJHBX5Y/ref=sr_1_2?crid=25UJ85I1WH0N6&dib=eyJ2IjoiMSJ9.YQ7f0XBMTTuyp8JcAKlLgFmvqxT3IogBQqa06CU92GRVo3dxgbChIk2fXMG-Specw96exsEdUe9O32n4Nk74gsMNIO7R-ulmOWZkjyppurFABtm-Xn6Vq7RR00HwPDn7ZQEhjspTpblS00zA0tK604wVJgwFtJXoksjunHGirEl3JK7HxwXSaQv3WpIDyydumONsbyFMWJmzECvqxmgMFsJvqLQJZ_9-kpvk2WCV43Q.IQ3ITU2Q0Ed1GLyvbln_DGTPqOY_d-tocdy_HC_YV3I&dib_tag=se&keywords=ipone%2B16&qid=1741623915&sprefix=ipone%2Caps%2C235&sr=8-2&th=1');
        cy.xpath("(//a[@class='a-link-normal s-line-clamp-2 s-link-style a-text-normal'])[3]").invoke('removeAttr','target').click();
        cy.url().should('include','/dp/B0DGJHBX5Y');
       
        cy.scrollTo(0,200);
        cy.wait(2000);
        cy.xpath("(//input[@id='add-to-cart-button'])[2]").click();


    })
})
