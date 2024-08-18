class HomePage {
  goToHomePage(link: string) {
    cy.visit(link);
  }
}

export default new HomePage();
