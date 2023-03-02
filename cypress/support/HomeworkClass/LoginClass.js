
class LoginPass{

    constructor(){
        this.loginField = '#loginFrm_loginname';
        this.passwordField = '#loginFrm_password';
        this.submitButton = '#loginFrm > fieldset > .btn';
       }

    visit(){
        cy.log('open website login page')
        cy.visit('/index.php?rt=account/login')
    }


    getLoginField(){
        return cy.get('#loginFrm_loginname')
    }
    getPassField(){
        return cy.get('#loginFrm_password')
    }
    getSubmitButton(){
        return cy.get('#loginFrm > fieldset > .btn').contains('Login');
    }

    assertUserAutorized(){
        cy.log('verify user');
        cy.getCookie('customer').should('be.null');
        cy.log('user is unautorized')
    }
    submitLoginForm(user){
        cy.log('Trying to login...')
        
        this.getLoginField().type(user.userName);
        this.getPassField().type(user.password);
        this.getSubmitButton().click();
    }

}
export default new LoginPass()