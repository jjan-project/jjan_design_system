import styled from "@emotion/styled";

import { colors } from "@/themes";

import { AvatarProps } from "./types";

export const ImageContainer = styled.img<AvatarProps>`
  ${props =>
    props.isDisabled &&
    `
    pointer-events: none;
    filter: grayscale(100%);
  `}

  ${props =>
    props.isCircle &&
    `
    border-radius: 50%;
  `}
`;

export const ErrorFallback = styled.div<AvatarProps>`
  background-color: ${colors.gray800};
  display: inline-block;
  width: ${props => props.width};
  height: ${props => props.height};

  ${props =>
    props.isDisabled &&
    `
    pointer-events: none;
    filter: grayscale(100%);
  `}

  ${props =>
    props.isCircle &&
    `
    border-radius: 50%;
  `}
`;
