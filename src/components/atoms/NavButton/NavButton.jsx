import React from "react";
import PropTypes from "prop-types";

import { Button } from "@mui/material";

import { navButtonStyles } from "./styles";

/**
 * To create a nav link for an `AppBar`. 
 * 
 * It is usually used with `<NavLinksContainer />`.
 * 
 * @param {object} obj
 * @param {(string|ReactElement)} obj.content - Content of nav button. Usually, `string` is enough, but you can use `<Typography />` to pass a `ReactElement`.
 * 
 * @component
 * @category Components
 * @subcategory Atoms
 * 
 * @example <caption>Usual implementation</caption>
 *  // navPages is an array of strings.
    <NavLinksContainer>
      {navPages.map((navPages) => (
        <NavButton key={navPages} content={navPages} />
      ))}
    </NavLinksContainer>
 */
const NavButton = ({ content, onClick, variant, color = "primary" }) => {
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      sx={navButtonStyles}
    >
      {content}
    </Button>
  );
};

NavButton.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

export default NavButton;
