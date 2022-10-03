import Main from '../pageObject/main.page'

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")

describe('Resourses suite', () => {
  const main = new Main

  it.only('Developer Docs', () => {
    Given(/^I am on main page$/, async () => {
    main.openHomePage()
    main.clickCookies()
  });

    When(/^i click Developer Docs on Resourses section$/, async () => {
    main.clickDeveloperDocs()
  });

    Then(/^i am on Developer Docs page$/, async () => {  
    cy.url().should('contains','developers.telnyx.com')
  });
  });

  it.only('Blog', () => {
    Given(/^I am on main page$/, async () => {
    main.openHomePage()
    main.clickCookies()
  });

    When(/^i click Blog on Resourses section$/, async () => {
    main.clickBlog()
  });

    Then(/^i am on Blog page$/, async () => {  
    cy.url().should('contains','/resources')
  });
  });

  it.only('Resource Hub', () => {
    Given(/^I am on main page$/, async () => {
    main.openHomePage()
    main.clickCookies()
  });

    When(/^i click Resource Hub on Resourses section$/, async () => {
    main.clickResourseHub()
  });

    Then(/^i am on Resource Hub page$/, async () => {  
    cy.url().should('contains','/learn')
  });
  });

  it.only('Release Notes', () => {
    Given(/^I am on main page$/, async () => {
    main.openHomePage()
    main.clickCookies()
  });

    When(/^i click Release Notes on Resourses section$/, async () => {
    main.clickReleaseNotes()
  });

    Then(/^i am on Release Notes page$/, async () => {  
    cy.url().should('contains','Release Notes')
  });
  });
});
