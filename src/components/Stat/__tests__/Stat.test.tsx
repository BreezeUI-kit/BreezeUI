import React from "react";
import { render, screen } from "@testing-library/react";
import { Stat } from "../Stat";

describe("Stat component", () => {
  it("renders without crashing", () => {
    render(<Stat />);
    // Add appropriate test expectations here
  });
});
