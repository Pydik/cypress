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
    clickVideoRoomsBtn(){
        this.videoRoomsBtn.click()
    }
    clickNumbersBtn(){
        this.numbersBtn.click()
    }
    clickAPIKeys(){
        this.apiKeys.click()
    }
}
export default Home 