import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button component", () => {
  it("renders without crashing", () => {
    render(<Button />);
    // Add appropriate test expectations here
  });
});
