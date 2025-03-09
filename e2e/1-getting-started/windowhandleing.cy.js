// describe('Use windowhandling',()=> {
//     it('Test site', ()=> {
//         // cy.visit('https://the-internet.herokuapp.com/windows');

//         // cy.get('.example >a').invoke('removeAttr','target').click();

//         // cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

//         // cy.wait(3000);

//         // cy.go('back');

//         cy.visit('https://webdriveruniversity.com/');

//         cy.get('#actions').invoke('removeAttr','target').click();

//         cy.url().should('include','https://webdriveruniversity.com/Actions/index.html')

//         cy.wait(3000);

//         cy.go('back');
//         });
// });


describe('Window Handeling', () => {
    it('Test the scenario', ()=> {
 
     cy.visit('https://webdriveruniversity.com/');

     cy.get('#actions').invoke('removeAttr','target').click();

     cy.url().should('include','https://webdriveruniversity.com/Actions/index.html')

     cy.wait(6000);

     cy.go('back');

    });
});