export class DappPage {
    default_url = 'https://template-dapp.multiversx.com/';
    title = 'MultiversX';

    logo = ()=> cy.get('.multiversx-logo');
    cart_title = () => cy.get('[data-testid="title"]');
    cart_description = () => cy.get('p.mb-3')
    login_button = () => cy.get('[data-testid="loginBtn"]')
    footer = () => cy.get('.mt-2 > div > .d-flex')


    visit_url() {
        cy.visit(this.default_url);
    }
    checkTitle() {
        cy.title().should('include', this.title);
    }
    checkLogo() {
        this.logo().should('be.visible');
    }
    checkName() {
        cy.get('.dapp-name').should('be.visible').contains('example Dapp');
    }
    checkCartTitle() {
        this.cart_title().should('be.visible').contains('example Dapp');
    }
    checkCartDescription() {
        this.cart_description().should('be.visible').contains('This is an MultiversX dapp sample. Login using your MultiversX wallet.');
    }
    checkLoginButton() {
        this.login_button().should('be.visible').contains('Login');
    }
    checkFooter() {
        this.footer()
            .should('be.visible')
            .should('have.attr', 'href', 'https://multiversx.com/')
            .contains('Made with ')
    }
    clickLoginButton() {
        this.login_button().click();
    }
}
