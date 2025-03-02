const cypress = require("cypress");

describe('Cura Make Appointment',function(){

    it('vist the URL',function(){
       
        cypress.viste('https://katalon-demo-cura.herokuapp.com/');

    });

   
    it('Click on Makeappoint',function(){
        
        cypress.get('#btn-make-appointment').click();
        cypress.get('#txt-username').type('John Doe');
        cypress.get('#txt-password').type('ThisIsNotAPassword');
        cypress.get('#btn-login').click();

   
    });

    it('Make Appointment',function(){

        cypress.get('select').select('Hongkong CURA Healthcare Center').click();
        cypress.get('#id="chk_hospotal_readmission').click();
        cypress.get('#radio_program_medicaid').click();
        cypress.get('#txt_visit_date').type('30/02/2025');
        cypress.get('#txt_comment').click({force:true});
        cypress.get('txt_comment').type('Pramod Dutta will be availabe at 30/02/2025');
        cypress.get('btn-book-appointment').click();

    });


    it('Verify Appointment',function(){

        cy.get('h2').contains('Appointment Confirmation');
        cypress.get('txt_comment').type('Pramod Dutta will be availabe at 30/02/2025');
        

    });


});