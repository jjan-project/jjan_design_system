import { Meta } from "@storybook/react";

import { Box } from "./box";
import type { BoxProps } from "./types";

const meta: Meta<typeof Box> = {
  title: "Box",
  component: Box,
  argTypes: {
    as: {
      options: ["div", "header", "body", "section", "article"],
      control: { type: "radio" },
    },
    overflow: {
      options: ["auto", "clip", "hidden", "scroll", "visible"],
      control: { type: "radio" },
    },
  },
};

export default meta;

export const Default = (args: BoxProps) => {
  return (
    <Box {...args} backgroundColor="violet100">
      {args.children}
    </Box>
  );
};

Default.args = {
  as: "div",
  overflow: "auto",
  width: "600px",
  height: "600px",
  centerContent: false,
  children: "Simple Box",
};
