import { forwardRef, ForwardedRef, useState, useEffect } from "react";

import * as S from "./avatar.styled";
import type { AvatarProps } from "./types";

const Avatar = (props: AvatarProps, ref: ForwardedRef<HTMLImageElement>) => {
  const {
    alt = "",
    isDisabled,
    width = "50px",
    height = "50px",
    isCircle = false,
    src,
    testId,
    ...otherProps
  } = props;

  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  useEffect(() => {
    if (!src) {
      setImageError(true);
      return;
    }

    setImageError(false);
  }, [src]);

  const Component = imageError ? S.ErrorFallback : S.ImageContainer;

  return (
    <Component
      {...otherProps}
      isDisabled={isDisabled}
      isCircle={isCircle}
      alt={alt}
      width={width}
      height={height}
      ref={ref}
      src={!imageError ? src : undefined}
      data-testid={testId}
      onError={handleImageError}
    />
  );
};

const _Avatar = forwardRef(Avatar);
export { _Avatar as Avatar };
