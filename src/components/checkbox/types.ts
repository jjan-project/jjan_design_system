import { Color } from "@/themes";

type CheckBoxStyle = {
  backgroundColor?: Color;
  borderRadius?: string;
  width?: number;
  height?: number;
};

type CheckBoxProps = {
  id: string;
  isChecked: boolean;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
} & CheckBoxStyle;

export type { CheckBoxProps, CheckBoxStyle };
