import { Meta, StoryObj } from "@storybook/react";

import { Stack } from "./stack";

const meta: Meta<typeof Stack> = {
  title: "Stack",
  component: Stack,
};

export default meta;

type Story = StoryObj<typeof Stack>;

export const Default: Story = {
  render: args => (
    <Stack {...args}>
      <div
        style={{
          background: "black",
          height: "30px",
          width: "30px",
        }}
      />
      <div
        style={{
          background: "black",
          height: "30px",
          width: "30px",
        }}
      />
      <div
        style={{
          background: "black",
          height: "30px",
          width: "30px",
        }}
      />
      <div
        style={{
          background: "black",
          height: "30px",
          width: "30px",
        }}
      />
      <div
        style={{
          background: "black",
          height: "30px",
          width: "30px",
        }}
      />
    </Stack>
  ),
};

Default.args = {
  as: "div",
  space: "space04",
  align: "center",
};
