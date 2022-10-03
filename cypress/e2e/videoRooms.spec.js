import APIKeys from "../pageObject/APIKeys.page";
import Home from "../pageObject/home.page"
import LogIn from "../pageObject/logIn.page"
import Main from "../pageObject/main.page"
import VideoRooms from "../pageObject/videoRooms.page"
const {randomInpute} = require('../helper/random');

describe('Video Rooms suite', () => {

    const logIn = new LogIn
    const main = new Main
    const home = new Home
    const videoRooms = new VideoRooms
    const apiKeys = new APIKeys

  it('Creating a video room', () => {
    cy.visit('https://telnyx.com/')
    main.clickCookies()
    main.clickLogInBtn()
    logIn.fillBussnessEmailField('maks.lupol.02@gmail.com')
    logIn.fillPasswordField('Qazwsx123456/')
    logIn.clickLogInBtn()
    //Click on "Video Rooms"
    home.clickVideoRoomsBtn()
    //Next click "Try the Demo Appi"
    videoRooms.clickTryTheDemoAppBtn()
    //Enter valid data in all fields
    videoRooms.fillRoomNameField(randomInpute())
    //Click on create Video Room
    videoRooms.clickCreateVideoRoomBtn()
    //Expected result: Notification about successful room creation operation
    videoRooms.clickVideoRoomsSections()
    //Go to the Video Rooms section
    //Expected result:The room we created is displayed under Room Name
  })
  it.only('Removing video rooms', () => {
    cy.visit('https://telnyx.com/')
    main.clickCookies()
    main.clickLogInBtn()
    logIn.fillBussnessEmailField('maks.lupol.02@gmail.com')
    logIn.fillPasswordField('Qazwsx123456/')
    logIn.clickLogInBtn()
    //Click on "Video Rooms"
    home.clickVideoRoomsBtn()
    //Create a new video room
    videoRooms.clickTryTheDemoAppBtn()
    videoRooms.fillRoomNameField(randomInpute())
    videoRooms.clickCreateVideoRoomBtn()
    //Go to the Video Rooms section
    videoRooms.clickVideoRoomsSections()
    //Click on the basket(Delete button)
    apiKeys.clickBusketDelete()
    videoRooms.clickDeleteBtn()
    //Click on Delete
    //Expected result: Notification of successful deletion
    apiKeys.deletedAPI.should('be.visible')
    })
})
