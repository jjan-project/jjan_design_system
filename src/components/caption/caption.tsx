import { Typo } from "../typo";

import { CaptionProps } from "./types";

const Caption = (props: CaptionProps) => {
  const { htmlFor, color, children } = props;

  return (
    <label htmlFor={htmlFor}>
      <Typo appearance="body3" color={color}>
        {children}
      </Typo>
    </label>
  );
};

export { Caption };
