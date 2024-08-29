class ProductDetailPage {
  goToProductDetailPage() {
    cy.visit("/products/dress-the-population-womens-uma");
  }

  getAProduct(image, name, price) {
    cy.get(image)
      .should("be.visible")
      .and(($img) => {
        // "naturalWidth" and "naturalHeight" are set when the image loads
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });

    cy.get(name).should("be.visible");
    cy.get(price).should("be.visible");
  }

  addProductToCart(optionItem, addToCartBtn) {
    cy.get(optionItem).first().click();
    cy.get(addToCartBtn).click();
    cy.wait(4000);
  }
}
export default new ProductDetailPage();
