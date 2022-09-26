class SignIn {
    get workEmailField(){
        return cy.get('#email')
    }
    get fullNameField(){
        return cy.get('#full_name')
    }
    get passwordField(){
        return cy.get('#password')
    }
    get iAgreeCheckBox(){
        return cy.get('[aria-labelledby="terms-label"]')
    }
    get iWantCheckBox(){
        return cy.get('[xmlns="http://www.w3.org/2000/svg"] [xmlns="http://www.w3.org/2000/svg"]')
    }
    get createAccBtn(){
        return cy.xpath('//button[contains(text(),"Create Account")]')
    }
    get workEmailHelperText(){
        return cy.get('#email_error')
    }
    fillWorkEmailField(workEmailField){
        this.workEmailField.type(workEmailField)
    }
    fillFullNameField(fullNameField){
        this.fullNameField.type(fullNameField)
    }
    fillPasswordField(passwordField){
        this.passwordField.type(passwordField)
    }
    clickIAgreeCheckBox(){
        this.iAgreeCheckBox.click()
    }
    clickIWantCheckBox(){
        this.iWantCheckBox.click()
    }
    clickCreateAccBtn(){
        this.createAccBtn.click()
    }
}

export default SignIn