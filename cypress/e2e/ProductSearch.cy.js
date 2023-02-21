import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json'

before('login', () => {
    cy.visit('/');
    cy.get('#customer_menu_top').click();

    cy.get('#loginFrm_loginname').type(user.userName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('#loginFrm > fieldset > .btn').click();
})

function searchAndClickProduct (productName) {
     
    cy.get('#filter_keyword').type('ck');
    cy.get('.button-in-search > .fa').click();
  
    let productFound = false;
    cy.get('.fixed_wrapper .prdocutname').each(($el) => {
      if ($el.text().includes(productName)) {
        cy.wrap($el).click();
        productFound = true;
      }
    }).then(() => {
      if (!productFound) {
        cy.get('.pull-right .pagination .next').click();
        cy.searchAndClickProduct(productName);
      }
    });
    
// купуємо продукт якщо його знайдено
    cy.get('.cart').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
    cy.get('.heading1').should('contain', ' Your Order Has Been Processed!');
  };

  it('finds and clicks a product and adds it to cart', () => {
    searchAndClickProduct('ck one Summer 3.4 oz');
  });
