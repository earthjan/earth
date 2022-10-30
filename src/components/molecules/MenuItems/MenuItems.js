import React from "react";

import MenuItemContainer from "../../atoms/MenuItemContainer/MenuItemContainer";

import BasicMenuItem from "../../atoms/BasicMenuItem/BasicMenuItem";

import PropTypes from "prop-types";

/**
 * Creates a menu list that contains nav links to fit on small-screen devices.
 * 
 * We recommend to use `<Menu />` instead for a quick way of implementing a complete layout of menu.
 * 
 * @param {object} obj
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
  
    // Opens the menu/nav links, and is passed to a component, such as `<MenuIconButton />`, to raise an event for opening the menu. 
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };

    // Indicates that menu closes.
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const contents = ["Home", "Blog", "About",]
  
    <MenuItems
      handleCloseNavMenu={handleCloseNavMenu}
      contents={contents}
      anchorEl={anchorElNav}
    />
 * )
 */
const MenuItems = ({ handleCloseNavMenu, contents, anchorEl }) => {
  const items = contents.map((item, key) => (
    <BasicMenuItem
      key={key}
      handleCloseNavMenu={handleCloseNavMenu}
      content={item}
    />
  ));

  return (
    <MenuItemContainer
      handleCloseNavMenu={handleCloseNavMenu}
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
    >
      {contents.length ? items : "No items"}
    </MenuItemContainer>
  );
};

MenuItems.propTypes = {
  handleCloseNavMenu: PropTypes.func.isRequired,
  contents: PropTypes.array.isRequired,
  anchorEl: PropTypes.object,
};

export default MenuItems;
