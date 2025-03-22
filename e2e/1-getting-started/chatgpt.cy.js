
//         // // cy.visit('https://chatgpt.com/')
//         // // cy.get("#prompt-textarea").type('About cypress');
//         // // cy.xpath("//button[@aria-label='Send prompt']//*[name()='svg']").click();
//         // // cy.wait(10000);
//         // describe('ChatGPT Automation Test', () => {
//         //     it('Should open ChatGPT and send a message', () => {
//         //         cy.visit('https://chatgpt.com/'); // Open ChatGPT website
        
//         //         // Log in (If login is required)
//         //        // cy.get("button[class='btn relative btn-primary'] div[class='flex items-center justify-center']").click();
//         //        cy.xpath("//button[@class='btn relative btn-primary']").click();
//         //        cy.wait(1000);
//         //        cy.xpath("//input[@id='email-input']").type('rajutamilarasan1@gmail.com');
//         //        cy.xpath("//input[@type='submit']").click();
//         //        cy.wait(5000);
//         //        cy.xpath("//input[@class='input cec61d1fe c888ba760']").type('RajuM&8989');
//         //        cy.wait(1000);
//         //        cy.xpath("//button[@type='submit']").click();
//         //         // cy.get('input[name="password"]').type('your-password');
//         //         // cy.get('button[type="submit"]').click();
        
//         //         // // Wait for login to complete
//         //         // cy.wait(5000);
        
//         //         // // Type a question in the input field
//         //         // cy.get('textarea').type('What is Cypress automation?{enter}');
        
//         //         // // Wait for response
//         //         // cy.wait(5000);
        
//         //         // // Verify that ChatGPT provides a response
//         //         // cy.get('.message').last().should('contain', 'Cypress');
//         //     });
//         // });


//         // describe('Test the chatgpt content',()=>{
//         //     it('ChatGPT',()=>{
//         //         cy.visit('https://chatgpt.com/')
//         //         ///cy.get("a[class='cursor-pointer font-semibold text-token-text-secondary underline sm:text-sm']").click();
//         //         cy.get("#prompt-textarea").type('How to download cypress and configer');
//         //         cy.get(".icon-2xl").click();
//         //         cy.wait(250000);

                
//         //     })
//         // })
        
//         describe('Automate ChatGPT Interaction', () => {
  
//             // Before each test, visit the page where ChatGPT is hosted
//             beforeEach(() => {
//               cy.visit('https://chat.openai.com/')  // Replace with the actual URL where ChatGPT is hosted
//             });
          
//             it('should interact with ChatGPT', () => {

// //                 cy.get('textarea').type('Hello, ChatGPT!')
// // cy.wait(2000);  // Wait for 2 seconds before submitting the message
// // cy.get("button[type='submit']").click()
// // cy.wait(3000);

// cy.get('textarea').type('Hello, ChatGPT!').wait(Math.random() * 3000 + 1000); // Random wait between 1-4 seconds
// cy.get("button[aria-label='Send prompt'] svg path").click();

              
//               // Find the input field where users type messages and type a message
//             //   cy.get('textarea')  // Adjust this selector to match the actual input field
//             //     .type('Hello, ChatGPT! How are you?')
//             //     //.should('have.value', 'Hello, ChatGPT! How are you?');  // Verify the input is correct
//             //   cy.wait(2000);
//             //   // Find the send button (if any) and click it to send the message
//             //   cy.get('.icon-2xl')  // Adjust this selector based on the actual button
//             //     .click();
              
//             //   // Wait for the message to be sent and the response from ChatGPT
//             //   cy.wait(3000);  // Wait a few seconds for the response (adjust based on response time)
              
//               // Verify that ChatGPT responded with some text
//              // cy.get('.message-class')  // Replace this with the class or selector for the response area
//                // .should('contain.text', 'I am doing well!');  // Replace this with an expected response
//             });
          
//           });
          

    describe('Test ChatGpt',()=>{
        it('Test',()=>{
            cy.intercept('POST', '/chatgpt-api-endpoint', {
                statusCode: 200,
                body: { response: 'I am ChatGPT, and I am ready!' },
              }).as('apiRequest');
              
              cy.get('textarea').type('Hello, ChatGPT!');
              cy.get('button[type="submit"]').click();
              cy.wait('@apiRequest').its('response.body').should('have.property', 'response');
              

        })
    })
