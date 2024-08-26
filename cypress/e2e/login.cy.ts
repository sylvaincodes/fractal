import Login from "../pages/Login";

describe("Login page test suite", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    Login.goToLoginPage("/signin");
  });

  it("should get error validation", () => {
    Login.getLoginPageTitle()
      .should("exist")
      .contains(/login to your account/i);
    Login.login("notAvalidEmail", "notAvalidPassword");
    Login.getEmailErrorMessage()
      .should("exist")
      .should("be.visible")
      .contains("format is not valid");
  });

  it("should fill the form and redirect to protected page", () => {
    Login.getLoginPageTitle()
      .should("exist")
      .contains(/login to your account/i);

    Login.login(
      Cypress.env("CYPRESS_TEST_USER_EMAIL"),
      Cypress.env("CYPRESS_TEST_USER_PASSWORD")
    );
    Login.getEmailErrorMessage().should("not.exist");
    Login.getPasswordErrorMessage().should("not.exist");
    Login.submitForm();
    Login.disableSigninBtn();
  });
});
