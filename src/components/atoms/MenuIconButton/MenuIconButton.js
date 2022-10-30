import React from "react";
import { IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";

/**
 * Can be used to create a menu button that pops up on small-screen devices. It is also used as an anchor element for menu items, which are nav links. 
 * 
 * We recommend to use this with `<MenuContainer />` to have a functioning menu button right away without worrying about styling and layouting.  
 * 
 * @param {object} obj
 * @param {string} obj.size - The size of your button.
 * @param {handleOpenNavMenu} obj.handleOpenNavMenu - A callback that opens the menu. Head to callback to know how you can define it.
 * @param {string} obj.color - Color of menu icon.
 * 
 * @component
 * @category Components
 * @subcategory Atoms
 * 
 * @example
 *  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
 * 
 *  <MenuIconButton handleOpenNavMenu={handleOpenNavMenu} />
 */
const MenuIconButton = ({
  size = "large",
  handleOpenNavMenu,
  color = "white",
}) => {
  return (
    <IconButton size={size} onClick={handleOpenNavMenu} color={color}>
      <MenuIcon />
    </IconButton>
  );
};

MenuIconButton.propTypes = {
  size: PropTypes.oneOf(["large", "small", "medium"]),
  handleOpenNavMenu: PropTypes.func.isRequired,
  color: PropTypes.string,
};

MenuIconButton.defaultProps = {
  size: "large",
  color: "bg",
};

export default MenuIconButton;