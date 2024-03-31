import * as S from "./box.styles";
import { BoxProps } from "./types";

const Box = (props: BoxProps) => {
  const { children, ...restProps } = props;
  return <S.Box {...restProps}>{children}</S.Box>;
};

export { Box };
