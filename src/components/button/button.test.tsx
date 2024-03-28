import { render, screen } from "@testing-library/react";
import React from "react";
import { describe, expect, test } from "vitest";

import { Button } from "./button";

describe("button component", () => {
  test("render with 'Click me' text", () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("has a style value of the color red", () => {
    render(<Button style={{ color: "red" }}>Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toHaveStyle("color: #ff0000");
  });

  test("must be able to render as a div tag", () => {
    render(<Button as="div">Click me</Button>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement.tagName).toBe("DIV");
  });

  test("'forwardRef' should work correctly", () => {
    const ref = React.createRef<HTMLButtonElement>();
    render(<Button ref={ref}>Click me</Button>);
    expect(ref.current).not.toBeNull();
  });
});
