class LogIn {
    get bussnessEmailField(){
        return cy.get('[class="TextField__InputWrapper-sc-r5o2cn-4 fCOoik"] [name="email"]')
    }
    get passwordField(){
        return cy.get('[type="password"]')
    }
    get logInBtn(){
        return cy.get('[class="Button__StyledDefaultButton-sc-44gl5i-0 gBCTym LoginForm__LoginButton-fhXOmx eazkBi"]')
    }
    get rememberMeCheckBox(){
        return cy.get('[data-prefix="far"]')
    }
    get notifications(){
        return cy.get('[class="Message__MessageCopy-sc-1lbs5ge-2 ilxvtf"]')
    }
    fillBussnessEmailField(bussnessEmailField){
        this.bussnessEmailField.type(bussnessEmailField)
    }
    clickBussnessEmailField(){
        this.bussnessEmailField.click()
    }
    fillPasswordField(passwordField){
        this.passwordField.type(passwordField)
    }
    clickPasswordField(){
        this.passwordField.click()
    }
    clickLogInBtn(){
        this.logInBtn.click()
    }
    clickRememberMeCheckBox(){
        this.rememberMeCheckBox.click()
    }
}

export default LogIn