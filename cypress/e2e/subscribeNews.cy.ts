import Home from "../pages/Home";
const randomEmail = require("random-email");
const email = randomEmail({ domain: "gmail.com" });

describe("Testing for Home page", () => {
  it("should navigate to the home page", () => {
    Home.goToHomePage();
  });

  it("should post newsletter form successfully", () => {
    Home.register(email);
  });
});
