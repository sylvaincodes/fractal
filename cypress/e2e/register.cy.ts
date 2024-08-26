import Register from "../Pages/Register";

describe("", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    Register.goToRegisterPage("/register");
  });

  it("should get error validation", () => {
    Register.getRegisterPageTitle()
      .should("exist")
      .contains(/create an account/i);
    Register.register(
      "al6",
      "notAvalidEmail",
      "notAvaliPas",
      "notAvalidConfirmPas"
    );
    Register.submitForm();
    Register.getNameErrorMessage()
      .should("exist")
      .should("be.visible")
      .contains(/6 letters at least/i);

    Register.getPasswordErrorMessage()
      .should("exist")
      .should("be.visible")
      .contains(
        /Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character/i
      );
    Register.getPasswordConfirmErrorMessage()
      .should("exist")
      .contains(/Passwords must match/);
  });

  it("should get error when passwords did not match", () => {
    Register.getRegisterPageTitle()
      .should("exist")
      .contains(/create an account/i);
    Register.register(
      "aValidName",
      "avalidemail@gmail.com",
      "&isAvaliPass2024",
      "notAvalidConfirmPas"
    );
    Register.submitForm();
    Register.getEmailErrorMessage().should("not.exist");
    Register.getEmailErrorMessage().should("not.exist");
    Register.getPasswordErrorMessage().should("not.exist");
    Register.getPasswordConfirmErrorMessage()
      .should("exist")
      .should("be.visible")
      .contains(/Passwords must match/i);
  });

  it("should fill the form and send the data", () => {
    Register.getRegisterPageTitle()
      .should("exist")
      .contains(/create an account/i);
    Register.register(
      Cypress.env("CYPRESS_TEST_USER_NAME"),
      Cypress.env("CYPRESS_TEST_USER_EMAIL"),
      Cypress.env("CYPRESS_TEST_USER_PASSWORD"),
      Cypress.env("CYPRESS_TEST_USER_PASSWORD")
    );
    Register.getNameErrorMessage().should("not.exist");
    Register.getEmailErrorMessage().should("not.exist");
    Register.getPasswordErrorMessage().should("not.exist");
    Register.getPasswordConfirmErrorMessage().should("not.exist");
  });
});
