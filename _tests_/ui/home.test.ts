// import Page from "@/app/(website)/(pages)/(home)/page";
// import Page from "@/app/(website)/(pages)/cart/page";
import { expect, test, describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Routing test", () => {
  // createt a group of test with describe
  test.skip("Should show home page", async () => {
    // ARRANGE
    render(<Page />);

    // ACT
    const heading = screen.getByRole("heading", {
      name: /home/i,
    });

    // ASSERT
    expect(heading).toBeInTheDocument();
  });
});
