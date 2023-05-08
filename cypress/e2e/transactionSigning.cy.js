import { DappPage } from '../pages/dapp'
import { Unlock} from "../pages/unlock";
import { DevnetUnlock } from "../pages/devnetUnlock";


const template = new DappPage()
const unlock = new Unlock()
const devnet_unlock = new DevnetUnlock()

import clients from "../fixtures/clients/client.json";

describe('template spec', () => {

  before(() => {
    // Visit the app
    template.visit_url()

    // check the login button
    template.checkLoginButton()


    // click on the login button
    template.clickLoginButton()

    // check the url after login
    unlock.checkUrl()


    // click on the Web Wallet button
    unlock.clickWebWalletButton()

    // check the url selecting the login method
    devnet_unlock.checkUrl()


    // click on the keystore connect option
    devnet_unlock.clickKeystoreConnectOption()
    cy.wait(1000)

    // check the popup password input
    devnet_unlock.checkPopupPasswordInput()

    // check the popup submit button
    devnet_unlock.checkPopupSubmitButton()

    // upload the keystore file
    cy.get('input[type=file]').selectFile('G://mvX//cypress//e2e//andrei.json', {
      action: "select",
      force: true,
    })

    // type the password
    devnet_unlock.popup_password_input().type(clients.password)

    // click on the submit button
    devnet_unlock.popup_submit_button().click()

    cy.get('[data-testid="confirmBtn"]').click()

    // check the url after login
    cy.url().should('include', 'https://template-dapp.multiversx.com/dashboard')

    // check card address
    cy.get('.card-body').should('be.visible').contains('erd14d8an4cwrzl60kdq8ekncwvp36zwguz7rha0s4gts9cmatt4upwqedaz7y')
    cy.wait(1000)
  });


  it('passes', () => {
    cy.get('.action-btn > .btn').click().wait(5000)

    // type the password
    devnet_unlock.popup_password_input().type(clients.password)

    // click on the submit button
    devnet_unlock.popup_submit_button().click().wait(1000)

    // sign the transaction
    cy.get('[data-testid="signBtn"]').click().wait(3000)

    // check confirmation message
    cy.get('.dapp-core-component__main__h5').should('be.visible').contains('Transaction successfully signed')
  })
})