import Main from '../pageObject/main.page'

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")

describe('Try for free suite', () => {
  const main = new Main

  it.only('Try for free with out "@"', () => {
    Given(/^I am on log in page$/, async () => {
    main.openHomePage()
    main.clickCookies()
  });

    When(/^i enter the Email in Try for free $/, async (Email) => {
    main.fillEmailfield(Email)
  });

    Then(/^i click on Try for free button$/, async () => {  
    main.clickTryForFreeBnt()
  });
  });

it.only('Empty try for free', () => {
    Given(/^I am on log in page$/, async () => {
    main.openHomePage()
    main.clickCookies()
  });

    When(/^i noting enter the Email in Try for free $/, async (emptyEmail) => {
    main.fillEmailfield(emptyEmail)
  });

    Then(/^i click on Try for free button$/, async () => {  
    main.clickTryForFreeBnt()
  });
  });

  it.only('Try for free with out "." ', () => {
    Given(/^I am on log in page$/, async () => {
    main.openHomePage()
    main.clickCookies()
  });

    When(/^i enter the Email in Try for free $/, async (EmailDot) => {
    main.fillEmailfield(EmailDot)
  });

    Then(/^i click on Try for free button$/, async () => {  
    main.clickTryForFreeBnt()
  });
  });
});
