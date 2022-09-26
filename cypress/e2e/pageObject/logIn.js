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
    fillBussnessEmailField(bussnessEmailField){
        this.bussnessEmailField.type(bussnessEmailField)
    }
    fillPasswordField(passwordField){
        this.passwordField.type(passwordField)
    }
    clickLogInBtn(){
        this.logInBtn.click()
    }
}

export default LogIn