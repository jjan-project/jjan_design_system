import * as S from "./hr.styles";
import type { HrProps } from "./types";

import { Box } from "@/components/box";

const Hr = ({ type = "solid", backgroundColor = "gray700" }: HrProps) => {
  if (type === "dotted") {
    return (
      <S.HrContainer>
        {Array.from({ length: 100 }).map((_, index) => (
          <Box
            key={index}
            width="9px"
            height="1px"
            backgroundColor={backgroundColor}
            style={{ flexShrink: 0 }}
          />
        ))}
      </S.HrContainer>
    );
  }

  return <Box width="100%" height="1px" backgroundColor={backgroundColor} />;
};

export { Hr };
