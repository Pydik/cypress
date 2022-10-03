import Main from "../pageObject/main.page"
import SignIn from "../pageObject/signIn.page"
const {randomInpute} = require('../helper/random');

describe('Registration suite', () => {
  
const main = new Main
const signIn  = new SignIn

const randomFullName = randomInpute();
const randomPassword = randomInpute();

  it('Registration with invalid email', () => {
    cy.visit('https://telnyx.com/')
    main.clickCookies()
    //Click on "Sign up" button
    main.clickSignUp()
    //Enter valid data in all fields without Email field
    signIn.fillFullNameField(randomFullName)
    signIn.fillPasswordField(randomPassword)
    //Enter ivalid data in Email field
    signIn.fillWorkEmailField(randomInpute())
    //Accept all checkboxes
    signIn.clickIAgreeCheckBox()
    signIn.clickIWantCheckBox()
    signIn.clickCreateAccBtn()
    //Expected result: Notofication under work email field about invalid email address.
    signIn.workEmailHelperText.should('be.visible')
  })
})