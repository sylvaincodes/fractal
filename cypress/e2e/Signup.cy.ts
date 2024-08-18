import { setupClerkTestingToken } from "@clerk/testing/cypress";

it("should sign in", () => {
  setupClerkTestingToken();

  cy.visit("/sign-in");
});
