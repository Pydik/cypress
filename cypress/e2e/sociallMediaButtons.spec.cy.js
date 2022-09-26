import Main from "./pageObject/Main"

describe('Sociall media buttons suite', () => {

  const main = new Main

  it.only('Button sociall media (LinkedIn)', () => {
    cy.visit('https://telnyx.com/')
    //Scroll down to "Sociall media buttons"
    main.clickCookies()
    //Click on LinkedIn 
    main.clickLinkedIn()
    //Expected result: Campaign page on LinkedIn
  })

  it.only('Button sociall media (Twitter)', () => {
    cy.visit('https://telnyx.com/')
    //Scroll down to "Sociall media buttons"
    //Click on LinkedIn 
    main.clickTwitter()
    //Expected result: Campaign page on Twitter

  })
  it.only('Button sociall media (Facebook)', () => {
    cy.visit('https://telnyx.com/')
    //Scroll down to "Sociall media buttons"
    //Click on LinkedIn 
    main.clickFacebok()
    //Expected result: Campaign page on Facebook
  })
})