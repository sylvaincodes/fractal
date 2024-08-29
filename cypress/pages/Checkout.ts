import checkout from "../selectors/checkout.sel";

class CartPage {
  goToCartPage(link: string) {
    cy.visit(link);
  }

  proceedToPayment() {
    cy.get(checkout.addressCheckout).click();
    cy.get(checkout.paymentCheckout).click();
    cy.get(checkout.deliveryCheckout).click();
  }
}
export default new CartPage();
