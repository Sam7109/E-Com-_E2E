describe('Test cases for Home Page', () => {

    it('Visit the target page',()=>{
        cy.visit('https://crio-qkart-frontend-qa.vercel.app/');
        cy.wait(4000)
    

         //check whether the login and register buttons are displayed 
         // Check if an input element is enabled
        cy.get('button.css-1urhf6j')
        .first()
        .should('not.be.disabled');
        //check for register button 

 cy.get('.css-177pwqq')
        .first()
        .should('not.be.disabled');




        //Should return no product found in case if special character is entered 
        cy.get("input[name='search']")
        .first()
        .type("!!!")
        cy.wait(3000)
        cy.get("div[class='loading MuiBox-root css-0'] h4")
        .should('have.text', " No products found ");
        cy.wait(4000);
        
    
         /// Registering a user 
        cy.get('button.css-177pwqq')
          .click();
        cy.get('#username')
          .type("firstuser");
        cy.get('#password')
          .type("firstuserpassword");
        cy.get('#confirmPassword')
          .type('firstuserpassword');
          cy.get('.css-177pwqq')
          .first()
          .click();
          cy.wait(4000)
          //if user already exist display 
            cy.get('#notistack-snackbar')
            .should('have.text', 'Username already exists');
        
        // if already a user click on login 
        cy.get('.secondary-action')
        .first()
        .click();
           //check whether user with invalid credentials cannot login and throws appropriate error 
           cy.get("input[id='username']")
           .type("#dfnfsififn@gmail.com")
           cy.get("input[name='password']")
           .type("756585454")
           cy.get('button.css-177pwqq')
           .first()
           .click();

           //if invalid user check error is thrown 
           cy.get('#notistack-snackbar')
          .should('have.text', 'Username does not exist');
                // go to explore page 
                cy.get('.header > .MuiButton-root')
                .first()
                .click()
                cy.wait(3000)
                // click on login 
                cy.get('.css-w0pj6f')
                .first()
                .click({ force: true });
                   

                cy.get('#username')
                .type('firstuser')
                cy.get('#password')
                .type('firstuserpassword')
                 cy.get('button.css-177pwqq')
                 .first()
                 .click();


                 // check that user is logged in successfully 
            cy.get('.css-vb6e92 button')
            .first()
            .should('be.visible')

            //check number of images present 
           const num_of_images = cy.get('.css-rhsghg ').should('have.length',12)

  });
});