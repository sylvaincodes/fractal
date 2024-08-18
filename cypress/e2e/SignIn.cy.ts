import { setupClerkTestingToken } from "@clerk/testing/cypress";

describe("Testing Clerk Login auth", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.visit("/sign-in");
  });

  it.skip("should sign in", () => {
    setupClerkTestingToken();

    // const emailAddress = "jane+clerk_test@example.com";
    const password = "+12015550100";
    //import clerck command to support/commandts before
    // #email clerk format test should be like this +clerk_test
    // cy.clerkSignIn({ strategy: "phone_code", identifier: "+12015550100" });
    cy.clerkSignIn({
      strategy: "phone_code",
      identifier: password,
    });
    cy.visit("/account/dashboard");
    cy.clerkSignOut();
  });
});
