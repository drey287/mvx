export class Unlock{
    default_url = 'https://template-dapp.multiversx.com/unlock';
    card = () => cy.get('.card');
    defi_wallet_button = () => cy.get('.dapp-core-component__extensionLoginButton-styles__login-text')
    ledger_button = () =>  cy.get('.dapp-ledger-login-button > .dapp-core-component__loginButtonStyles__login-text')
    xportal_button = () => cy.get('.dapp-wallet-connect-login-button > .dapp-core-component__loginButtonStyles__login-text')
    web_wallet_button = () => cy.get('.dapp-web-wallet-login > .dapp-core-component__loginButtonStyles__login-text')

    checkUrl() {
        cy.url().should('include', this.default_url);
    }
    checkCard() {
        this.card().should('be.visible').contains('Login');
    }
    checkDefiWalletButton() {
        this.defi_wallet_button().should('be.visible').contains('MultiversX DeFi Wallet');
    }
    checkLedgerButton() {
        this.ledger_button().should('be.visible').contains('Ledger');
    }
    checkXportalButton() {
        this.xportal_button().should('be.visible').contains('xPortal App');
    }

    checkWebWalletButton() {
        this.web_wallet_button().should('be.visible').contains('MultiversX Web Wallet');
    }

    clickWebWalletButton() {
        this.web_wallet_button().click();
    }

    // ---------------------- multiple methods ----------------------   //
    checkLogInMethods(){
        this.checkDefiWalletButton()
        this.checkLedgerButton()
        this.checkXportalButton()
        this.checkWebWalletButton()
    }

}