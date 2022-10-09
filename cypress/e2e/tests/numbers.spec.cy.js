import Home from "../pages/home.page"
import LogIn from "../pages/logIn.page"
import Main from "../pages/main.page"
import Numbers from "../pages/numbers.page"

describe('Numbers suite', () => {
  
  const main = new Main
  const logIn = new LogIn
  const numbers = new Numbers
  const home = new Home

    it('Search for free numbers', () => {
      cy.visit('https://telnyx.com/')
      main.clickCookies()
      main.clickLogInBtn()
      logIn.fillBussnessEmailField('maks.lupol.02@gmail.com')
      logIn.fillPasswordField('Qazwsx123456/')
      logIn.clickLogInBtn()
      //Click on the numbers in the platform section
      home.clickNumbersBtn()
      //Click Toll-Free Numbers
      numbers.clickTollfreeNumbersBtn()
      //Click Search Numbers
      numbers.clickSearchNumbersBtn()
      numbers.addPhoneButton.should('be.visible')
    })
  })