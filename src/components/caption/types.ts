import type { HTMLAttributes } from "react";

import { Color } from "@/themes";

import { BaseTest } from "../types/base";

type CaptionProps = Omit<HTMLAttributes<HTMLLabelElement>, "htmlFor"> &
  BaseTest & {
    htmlFor: string;
    color: Color;
    children: string;
  };

export type { CaptionProps };
