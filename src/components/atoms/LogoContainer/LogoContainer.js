import React from "react";
import { Box } from "@mui/system";
import PropTypes from "prop-types";

const paramDefaultValues = {
  height: "32px",
  width: "32px",
  alt: "Logo",
}

/**
 * Serves as a container that wraps your logo without extra padding and margin. It utilizes the `<img>` under the hood.
 * 
 * @param {object} obj
 * @param {(object | string)} obj.height - Height of the container.
 * @param {(object | string)} obj.width - Width of the container.
 * @param {(object | string)} obj.maxHeight - Max height of the container. If it's `object`, you can have different values based on breakpoints, for example, `{ xs: "50px", md: "75px", }`.
 * @param {(object | string)} obj.maxWidth - Max width of the container. If it's `object`, you can have different values based on breakpoints, for example, `{ xs: "50px", md: "75px", }`.
 * @param {number} obj.border - Border of the logo.
 * @param {(number|string)} obj.borderRadius - Border radius of the logo.
 * @param {string} obj.borderColor - Border color.
 * @param {string} obj.alt - Text that replaces your broken `src`.
 * @param {string | object} obj.src - Path of your logo. You must import the image, and pass it as the param value so that React can recognize it. Additionally, we recommend to have an .svg to preserve the logo quality on different screen sizes.
 * 
 * @component
 * @category Components
 * @subcategory Atoms
 * @example <caption>Basic usage & with AppBarContainer</caption>
 * 
 * import MyLogo from "./images/MyLogo.svg";
 * 
 * // Basic usage
 *  // Utilizing the default sizes.
 *  <Logocontainer src={MyLogo}/>
 * 
 * // With AppBarContainer
 *  <AppBarContainer logo={MyLogo} .../>
 */
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
}) => {
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
    />
  );
};

LogoContainer.propTypes = {
  height: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  width: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  maxHeight: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  maxWidth: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]),
  border: PropTypes.number,
  borderRadius: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  borderColor: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
  ]).isRequired,
};

LogoContainer.defaultProps = {
  height: paramDefaultValues.height,
  width: paramDefaultValues.width,
  alt: paramDefaultValues.alt,
};

export default LogoContainer;
