/// <reference types="cypress" />

class MyAccountPage {
    get signoutLink() { return cy.get('.logout')}
    get pageHeading() { return cy.get('.page-heading')}

    logout() {
        this.signoutLink.click()
    }
}

export const myAccountPage = new MyAccountPage()