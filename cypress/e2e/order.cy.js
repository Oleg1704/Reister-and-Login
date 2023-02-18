import { faker } from '@faker-js/faker';
import * as user from '../fixtures/user.json'


it('My first Order test case)))', () => {

    cy.log('**I need to buy some products and i need to open website and login**');
    cy.visit('/');

    cy.log('**Login as the best user OLEG**');
    cy.get('#customer_menu_top').click();
    cy.get('#loginFrm_loginname').type(user.userName);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('[title="Login"]').click();
    cy.get('h1 span.subtext').should('contain', user.firstName);

    cy.log('**Lets get choose my products**');
    cy.get('.nav-pills.categorymenu').children('li').eq(1).click();
    cy.get('.thumbnails.row').children('li').eq(1).click();
    cy.get('.col-md-3.col-sm-6.col-xs-12').children('.thumbnail').eq(2).click();
    cy.get('.productpagecart').children('li').eq(0).click();
    cy.get('#cart_quantity12180e3a92dbdbee7dcadd3b4b20cf25899').clear().type('1');
    cy.get('a.btn.btn-default.mr10.mb10').click();
    cy.get('.nav-pills.categorymenu').children('li').eq(4).click();
    cy.get('.thumbnails.row').children('li').first().click();
    cy.get('#sort').select('Price Low > High');
    cy.get('.pricetag.jumbotron').children('.productcart').eq(1).click();

    cy.log('**Now i order my expensive products**');
    cy.get('#main_menu_top > [data-id="menu_cart"]').click();
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();

    cy.get('.maintext').should('contain', ' Your Order Has Been Processed!');

});