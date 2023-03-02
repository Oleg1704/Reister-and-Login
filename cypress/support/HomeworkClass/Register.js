

class UserPage {
    constructor() {
    this.customerMenuTop = '#customer_menu_top';
    this.regPage = '.btn[title="Continue"]';
    this.firstNameField = '#AccountFrm_firstname';
    this.lastNameField = '#AccountFrm_lastname';
    this.emailField = '#AccountFrm_email';
    this.addressField = '#AccountFrm_address_1';
    this.cityField = '#AccountFrm_city';
    this.countryField = '#AccountFrm_country_id';
    this.zoneField = '#AccountFrm_zone_id';
    this.postCodeField = '#AccountFrm_postcode';
    this.userNameField = '#AccountFrm_loginname';
    this.passwordField = '#AccountFrm_password';
    this.confirmPasswordField = '#AccountFrm_confirm';
    this.agreeCheckbox = '#AccountFrm_agree';
    this.submitButton = '.col-md-2 .btn';
    this.continueButton = '.mb40 .btn';
    }
    
    visit() {
    cy.visit('/index.php?rt=account/create');
    }
    
    clickCustomerMenuTop() {
    cy.get(this.customerMenuTop).click();
    }

    clickRegPage(){
    cy.get(this.regPage).click();
    }
    
    typeFirstName() {
    cy.get(this.firstNameField).type('firstName');
    }
    
    typeLastName() {
    cy.get(this.lastNameField).type('lastName');
    }
    
    typeEmail() {
    cy.get(this.emailField).type('email@test.com');
    }
    
    typeAddress() {
    cy.get(this.addressField).type('address');
    }
    
    typeCity() {
    cy.get(this.cityField).type('Kyiv');
    }
    
    selectCountry() {
    cy.get(this.countryField).select('Ukraine');
    }
    
    selectZone() {
    cy.get(this.zoneField).select('Rivne', { force: true }).invoke('val').should('not.eq', 'FALSE');
    }
    
    typePostCode() {
    cy.get(this.postCodeField).type('12345');
    }
    
    typeUserName() {
    cy.get(this.userNameField).type('Olegg');
    }
    
    typePassword() {
    cy.get(this.passwordField).type('Qwerty@1');
    }
    
    typeConfirmPassword() {
    cy.get(this.confirmPasswordField).type('Qwerty@1');
    }
    
    clickAgree() {
    cy.get(this.agreeCheckbox).click();
    }
    
    clickSubmit() {
    cy.get(this.submitButton).click();
    }
    
    clickContinue() {
    cy.get(this.continueButton).click();
    }
    }
    export default new UserPage()