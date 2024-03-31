import styled from "@emotion/styled";

import { spaces } from "@/themes";

import { StackProps } from "./types";

export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => align};
  gap: ${({ space }) => (space ? spaces[space] : undefined)};
`;
