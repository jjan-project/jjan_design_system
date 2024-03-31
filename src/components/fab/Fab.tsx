import * as S from "./fab.styles";
import { FabProps } from "./types";

const Fab = (props: FabProps) => {
  const { children, onClick, ...restProps } = props;

  return (
    <S.FabButton onClick={onClick} {...restProps}>
      {children}
    </S.FabButton>
  );
};

export { Fab };
