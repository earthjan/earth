import React from "react";
import { MenuItem } from "@mui/material";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types"; 

/**
 * Used to create a menu item.
 * 
 * We recommend to use `<MenuItems />` if you wish to have a `menu` right away. You should only use this if you have your own customization with your own menu items.
 * 
 * @param {object} obj
 * @param {handleCloseNavMenu} obj.handleCloseNavMenu - A callback that closes the menu. Head to callback to know how you can define it.
 * @param {string} obj.content - Menu item
 * 
 * @component
 * @category Components
 * @subcategory Atoms
 * 
 * @example
 * (
 *  const [anchorElNav, setAnchorElNav] = React.useState(null);
    
    // Opens the menu/nav links, and is passed to a component, such as `<MenuIconButton />`, to raise an event for opening the menu. 
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    // Indicates that menu closes.
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const items = contents.map((item) => (
      // Closes the menu when an item was clicked.
      <BasicMenuItem handleCloseNavMenu={handleCloseNavMenu} content={item} />
    ));

    <MenuItemContainer
      handleCloseNavMenu={handleCloseNavMenu}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
    >
      {contents.length ? items : "No items"}
    </MenuItemContainer>
  )
 */
const BasicMenuItem = ({ handleCloseNavMenu, content }) => {
  return (
    <MenuItem onClick={handleCloseNavMenu}>
      <Typography textAlign="center">{content}</Typography>
    </MenuItem>
  );
};

BasicMenuItem.propTypes = {
  handleCloseNavMenu: PropTypes.func.isRequired,
  content: PropTypes.string.isRequired,
};

export default BasicMenuItem;
