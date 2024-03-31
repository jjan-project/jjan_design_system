import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";

import { Header } from "./header";

describe("Header", () => {
  test("renders children correctly", () => {
    render(<Header>Test Title</Header>);
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  test("renders left icon correctly", () => {
    const LeftIcon = () => <span>Left</span>;
    render(<Header leftIcon={<LeftIcon />}>Test Title</Header>);
    expect(screen.getByText("Left")).toBeInTheDocument();
  });

  test("renders right icon correctly", () => {
    const RightIcon = () => <span>Right</span>;
    render(<Header rightIcon={<RightIcon />}>Test Title</Header>);
    expect(screen.getByText("Right")).toBeInTheDocument();
  });
});
