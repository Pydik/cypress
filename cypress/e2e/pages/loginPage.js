/// <reference types="cypress" />

class LoginPage {
    get signinLink(){return cy.get('.login')}
    get emailAddressTxt(){return cy.get('#email')}
    get passwordTxt(){return cy.get('#passwd') }
    get signinBtn(){return cy.get('#SubmitLogin')}
    get alertBox(){return cy.get('p:contains("error")')}
    get alertMessage(){return cy.get('.alert-danger > ol > li')}
    
    launchApplication() {
        cy.visit('https://automationpractice.com/')
    }

    login(emailId , password){
        this.signinLink.click()
        this.emailAddressTxt.type(emailId)
        this.passwordTxt.type(password)
        this.signinBtn.click()
    }
}
export const loginPage = new LoginPage()