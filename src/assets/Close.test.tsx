import React from "react";
import { render, screen } from "@testing-library/react";
import Close from "./Close";

test("renders Close clases", () => {
    render(<Close/>);
    expect(screen.getByTestId('svg-element')).toBeInTheDocument()
  });