import Main from '../pageObject/main.page'
import LogIn from '../pageObject/logIn.page'
import Home from '../pageObject/home.page'
const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")

describe('Log in suite', () => {
  const main = new Main
  const logIn = new LogIn
  const home = new Home
  
  it.only('Log in with valid credentials', () => {
    Given(/^I am on log in page$/, async () => {
    main.openHomePage()
    main.clickCookies()
    main.clickLogInBtn()
  });

    When(/^i enter the Business Email (\w+)$/, async (Username) => {
    logIn.clickBussnessEmailField()
    logIn.fillBussnessEmailField(Username)
  });

    And(/^i enter the Password (\w+)$/, async (Password) => {  
    logIn.clickPasswordField()
    logIn.fillPasswordField(Password)
  });

    Then(/^i click on logIn button$/, async () => {  
    logIn.clickLogInBtn()
    home.welcomeTitle.should('be.visible')
  });
  });

  it('Log in with incorrect Email', () => {
    Given(/^I am on log in page$/, async () => {
    main.openHomePage()
    main.clickCookies()
    main.clickLogInBtn()
  });

    When(/^i enter incorrect data in the Business Email (\w+)$/, async (Username) => {
    logIn.clickBussnessEmailField()
    logIn.fillBussnessEmailField(Username)
  });

    And(/^i enter the Password (\w+)$/, async (Password) => {  
    logIn.clickPasswordField()
    logIn.fillPasswordField(Password)
  });

    Then(/^i click on logIn button$/, async () => {  
    logIn.clickLogInBtn()
    logIn.notifications.should('be.visible')
  });
  });

  it('Log in with incorrect Password', () => {
    Given(/^I am on log in page$/, async () => {
    main.openHomePage()
    main.clickCookies()
    main.clickLogInBtn()
  });

    When(/^i enter the Business Email (\w+)$/, async (Username) => {
    logIn.clickBussnessEmailField()
    logIn.fillBussnessEmailField(Username)
  });

    And(/^i enter incorrect data on the Password (\w+)$/, async (Password) => {  
    logIn.clickPasswordField()
    logIn.fillPasswordField(Password)
  });

    Then(/^i click on logIn button$/, async () => {  
    logIn.clickLogInBtn()
    logIn.notifications.should('be.visible')
  });
  });

  it('Log in with remember me checkbox', () => {
    Given(/^I am on log in page$/, async () => {
    main.openHomePage()
    main.clickCookies()
    main.clickLogInBtn()
  });
  
    When(/^i enter the Business Email (\w+)$/, async (Username) => {
    logIn.clickBussnessEmailField()
    logIn.fillBussnessEmailField(Username)
  });

    And(/^i enter the Password (\w+)$/, async (Password) => {  
    logIn.clickPasswordField()
    logIn.fillPasswordField(Password)
  });

  And(/^i click in remember me$/, async () => {
    logIn.clickRememberMeCheckBox
  });  
  
    Then(/^i click on logIn button$/, async () => {  
    logIn.clickLogInBtn()
    home.welcomeTitle.should('be.visible')
    home.blurAvatar()
    home.ClickSignOutBtn()
    logIn.bussnessEmailField.should('have.text',Username)
    logIn.passwordField.should('have.text',Password)
  });
  });
});