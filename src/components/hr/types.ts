import type { Color } from "@/themes";

type HrType = "solid" | "dotted";

type HrProps = {
  type?: HrType;
  backgroundColor?: Color;
};

export type { HrProps };
