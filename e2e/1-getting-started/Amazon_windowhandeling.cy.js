describe('Window Handling',()=> {
    it('Using in Amazon', ()=> {
        cy.visit('https://www.amazon.in/');
        
        cy.get('#twotabsearchtextbox').type('macbook m1');

        cy.get('#nav-search-submit-button').click();

        cy.scrollTo(0,100);

        cy.xpath("(//a[@class='a-link-normal s-line-clamp-2 s-link-style a-text-normal'])[1]").invoke('removeAttr','target').click();

        //cy.url().should('include','https://www.amazon.in/Apple-MacBook-Chip-13-inch-256GB/dp/B08N5W4NNB/ref=sr_1_1_sspa?crid=TITDX4AIXOM8&dib=eyJ2IjoiMSJ9.1Pg5sTfVWQyxFmJO72YGPH1KZdiiNs_4QT5Cv5l_pwG26weCxtH78UC2hlaqbDHfqKfPtZOgGrlT_jqCo5DLaTS6H-_nK-xipFEzhyzq0novksKLq4T1K78SF4hAaR8BBmyFWWmlkyHYFe7P_KCRUzKWI6l-v3e3T_zl0a8TcySoNls4BQDkHlTX38UWUi7fmqMe58_-gzS2F7BRY0Gbnu50XXiBksqg2FR_re-8Gts.ueInlOU-O9WI-edP-DfMjP3NnCyx-4E4HrecadbDTs0&dib_tag=se&keywords=macbook%2Bm1&qid=1741538092&sprefix=%2Caps%2C550&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1#');
       
        cy.url().should('include', '/dp/B08N5W4NNB');

        cy.scrollTo(0,500);

        cy.wait(5000);

        cy.xpath("(//input[@id='add-to-cart-button'])[2]").click();

        cy.wait(5000);

        cy.xpath("(//input[@class='a-button-input'])[32]").click();

        cy.wait(5000);

        cy.get('[aria-label="Delete Apple MacBook Air Laptop: Apple M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Grey"] > .a-icon');

        cy.wait(5000);

        cy.go('back');


    });
});