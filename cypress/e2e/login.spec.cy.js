import Main from './pageObject/Main'
import LogIn from './pageObject/logIn'
import Home from './pageObject/home'


describe('Log in suite', () => {

  const main = new Main()
  const logIn = new LogIn()
  const home = new Home
  
  it.only('Log in with valid credentials', () => {
    cy.visit('https://telnyx.com/')
    main.clickCookies()
    //Click on "Sign up" button
    main.clickLogInBtn()
    //Enter valid data in all fields
    logIn.fillBussnessEmailField('maks.lupol.02@gmail.com')
    logIn.fillPasswordField('Qazwsx123456/')
    //Click on 'Log in'
    logIn.clickLogInBtn()
    //Expected result: New page with an account opens
    home.welcomeTitle.should('be.visible')
  })
})