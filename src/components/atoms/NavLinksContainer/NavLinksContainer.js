import React from "react";
import { Box } from "@mui/system";
import { NavLinksContainerStyles } from "./styles";

/**
 * Serves a container for creating nav links for an `AppBar`. It's usually used with the `<AppBarContainer />`.
 * 
 * It implements responsive layout by hiding the links on >=`xs` breakpoint, but reveals on >=`md`.
 * 
 * It layouts the nav links horizontally and in far-right.
 * 
 * @component
 * @category Components
 * @subcategory Atoms
 * 
 * @example <caption>Usual implementation with `AppBarContainer`</caption>
 *  // navPages is an array of strings.
    const navLinks = (
      <NavLinksContainer>
        {navPages.map((navPages) => (
          <NavButton key={navPages} content={navPages} />
        ))}
      </NavLinksContainer>
    );

    <AppBarContainer navLinks={navLinks} ... />
 */
const NavLinksContainer = ({ children }) => {
  return <Box sx={NavLinksContainerStyles}>{children}</Box>;
};

export default NavLinksContainer;
