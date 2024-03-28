import { PolymorphicComponentPropWithRef } from "../types/polymorphic";

type Appearance = "primary" | "secondary";

type ButtonProps = {
  /**
   * Specifies the appearance of the button.
   * @default "primary"
   */
  appearance?: Appearance;

  /**
   * Indicates whether the button is disabled.
   * @default false
   */
  disabled?: boolean;
};

type ButtonPropsWithPolymorphic<C extends React.ElementType> =
  PolymorphicComponentPropWithRef<C, ButtonProps>;

type ButtonComponent = <C extends React.ElementType = "button">(
  props: ButtonPropsWithPolymorphic<C>,
) => React.ReactNode;

export type {
  ButtonComponent,
  ButtonPropsWithPolymorphic,
  Appearance,
  ButtonProps,
};
