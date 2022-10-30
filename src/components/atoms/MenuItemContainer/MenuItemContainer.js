import React from "react";
import Menu from "@mui/material/Menu";
import PropTypes from "prop-types";

/**
 * Serves as a container for menu items.
 * 
 * We recommend to use `<MenuItems />` if you wish to have a `menu` right away. You should only use this if you have your own customization with your own menu items, such as `<BasicMenuItem />`.
 * 
 * @param {object} obj
 * @param {object} obj.anchorEl 
 * - An HTML element. It's used to set the position of the menu.
 * - We recommend to pass the currentTarget from React Synthetic Event.
 * @param {boolean} obj.open - If true, the component is shown.
 * @param {handleCloseNavMenu} obj.handleCloseNavMenu - Callback fired when the component requests to be closed. Head to callback to know how you can define it.
 * 
 * @component
 * @category Components
 * @subcategory Atoms
 * 
 * @example
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    
    // Opens the menu/nav links, and is passed to a component, such as `<MenuIconButton />`, to raise an event for opening the menu. 
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    
    // Indicates that menu closes.
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };

    const items = contents.map((item) => (
      <BasicMenuItem handleCloseNavMenu={handleCloseNavMenu} content={item} />
    ));
    
    <MenuItemContainer
      handleCloseNavMenu={handleCloseNavMenu}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
    >
      {contents.length ? items : "No items"}
    </MenuItemContainer>
 */
const MenuItemContainer = ({
  children,
  anchorEl,
  open,
  handleCloseNavMenu
}) => {
  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      open={open}
      onClose={handleCloseNavMenu}
      sx={{
        display: { xs: "block", md: "none" },
      }}
    >
      {children}
    </Menu>
  );
};

MenuItemContainer.propTypes = {
  anchorEl: PropTypes.object, 
  open: PropTypes.bool.isRequired,
  handleCloseNavMenu: PropTypes.func.isRequired,
};

export default MenuItemContainer;
