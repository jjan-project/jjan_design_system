import * as S from "./cluster.styles";
import { ClusterProps } from "./types";

const Cluster = (props: ClusterProps) => {
  const { gap, children } = props;

  return <S.Container gap={gap}>{children}</S.Container>;
};

export { Cluster };
