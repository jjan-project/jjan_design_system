import { Meta, StoryObj } from "@storybook/react";

import { Fab } from "./Fab";
import type { FabProps } from "./types";

const meta: Meta<typeof Fab> = {
  title: "Fab",
  component: Fab,
};

export default meta;

type Story = StoryObj<typeof Fab>;

export const Default: Story = {
  render: (args: FabProps) => (
    <div
      style={{
        width: "200px",
        height: "200px",
        position: "relative",
        backgroundColor: "wheat",
      }}
    >
      <Fab {...args}>X</Fab>
    </div>
  ),
};

Default.args = {
  location: "50 30 40 20",
  border: "1px solid black",
  boxShadow: "0 4px 5px 1px rgba(0, 0, 0, 0.3)",
  color: "black",
  backgroundColor: "white",
};
