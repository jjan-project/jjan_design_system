import { ReactNode } from "react";

import { Color } from "@/themes";

import { PolymorphicComponentPropWithRef } from "../types/polymorphic";

type Appearance = "header1" | "header2" | "body1" | "body2" | "body3" | "info1";

type TypoProps = {
  /**
   * The visual appearance of the typographic element (e.g., "header1", "header2").
   * @default "body1"
   */
  appearance: Appearance;

  /**
   * The color of the text content.
   * @default "black"
   */
  color?: Color;
};

type TypoPropsWithPolymorphic<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, TypoProps>;

type TypoComponent = <C extends React.ElementType = "span">(
  props: TypoPropsWithPolymorphic<C>,
) => ReactNode;

export type { Appearance, TypoProps, TypoPropsWithPolymorphic, TypoComponent };
