import { Box } from "@mui/material";

import PropTypes from "prop-types";

import { TLogoContainerProps } from "../../../ts/types/atoms/logo-container";

const paramDefaultValues = {
  height: "32px",
  width: "32px",
  alt: "Logo",
};

const LogoContainer = ({
  height = paramDefaultValues.height,
  width = paramDefaultValues.width,
  maxHeight,
  maxWidth,
  border,
  borderRadius,
  borderColor,
  alt = paramDefaultValues.alt,
  src,
  sx,
}: TLogoContainerProps) => {
  return (
    <Box
      component="img"
      height={height}
      width={width}
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      border={border}
      borderRadius={borderRadius}
      borderColor={borderColor}
      alt={alt}
      src={src}
      sx={sx}
    />
  );
};

LogoContainer.propTypes = {
  height: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  width: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  maxHeight: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  maxWidth: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  border: PropTypes.number,
  borderRadius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  borderColor: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

LogoContainer.defaultProps = {
  height: paramDefaultValues.height,
  width: paramDefaultValues.width,
  alt: paramDefaultValues.alt,
};

export default LogoContainer;
