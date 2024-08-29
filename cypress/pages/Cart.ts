import cart from "../selectors/cart.sel";

class Cart {
  goToCartPage() {
    cy.visit("/cart");
  }

  checkout() {
    cy.get(cart.reduceQtyCart).click();
    cy.get(cart.increaseQtyCart).dblclick();
    cy.get(cart.checkoutBtn).click();
  }
}
export default new Cart();
