import React from "react";
import { render, screen } from "@testing-library/react";
import { Navbar } from "../Navbar";

describe("Navbar component", () => {
  it("renders without crashing", () => {
    render(<Navbar />);
    // Add appropriate test expectations here
  });
});
