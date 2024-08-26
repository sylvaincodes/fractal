import login from "../selectors/login.sel";
class LoginPage {
  goToLoginPage(link: string) {
    cy.visit(link);
  }

  login(username: string, password: string) {
    cy.get(login.emailField).clear().type(username);
    cy.get(login.passwordField).clear().type(password);
  }

  getEmailErrorMessage() {
    return cy.get(login.emailErrorMessage);
  }

  submitForm() {
    cy.wait(2000);
    return cy.get(login.signInButton).click();
  }

  getPasswordErrorMessage() {
    return cy.get(login.passwordErrorMessage);
  }

  getLoginPageTitle() {
    return cy.get(login.loginPageTitle);
  }

  disableSigninBtn() {
    cy.get(login.signInButton).should("have.attr", "disabled");
  }

  goToCartPage() {
    cy.wait(4000);
    return cy.get(login.cartSection).click({ timeout: 60000 });
  }
}
export default new LoginPage();
