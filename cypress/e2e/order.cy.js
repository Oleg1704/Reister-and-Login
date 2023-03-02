import { faker } from '@faker-js/faker';
import user from '../fixtures/user.json';
import MyOrder from '../support/HomeworkClass/OrderClass';
    
    describe('My first Order test case)))', () => {
    
    beforeEach(() => {
        MyOrder.visit();
    });
    
    it('should allow the user to purchase products', () => {
    cy.log('I need to buy some products and I need to open the website and login');
    

    MyOrder.login(user.userName, user.password);
    
    cy.log('**Let me choose my products**');
    MyOrder.selectProduct(1, 1);
    MyOrder.selectProduct(4, 1);
    
    cy.log('**Now I order my expensive products**');
    MyOrder.goToCart();
    MyOrder.checkout();
    });
    });