import Main from '../pageObject/main.page'

const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor")

describe('About us suite', () => {
  const main = new Main

  it.only('Geolocation on google maps', () => {
    Given(/^I am on main page$/, async () => {
    main.openHomePage()
    main.clickCookies()
  });

    When(/^i click About us in Company section$/, async () => {
    main.clickAboutUs()
  });

    Then(/^i click under each city Locate on Google Maps$/, async () => {  
    main.clickChicagoLocation()
    main.clickDublinLocation()
    main.clickWarsawLocation()
    main.clickSauPauloLocation()
    main.clickAmsterdamLocatin()
    main.clickDenverLocation()
  });
  });
});
