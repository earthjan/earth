import React from "react";
import MenuContainer from "../../atoms/MenuContainer/MenuContainer";
import MenuIconButton from "../../atoms/MenuIconButton/MenuIconButton";
import MenuItems from "../MenuItems/MenuItems";
import PropTypes from "prop-types";

/**
 * Creates a complete layout of menu.
 * 
 * We recommend to use this for a quick way of implementing a menu.
 * 
 * @param {object} obj
 * @param {handleOpenNavMenu} obj.handleOpenNavMenu - A callback that opens the menu. Head to callback to know how you can define it.
 * @param {handleCloseNavMenu} obj.handleCloseNavMenu - Callback fired when the component requests to be closed. Head to callback to know how you can define it. 
 * @param {array} obj.contents - Nav links/pages of `AppBar`.
 * @param {object} obj.anchorEl 
 * - An HTML element. It's used to set the position of the menu.
 * - We recommend to pass the currentTarget from React Synthetic Event.
 * 
 * @component 
 * @category Components
 * @subcategory Molecules
 * @example
 * (
 *  const [anchorElNav, setAnchorElNav] = React.useState(null);
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    <Menu
      handleOpenNavMenu={handleOpenNavMenu}
      handleCloseNavMenu={handleCloseNavMenu}
      contents={navPages}
      anchorEl={anchorElNav}
    />
 * )
 */
const Menu = ({
  handleOpenNavMenu,
  handleCloseNavMenu,
  contents,
  anchorEl,
}) => {
  const menuItems = (
    <MenuItems
      handleCloseNavMenu={handleCloseNavMenu}
      contents={contents}
      anchorEl={anchorEl}
    />
  );

  const menuIconButton = (
    <MenuIconButton handleOpenNavMenu={handleOpenNavMenu} />
  );

  return (
    <MenuContainer menuIconButton={menuIconButton} menuItems={menuItems} />
  );
};

Menu.propTypes = {
  handleOpenNavMenu: PropTypes.func.isRequired,
  handleCloseNavMenu: PropTypes.func.isRequired,
  contents: PropTypes.array.isRequired,
  anchorEl: PropTypes.object,
};

export default Menu;
