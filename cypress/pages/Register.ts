import register from "../selectors/register.sel";
class RegisterPage {
  goToRegisterPage(link: string) {
    cy.visit(link);
  }

  register(
    name: string,
    email: string,
    password: string,
    confirm_password: string
  ) {
    cy.get(register.nameRegister).clear().type(name);
    cy.get(register.emailRegister).clear().type(email);
    cy.get(register.passwordRegister).clear().type(password);
    cy.get(register.confirmPasswordRegister).clear().type(confirm_password);
  }

  getEmailErrorMessage() {
    return cy.get(register.emailErrorMessage);
  }

  submitForm() {
    return cy.get(register.registerButton).click();
  }

  getNameErrorMessage() {
    return cy.get(register.nameErrorMessage);
  }

  getPasswordErrorMessage() {
    return cy.get(register.passwordErrorMessage);
  }

  getPasswordConfirmErrorMessage() {
    return cy.get(register.passwordConfirmErrorMessage);
  }

  getRegisterPageTitle() {
    return cy.get(register.registerPageTitle);
  }

  disableSigninBtn() {
    cy.get(register.registerButton).should("have.attr", "disabled");
  }

  goToCartPage() {
    cy.wait(2000);
    return cy.get(register.loginPageTitle).click({ timeout: 60000 });
  }
}
export default new RegisterPage();
