import Page from "@/app/(website)/(pages)/(home)/page";
import { expect, test, describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("HOME UI", () => {
  // createt a group of test with describe
  test("Should show home page", () => {
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
