class MyOrder {
    visit() {
    cy.visit('https://automationteststore.com/');
    }
    
    login(username, password) {
    cy.get('#customer_menu_top').click();
    cy.get('#loginFrm_loginname').type(username);
    cy.get('#loginFrm_password').type(password);
    cy.get('[title="Login"]').click();
    }
    
    selectProduct(categoryIndex, productIndex) {
    cy.get('.nav-pills.categorymenu').children('li').eq(categoryIndex).click();
    cy.get('.thumbnails.row').children('li').eq(productIndex).click();
    cy.get('.col-md-3.col-sm-6.col-xs-12').children('.thumbnail').eq(2).click();
    cy.get('.productpagecart').children('li').eq(0).click();
    cy.get('#cart_quantity12180e3a92dbdbee7dcadd3b4b20cf25899').clear().type('1');
    cy.get('a.btn.btn-default.mr10.mb10').click();
    }
    
    goToCart() {
    cy.get('#main_menu_top > [data-id="menu_cart"]').click();
    }
    
    checkout() {
    cy.get('#cart_checkout1').click();
    cy.get('#checkout_btn').click();
    cy.get('.maintext').should('contain', ' Your Order Has Been Processed!');
    }
    }
    export default new MyOrder()
