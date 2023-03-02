export function searchAndClickProduct (productName) {
    
  
    let productFound = false;
    cy.get('.fixed_wrapper .prdocutname').each(($el) => {
      if ($el.text().includes(productName)) {
        cy.wrap($el).click();

// купуємо продукт якщо його знайдено
    cy.get('.cart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
    cy.get('.heading1').should('contain', ' Your Order Has Been Processed!');

         productFound = true;
      }
    }).then(() => {
      if (!productFound) {
        cy.get('.pagination li a').contains('>').click();
        searchAndClickProduct(productName);
      }
    });

  };


