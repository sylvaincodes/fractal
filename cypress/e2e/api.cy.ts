import Home from "../pages/Home";

describe("Testing for Home page", () => {
  it("should navigate to the home page", () => {
    Home.goToHomePage();
  });

  it("should get a list of slides", () => {
    cy.request("GET", "https://fractal-api-zeta.vercel.app/api/slides").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).length.to.be.greaterThan(1);
      }
    );
  });

  it("should get a list of products", () => {
    cy.request("GET", "https://fractal-api-zeta.vercel.app/api/products").then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).length.to.be.greaterThan(1);
      }
    );
  });
});
