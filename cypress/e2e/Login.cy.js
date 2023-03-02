import  user from '../fixtures/user.json'
import LoginPass from '../support/HomeworkClass/LoginClass'

 it('login',()=> {
  
  LoginPass.visit();
  LoginPass.submitLoginForm(user);

  cy.get('h1 span.subtext').should('contain', user.firstName);

 })