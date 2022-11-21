import React from "react";
import PropTypes from "prop-types";

import { IconButton, AppBar, Box, Toolbar, MenuItem } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import NavLinksContainer from "../NavLinksContainer/NavLinksContainer";
import NavButton from "../NavButton/NavButton";
import MenuParent from "../Menu/Menu";

import useHideAppBarOnScroll from "../../../utils/useHideAppBarOnScroll";

import styles from "./styles";

/**
 * Serves as a container for AppBar contents that sets the base layout. 
 * 
 * @param {object} obj
 * @param {ReactElement} obj.logo - Logo that's placed in far-left. You can use the `<LogoContainer>` for a quick and better way to set the param.
 * @param {ReactElement} obj.navLinks - Navigation pages/links that are placed in far-right. You can use the `<NavLinksContainer>` to wrap each link with `<NavButton>`.
 * @param {ReactElement} obj.menu - Menu that pops up on small devices. You can use the `<Menu>` for quick and better way to set the param.
 * 
 * @component
 * @category Components
 * @subcategory Atoms
 * 
 * @example  
 * const logo = (<LogoContainer src={MyLogo} />);
 * const navLinks = (
 *  <NavLinksContainer>
 *    // navPages is an array of strings for the nav
      {navPages.map((navPages) => (
        <NavButton key={navPages} content={navPages} />
      ))}
    </NavLinksContainer>);
 * 
 * <AppBarContainer logo={logo} navLinks={navLinks} menu={menu} />
 */
const AppBarContainer = ({ logo, navLinks, menuList }) => {
  useHideAppBarOnScroll("appbar", "-100px");

  return (
    <AppBar id="appbar" color={styles.appBar.color} sx={styles.appBar.sx}>
      <Box sx={styles.container}>
        <Toolbar sx={styles.toolbar} disableGutters>
          {logo}
          <Menu items={menuList} />
          <NavLinks navPages={navLinks} />
        </Toolbar>
      </Box>
    </AppBar>
  );
};

AppBarContainer.propTypes = {
  logo: PropTypes.element,
  navLinks: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  ),
  menu: PropTypes.element,
};

export default AppBarContainer;

// ================ HELPER FUNCTIONS/COMPONENTS

/**
 * 
 * A menu that allows custom `MenuItem` by having an object with `CustomMenuItem` attribute as an array element.
 * 
 * @param {object} props
 * @param {array<string | object>} props.items - Array of lists.
 * 
 * @example 
 * // Example of `items` with custom `MenuItem`
 * (
 *  const items = [
    "Projects",
    "About",
    "Contact me",
    {
      CustomMenuItem({ onClick }) {
        const handleClick = () => {
          // download logic here..
        };
        return (
          <MenuItem
            onClick={() => {
              handleClick();
              onClick();
            }}
          >
            // My custom text with icon
            <TextWithIcon
              text="Download my Resume"
              Icon={VerticalAlignBottomIcon}
            />
          </MenuItem>
        );
      },
    },
  ]
 *)
 */
function Menu({ items }) {
  const renderProp = (handleClose) => {
    const list = items.map((item, key) => {
      if (typeof item === "string") {
        return (
          <MenuItem key={key} onClick={handleClose}>
            {item}
          </MenuItem>
        );
      }
      // If an item is a custom `MenuItem`, then render it instead.
      return <item.CustomMenuItem key={key} onClick={handleClose} />;
    });

    return list;
  };

  return (
    <MenuParent
      button={(handleOpen) => (
        <IconButton onClick={handleOpen} sx={styles.menuIcon}>
          <MenuIcon />
        </IconButton>
      )}
    >
      {items && renderProp}
    </MenuParent>
  );
}

function NavLinks({ navPages = [] }) {
  return (
    <NavLinksContainer>
      {navPages.map((navPage, key) => {
        if ("CustomNavButton" in navPage) {
          return <navPage.CustomNavButton key={key} />;
        }


        return <NavButton key={key} content={navPage.text} onClick={navPage.onClick} />;
      })}
    </NavLinksContainer>
  );
}
