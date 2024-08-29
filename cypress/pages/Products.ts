class ProductsPage {
  goToProductsPage(link: string) {
    cy.visit(link);
  }

  goToProductDetail(productItem: string) {
    cy.get(productItem).first().click();
    cy.wait(5000);
  }
}

export default new ProductsPage();
