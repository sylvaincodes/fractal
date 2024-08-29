import { setupClerkTestingToken } from "@clerk/testing/cypress";

describe("Auth clerk", () => {
  it("sign in", () => {
    setupClerkTestingToken();
    cy.visit("/account/dashboard");
    // user is signed in from here on
  });

  it("sign up", () => {
    setupClerkTestingToken();
    cy.visit("/account/dashboard");
    // user is signed in from here on
  });
});
