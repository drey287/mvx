export class DevnetUnlock{
    default_url = 'https://devnet-wallet.multiversx.com/unlock';
    wallet_login_option =() => cy.get('[data-testid="walletConnectBtn"]')
    ledger_login_option =() => cy.get('[data-testid="ledgerLoginBtn"]')
    extension_login_option =() =>cy.get('[data-testid="extensionLoginBtn"]')
    keystore_connect_option =() => cy.get('[data-testid="keystoreBtn"]')
    pem_connect_option =() => cy.get('[data-testid="pemBtn"]')
    card = () => cy.get('.card');

    // ---------------------- popup card ----------------------   //
    popup_password_input = () => cy.get('[data-testid="accessPass"]');
    popup_submit_button = () => cy.get('[data-testid="submitButton"]');

    popup_file_input = () => cy.get('input[type="file"]');


    checkUrl() {
        cy.url().should('include', this.default_url);
    }
    checkCard() {
        this.card().should('be.visible').contains('Connect your wallet');
    }
    checkWalletLoginOption() {
        this.wallet_login_option().should('be.visible').contains('Mobile');
    }

    checkLedgerLoginOption() {
        this.ledger_login_option().should('be.visible').contains('Ledger');
    }

    checkExtensionLoginOption() {
        this.extension_login_option().should('be.visible').contains('Extension');
    }

    checkKeystoreConnectOption() {
        this.keystore_connect_option().should('be.visible').contains('Keystore');
    }
    checkPemConnectOption() {
        this.pem_connect_option().should('be.visible').contains('PEM');
    }

    clickKeystoreConnectOption() {
        this.keystore_connect_option().click();
    }
    checkPopupPasswordInput() {
        this.popup_password_input().should('be.visible');
    }
    checkPopupSubmitButton() {
        this.popup_submit_button().should('be.visible');
    }

    // uploadFile(filePath){
    //     this.popup_file_input().selectFile(filePath);
    // }

    // ---------------------- multiple methods ----------------------   //
    checkLogInMethods(){
        this.checkWalletLoginOption()
        this.checkLedgerLoginOption()
        this.checkExtensionLoginOption()
    }

    checkConnectMethods(){
        this.checkKeystoreConnectOption()
        this.checkPemConnectOption()
    }

}