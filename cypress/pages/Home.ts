import home from "../selectors/home.sel";

class HomePage {
  goToHomePage() {
    cy.visit("/");
  }

  register(email: string) {
    cy.get(home.emailNewsletter).clear().type(email);
    cy.get(home.buttonNewsletter).click();
    cy.get(home.notification)
      .should("exist")
      .should("be.visible")
      .contains(/Thanks for you subscription./);
  }

  goToProductsPage() {
    cy.visit("/products");
  }
}

export default new HomePage();
