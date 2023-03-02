import { faker } from '@faker-js/faker';
import UserPage from '../support/HomeworkClass/Register';


it('register',()=> {
  
  UserPage.visit();
  UserPage.clickCustomerMenuTop();
  UserPage.clickRegPage();
  UserPage.typeFirstName();
  UserPage.typeLastName();
  UserPage.typeEmail();
  UserPage.typeAddress();
  UserPage.typeCity();
  UserPage.selectCountry();
  UserPage.selectZone();
  UserPage.typePostCode();
  UserPage.typeUserName();
  UserPage.typePassword();
  UserPage.typeConfirmPassword();
  UserPage.clickAgree();
  UserPage.clickSubmit();
  UserPage.clickContinue();

 })