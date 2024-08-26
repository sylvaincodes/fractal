class ProductDetailPage {
  goToProductDetailPage(link: string) {
    cy.visit(link);
  }
}
export default new ProductDetailPage();
