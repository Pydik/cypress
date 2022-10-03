class Main {
    openHomePage(){
        cy.visit('https://telnyx.com')
    }
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
    get emailfield(){
        return cy.get('[name="email"]')
    }
    get tryForFreeBnt(){
        return cy.get('[class="sc-5d3a275a-2 krPznm"]')
    }
    get aboutUs(){
        return cy.xpath('//span[contains(text(),"About Us")]')
    }
    get chicagoLocation(){
        return cy.get('[title="Telnyx Chicago Office"]')
    }
    get dublinLocation(){
        return cy.get('[title="Telnyx Dublin Office"]')
    }
    get warsawLocation(){
        return cy.get('[title="Telnyx Warsaw Office"]')
    }
    get sauPauloLocation(){
        return cy.get('[title="Telnyx São Paolo Office"]')
    }
    get amsterdamLocatin(){
        return cy.get('[href="https://www.google.com/maps/place/Keizersgracht+221,+1016+DV+Amsterdam,+Netherlands/@52.3728035,4.8832875,17z/data=!3m1!4b1!4m5!3m4!1s0x47c609c487250cfd:0x5a97225b97b7a18a!8m2!3d52.3728035!4d4.8854762"]')
    }
    get denverLocation(){
        return cy.get('[href="https://www.google.com/maps/place/WeWork+Office+Space+%26+Coworking/@39.7526867,-105.0043597,17z/data=!3m1!4b1!4m5!3m4!1s0x876c78c3e73790f1:0xe7febee689f48aa4!8m2!3d39.7524434!4d-105.0024793"]')
    }
    get developerDocs(){
        return cy.get('[class="sc-7b6c9f9b-6 kZyHWE"] [href="https://developers.telnyx.com/docs/v2"]')
    }
    get blog(){
        return cy.get('[class="sc-7b6c9f9b-6 kZyHWE"] [href="/resources"]')
    }
    get resourseHub(){
        return cy.get('[class="sc-7b6c9f9b-6 kZyHWE"] [href="/learn"]')
    }
    get releaseNotes(){
        return cy.get('[class="sc-7b6c9f9b-6 kZyHWE"] [href="/release-notes"]')
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
    fillEmailfield(emailfield){
        this.emailfield.type(emailfield)
    }
    clickTryForFreeBnt(){
        this.tryForFreeBnt.click()
    }
    clickAboutUs(){
        this.aboutUs.click()
    }
    clickChicagoLocation(){
        this.chicagoLocation.click()
    }
    clickDublinLocation(){
        this.dublinLocation.click()
    }
    clickWarsawLocation(){
        this.warsawLocation.click()
    }
    clickSauPauloLocation(){
        this.sauPauloLocation.click()
    }
    clickAmsterdamLocatin(){
        this.amsterdamLocatin.click()
    }
    clickDenverLocation(){
        this.denverLocation.click()
    }
    clickDeveloperDocs(){
        this.developerDocs.click()
    }
    clickBlog(){
        this.blog.click()
    }
    clickResourseHub(){
        this.resourseHub.click()
    }
    clickReleaseNotes(){
        this.releaseNotes.click()
    }
}

export default Main 