class ProductsPage {
  goToProductsPage(link: string) {
    cy.visit(link);
  }
}

export default new ProductsPage();
