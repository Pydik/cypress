class VideoRooms {
    get tryTheDemoAppBtn(){
        return cy.get('[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]')
    }
    get roomNameField(){
        return cy.get('[name="unique_name"]')
    }
    get createVideoRoomBtn(){
        return cy.get('[class="Button__StyledDefaultButton-bvSDhd QRlWQ"]')
    }
    get videoRoomsSections(){
        return cy.get('[class="tx-1RAOdF"]')
    }
    get deleteVideoRooms(){
        return cy.get('[class="TelnyxIcon_telnyxIcon-tx-29uTJw telnyx-icon-trash fa-fw"]')
    }
    get deleteBtn(){
        return cy.get('//span[contains(text(),"Delete")]')
    }
    clickTryTheDemoAppBtn(){
        this.tryTheDemoAppBtn.click()
    }
    fillRoomNameField(roomNameField){
        this.roomNameField.type(roomNameField)
    }
    clickCreateVideoRoomBtn(){
        this.createVideoRoomBtn.click()
    }
    clickVideoRoomsSections(){
        this.videoRoomsSections.click()
    }
    clickDeleteVideoRooms(){
        this.deleteVideoRooms.click()
    }
    clickDeleteBtn(){
        this.deleteBtn.click()
    }
}
export default VideoRooms 