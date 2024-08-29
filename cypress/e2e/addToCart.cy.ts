import Cart from "../pages/Cart";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";
import Products from "../pages/Products";
import productDetail from "../selectors/productDetails.sel";
import products from "../selectors/products.sel";

describe("buy a product ", () => {
  it("should add a product to cart", () => {
    Home.goToHomePage();
    Home.goToProductsPage();
    Products.goToProductDetail(products.productItem);
    ProductDetail.goToProductDetailPage();
    ProductDetail.addProductToCart(
      productDetail.optionItem,
      productDetail.addToCartBtn
    );
    Cart.goToCartPage();
  });
});
