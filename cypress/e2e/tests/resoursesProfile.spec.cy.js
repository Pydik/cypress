import Home from '../pages/home.page';
import LogIn from '../pages/logIn.page'
import Main from '../pages/main.page'

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")

describe('Resourses suite', () => {
  const main = new Main
  const home = new Home
  const logIn = new LogIn

  it.only('Support center', () => {
    Given(/^I am on home page$/, async () => {
    main.openHomePage()
    main.clickCookies()
    main.clickLogInBtn()
    logIn.fillBussnessEmailField('maks.lupol.02@gmail.com')
    logIn.fillPasswordField('Qazwsx123456/')
    logIn.clickLogInBtn()
  });

    When(/^i click Support center on Resourses section$/, async () => {
    home.clickSupportCenter()
  });

    Then(/^i am on Support center page$/, async () => {  
    cy.url().should('contains','support.telnyx.com/en/')
  });
  });

  it.only('Developer Docs', () => {
    Given(/^I am on home page$/, async () => {
    main.openHomePage()
    main.clickCookies()
    main.clickLogInBtn()
    logIn.fillBussnessEmailField('maks.lupol.02@gmail.com')
    logIn.fillPasswordField('Qazwsx123456/')
    logIn.clickLogInBtn()
  });

    When(/^i click Developer Docs on Resourses section$/, async () => {
    home.clickSupportCenter()
  });

    Then(/^i am on Developer Docs page$/, async () => {  
    cy.url().should('contains','developers.telnyx.com/docs')
  });
  });

  it.only('Release Notes', () => {
    Given(/^I am on home page$/, async () => {
    main.openHomePage()
    main.clickCookies()
    main.clickLogInBtn()
    logIn.fillBussnessEmailField('maks.lupol.02@gmail.com')
    logIn.fillPasswordField('Qazwsx123456/')
    logIn.clickLogInBtn()
  });

    When(/^i click Release Notes on Resourses section$/, async () => {
    home.clickSupportCenter()
  });

    Then(/^i am on Release Notes page$/, async () => {  
    cy.url().should('contains','/release-notes')
  });
  });

  it.only('System status', () => {
    Given(/^I am on home page$/, async () => {
    main.openHomePage()
    main.clickCookies()
    main.clickLogInBtn()
    logIn.fillBussnessEmailField('maks.lupol.02@gmail.com')
    logIn.fillPasswordField('Qazwsx123456/')
    logIn.clickLogInBtn()
  });

    When(/^i click System status on Resourses section$/, async () => {
    home.clickSupportCenter()
  });

    Then(/^i am on System status page$/, async () => {  
    cy.url().should('contains','/status.telnyx.com')
  });
  });
});
