import { Meta, StoryObj } from "@storybook/react";

import { Flex } from "./flex";

const meta: Meta<typeof Flex> = {
  title: "Flex",
  component: Flex,
};

export default meta;

type Story = StoryObj<typeof Flex>;

export const Default: Story = {
  render: () => (
    <div style={{ height: "500px" }}>
      <Flex flexDirection="column" justifyContent="space-between">
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div>hello</div>
        <h1>hello</h1>
      </Flex>
    </div>
  ),
};
