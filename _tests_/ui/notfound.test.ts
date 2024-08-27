import * as React from "react";
// import Page from "@/app/(website)/(pages)/(home)/page";
import Page from "@/app/not-found";
import { expect, test, describe } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe("Routing test", () => {
  // createt a group of test with describe
  test.skip("Should show not found page", () => {
    // ARRANGE
    render(<Page />);
    // ACT
    const heading = screen.getByTestId("title");

    // ASSERT
    expect(heading).toBeInTheDocument();
  });
});
