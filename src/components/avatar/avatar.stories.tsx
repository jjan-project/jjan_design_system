import { Meta } from "@storybook/react";

import { Avatar } from "./avatar";
import type { AvatarProps } from "./types";

const meta: Meta<typeof Avatar> = {
  title: "Avatar",
  component: Avatar,
};

export default meta;

const EX_URL =
  "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611722.jpg?w=826&t=st=1711793095~exp=1711793695~hmac=9ecb31b47e9403b824e64bca8ac3e3229328bf93ff10220162358034638ff36d";

export const Default = (args: AvatarProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Avatar {...args} />
      <Avatar width={60} height={60} />
      <Avatar width={60} height={60} isCircle />
    </div>
  );
};

Default.args = {
  alt: "사용자 아바타",
  src: EX_URL,
  width: "60px",
  height: "60px",
  isDisabled: false,
};
