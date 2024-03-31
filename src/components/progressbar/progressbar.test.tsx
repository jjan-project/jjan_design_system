import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";

import { ProgressBar } from "./progressbar";

describe("ProgressBar", () => {
  test("renders the correct number of steps", () => {
    render(<ProgressBar curStep={3} totalSteps={10} testId="step" />);
    const steps = screen.getAllByTestId("step");
    expect(steps.length).toBe(10);
  });
});
