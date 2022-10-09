class Numbers {
    get tollfreeNumbersBtn(){
        return cy.get('[class="Button__StyledDefaultButton-bvSDhd kKRPik Button__SecondaryButton-eTdFeD sNwYR"]')
    }
    get searchNumbersBtn(){
        return cy.get('[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]',{timeout:4000})
    }
    get phoneNumberDropDown(){
        return cy.xpath('[class=" css-df19ax-placeholder"]')
    }
    get addPhoneButton(){
        return cy.xpath('//button[contains(text(),"Add to Cart")]')
    }
    get containsDropDown(){
        return cy.xpath('//div[contains(text(),"Contains")]')
    }
    get addedMessageContainer(){
        return cy.get('[class="Message__MessageContainer-dAUGde iLVAjP"]')
    }
    clickTollfreeNumbersBtn(){
        this.tollfreeNumbersBtn.click()
    }
    clickSearchNumbersBtn(){
        this.searchNumbersBtn.click()
    }
    clickPhoneNumberDropDown(){
        this.phoneNumberDropDown.click()
    }
    clickAddPhoneButton(){
        this.addPhoneButton.click({force: true})
    }
    clickContainsDropDown(){
        this.containsDropDown.click()
    }
}
export default Numbers 