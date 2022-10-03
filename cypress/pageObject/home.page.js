class Home {

    get welcomeTitle(){
        return cy.get('[class="Text-essoOC gkUcHY"]',{timeout:14000})
    }
    get videoRoomsBtn(){
        return cy.get('[id="main_content"] [href="/#/app/video/video-rooms"]',{timeout:14000})
    }
    get numbersBtn(){
        return cy.get('[id="main_content"] [href="/#/app/numbers-redirect"] [class="w-100"]',{timeout:14000})
    }
    get apiKeys(){
        return cy.get('[id="main_content"] [class="icon telnyx-icon-auth tx-6S6vo"]',{timeout:14000})
    }
    get avatar(){
        return cy.get('[class="svg-inline--fa fa-angle-down fa-w-10 text-lg text-muted"]')
    }
    get signOutBtn(){
        return cy.get('[class="tx-1Iv0kw"]')
    }
    get supportCenter(){
        return cy.get('[aria-label="Main menu"] [href="https://support.telnyx.com"]')
    }
    get developerDocs(){
        return cy.get('[aria-label="Main menu"] [href="https://developers.telnyx.com/docs"]')
    }
    get releaseNotes(){
        return cy.get('[aria-label="Main menu"] [href="https://telnyx.com/release-notes"]')
    }
    get systemStatus(){
        return cy.get('[aria-label="Main menu"] [href="http://status.telnyx.com/"] [class="icon undefined tx-1HP5rP"]')
    }
    clickVideoRoomsBtn(){
        this.videoRoomsBtn.click()
    }
    clickNumbersBtn(){
        this.numbersBtn.click()
    }
    clickAPIKeys(){
        this.apiKeys.click()
    }
    blurAvatar(){
        this.avatar.blur()
    }
    ClickSignOutBtn(){
        this.signOutBtn.click()
    }
    clickSupportCenter(){
        this.supportCenter.click()
    }
    clickDeveloperDocs(){
        this.developerDocs.click()
    }
    clickSupportCenter(){
        this.supportCenter.click()
    }
    clickSystemStatus(){
        this.systemStatus.click()
    }
}
export default Home 