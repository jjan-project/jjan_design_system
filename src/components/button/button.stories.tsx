import { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Variant: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button appearance="primary">Button</Button>
      <Button appearance="secondary">Button</Button>
    </div>
  ),
};

export const WithDisabled: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button disabled>Button</Button>
      <Button as="div" disabled>
        Button
      </Button>
    </div>
  ),
};

export const WithPolymorphism: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Button>Button</Button>
      <Button as="a" href="#">
        Anchor
      </Button>
    </div>
  ),
};
