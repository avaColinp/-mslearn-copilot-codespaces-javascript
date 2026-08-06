import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import Portfolio from "./Portfolio";

describe("Portfolio", () => {
  it("renders the portfolio heading and project cards", () => {
    render(<Portfolio />);

    expect(screen.getByRole("heading", { name: /portfolio/i })).toBeInTheDocument();
    expect(screen.getByAltText(/desktop with books and laptop/i)).toBeInTheDocument();
    expect(screen.getByText(/10 things to know about azure static web apps/i)).toBeInTheDocument();
    expect(screen.getByText(/web development for beginners/i)).toBeInTheDocument();
  });
});
