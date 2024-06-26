import * as S from "./flexItem.styles";
import type { FlexItemProps } from "./types";

const FlexItem = (props: FlexItemProps) => {
  const { children, ...restProps } = props;
  return <S.FlexItem {...restProps}>{children}</S.FlexItem>;
};

export { FlexItem };
