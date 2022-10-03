import APIKeys from "../pageObject/APIKeys.page"
import Home from "../pageObject/home.page"
import LogIn from "../pageObject/logIn.page"
import Main from "../pageObject/Main.page"

describe('API Keys suite', () => {
  
    const main = new Main
    const logIn = new LogIn
    const home = new Home
    const apiKeys = new APIKeys

    it('Adding API Kyes', () => {
      cy.visit('https://telnyx.com/')
      main.clickCookies()
      main.clickLogInBtn()
      logIn.fillBussnessEmailField('maks.lupol.02@gmail.com')
      logIn.fillPasswordField('Qazwsx123456/')
      logIn.clickLogInBtn()
      //Click on the API Keys in the platform section
      home.clickAPIKeys()
      //Click Create API Key
      apiKeys.clickCreateApiKeys()
      //One more click Create
      apiKeys.clickCreateBtn()
      //Expected result:The created API key is displayed in the list
      apiKeys.apiKeyTitle.should('be.visible')
    })

    it('Deleted API Keys', () => {
        cy.visit('https://telnyx.com/')
        main.clickCookies()
        main.clickLogInBtn()
        logIn.fillBussnessEmailField('maks.lupol.02@gmail.com')
        logIn.fillPasswordField('Qazwsx123456/')
        logIn.clickLogInBtn()
        home.clickAPIKeys()
        apiKeys.clickCreateApiKeys()
        apiKeys.clickCreateBtn()
        apiKeys.clickCloseBtn()
        //Click on the API Keys in the platform section
        home.clickAPIKeys()
        //Click on  basket (Delete)
        apiKeys.clickBusketDelete()
        //Click delete
        apiKeys.clickDeleteBtn()
        //Expected result:Notification of successful deletion
        apiKeys.deletedAPI.should('be.visible')
      })
  })