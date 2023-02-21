const login = 'OlegBest', pass = '12345'
describe('Test login', () => {

  const log = ( login, pass) => {
          
          cy.visit('https://automationteststore.com/index.php?rt=account/login')
          cy.get('#customer_menu_top').click();

          cy.get('#loginFrm_loginname').type(login);
          cy.get('#loginFrm_password').type(pass);
          cy.get('#loginFrm > fieldset > .btn').click();


        }

  it('name test case login',()=>{
        log(login , pass)
    } )

  });


  

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
     
    cy.get('#filter_keyword').type('E');
    cy.get('.button-in-search > .fa').click();
  
    let productFound = false;
    cy.get('.fixed_wrapper .prdocutname').each(($el) => {
      if ($el.text().includes(productName)) {
        cy.wrap($el).click();
        productFound = true;
      }
    }).then(() => {
      if (!productFound) {
        cy.get('.pull-right .pagination').click();
        cy.searchAndClickProduct(productName);
      }
    });
  
    cy.url().should('include', productName.toLowerCase().replace('', '-'));

    cy.get('.cart').click();
    cy.get('.product-cart-actions .addtocart').click();
    cy.get('.layer_cart_product > h2').should('contain', 'Product successfully added to your shopping cart');
  };

  it('finds and clicks a product and adds it to cart', () => {
    searchAndClickProduct('');
  });