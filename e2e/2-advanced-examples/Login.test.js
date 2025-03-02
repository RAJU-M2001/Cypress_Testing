context('Login test',() => {
    it('should login with correct credentials',()=>{
        cy.visit('https://www.olx.in/')

        cy.get('[data-aut-id="btnLogin"]').click()


    })

}) 