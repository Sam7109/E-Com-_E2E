describe('My Test Suite for Add to Cart', () => {
   it('Visit the target page', () => {
      cy.visit('https://crio-qkart-frontend-qa.vercel.app/');
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
      


    // Add Yonex badminton to cart
   
        cy.get("input[name='search']")
        .first()
        .type('yo'); 
         
       cy.get('p.css-yg30e6 ')
       .should('have.text', 'YONEX Smash Badminton Racquet');
       // adding it to cart 
       cy.contains('Add to cart')
       .click();

       // verify that the item is been added to cart successfully
       //cy.get('div.css-1gjj37g')
       cy.get('.css-1gjj37g > :nth-child(1)')
       .should('have.text','YONEX Smash Badminton Racquet')   
       //clicking on checkout .
       cy.get('div button.css-177pwqq')
       .click();
       //add address
       cy.get('.css-rfvjbl')  
       .click();  
       cy.get('textarea.css-u36398')
       .first()
       .type('type your address in this field')
       cy.get('.css-19a1170 > .MuiButton-contained')
       .click();
       //select address
       cy.get('input.css-1m9pwf3 ')
       .first()
       .click()
       //place order 

       cy.contains('PLACE ORDER')
       .click();
       //check order confirmation
       cy.url().should('eq', 'https://crio-qkart-frontend-qa.vercel.app/thanks'); 
       // Replace with the expected success URL
     
      });
      });
        
