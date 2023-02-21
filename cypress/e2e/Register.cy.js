import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json'

let pass;

user.firstName = faker.name.firstName();
user.lastName = faker.name.lastName();
user.email = faker.internet.email();
user.address = faker.address.streetAddress();
user.city = faker.address.city();
user.postCode = faker.address.zipCode('####');
user.username = faker.internet.userName();
user.password = faker.internet.password(5);



it('name test case register',()=>{
 
          cy.visit('/index.php?rt=account/login')
          cy.get('#customer_menu_top').click();

          cy.get('.btn-orange .fa-check').click()
          cy.get('#AccountFrm_firstname').type(user.firstName);
          cy.get('#AccountFrm_lastname').type(user.lastName);
          cy.get('#AccountFrm_email').type(user.email);
          cy.get('#AccountFrm_address_1').type(user.address);
          cy.get('#AccountFrm_city').type(user.city);
          cy.get('#AccountFrm_country_id').select('Ukraine')
          cy.get('#AccountFrm_zone_id')
          .select(2, {force:true})
          .invoke('val')
          .should('not.eq', 'FALSE');
          cy.get('#AccountFrm_postcode').type(user.postCode);
          cy.get('#AccountFrm_loginname').type(user.userName);
          cy.get('#AccountFrm_password').type(user.password);
          cy.get('#AccountFrm_confirm').type(user.password);
          cy.get('#AccountFrm_agree').click();
          cy.get('.col-md-2 .btn').click();
          cy.get('.mb40 .btn').click();
        

        console.log(pass);

      });


it('Test login', () => {
     
          cy.visit('/index.php?rt=account/login')
          cy.get('#customer_menu_top').click();

          cy.get('#loginFrm_loginname').type(user.userName);
          cy.get('#loginFrm_password').type(user.password);
          cy.get('#loginFrm > fieldset > .btn').click();

  });