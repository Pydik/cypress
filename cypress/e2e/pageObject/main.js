class Main {
    get logInBtn(){
        return cy.xpath('//a[contains(text(),"Log In")][1]')
    }
    get signUp(){
        return cy.xpath('//li/div/a[contains(text(),"Sign up")]')
    }

    get cookies(){
        return cy.get('.sc-df34c536-0 > :nth-child(1) > .sc-5d3a275a-1')
    }
    get linkedIn(){
        return cy.get('[href="https://www.linkedin.com/company/telnyx/"]')
    }
    get twitter(){
        return cy.get('[href="https://twitter.com/telnyx"]')
    }
    get facebok(){
        return cy.get('[href="https://www.facebook.com/Telnyx/"]')
    }
    clickLogInBtn(){
        this.logInBtn.click({force: true})
    }

    clickCookies(){
        this.cookies.click({force: true})
    }
    clickSignUp(){
        this.signUp.click({force: true})
    }
    clickLinkedIn(){
        this.linkedIn.click()
    }
    clickTwitter(){
        this.twitter.click()
    }
    clickFacebok(){
        this.facebok.click()
    }
}

export default Main 