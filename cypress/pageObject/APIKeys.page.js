
class APIKeys {
    get createApiKeys(){
        return cy.get('[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]')
    }
    get createBtn(){
        return cy.get('[class="Modal_modalContent-tx-1xaHHY"] [class="Button__StyledDefaultButton-bvSDhd QRlWQ"]')   
    }
    get apiKeyTitle(){
        return cy.get('[class="Label-eJsipv fURrcZ"]')
    }
    get busketDelete(){
        return cy.get('[class="TelnyxIcon_telnyxIcon-tx-29uTJw telnyx-icon-trash fa-fw"]')
    }
    get deleteBtn(){
        return cy.get('[class="Button_button-tx-22oxFy Button_default-tx-Z1kXcvq Button_normal-tx-2qNoRn Button_danger-tx-25bAfo"]')
    }
    get deletedAPI(){
        return cy.get('[class="ng-binding ng-scope"]')
    }
    get closeBtn(){
        return cy.xpath('//button[contains(text(),"Close")]')
    }
    clickCreateApiKeys(){
        this.createApiKeys.click()
    }
    clickCreateBtn(){
        this.createBtn.click()
    }
    clickBusketDelete(){
        this.busketDelete.click()
    }
    clickDeleteBtn(){
        this.deleteBtn.click()
    }
    clickCloseBtn(){
        this.closeBtn.click()
    }
}
export default APIKeys