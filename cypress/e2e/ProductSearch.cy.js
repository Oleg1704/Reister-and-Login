import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json'
import { searchAndClickProduct } from '../support/helper';

before('login', () => {
    cy.visit('/');
    cy.get('#customer_menu_top').click();

    cy.get('#loginFrm_loginname').type(user.userName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('#loginFrm > fieldset > .btn').click();
})

  it('finds and clicks a product and adds it to cart', () => {

    cy.get('#filter_keyword')
    .type('E')
    .closest("form")
    .submit();
    
    searchAndClickProduct('ck one Summer 3.4 oz');
  });
