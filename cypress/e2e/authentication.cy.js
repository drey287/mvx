import { DappPage } from '../pages/dapp'
import { Unlock} from "../pages/unlock";
import { DevnetUnlock } from "../pages/devnetUnlock";

import clients from './../fixtures/clients/client.json'

const template = new DappPage()
const unlock = new Unlock()
const devnet_unlock = new DevnetUnlock()

describe('template spec', () => {
  it('check auth method ', () => {

    // Visit the app
    template.visit_url()

    // Check the title
    template.checkTitle()

    // Check logo
    template.checkLogo()

    // check the name of the app
    template.checkName()

    // check the cart title
    template.checkCartTitle()

    // check the description of the app
    template.checkCartDescription()

    // check the login button
    template.checkLoginButton()

    // check the footer
    template.checkFooter()

    // click on the login button
    template.clickLoginButton()

    // check the url after login
    unlock.checkUrl()

    // check if the login card is visible
    unlock.checkCard()

    // check the login methods buttons
    unlock.checkLogInMethods()

    // click on the Web Wallet button
    unlock.clickWebWalletButton()

    // check the url selecting the login method
    devnet_unlock.checkUrl()

    // check the card body
    devnet_unlock.checkCard()

    // check the login methods buttons
    devnet_unlock.checkLogInMethods()

    // check the connect methods buttons
    devnet_unlock.checkConnectMethods()

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

  })
})