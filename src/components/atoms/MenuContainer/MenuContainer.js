import React from 'react'
import { Box } from '@mui/system'
import { menuContainerStyles } from './styles'
import PropTypes from "prop-types";

/**
 * Serves as a container that can be used to create a menu that pops up on small-screen devices. 
 * 
 * We recommend to use `<Menu />` and `<MenuItems />` to have a functioning `menu` right away without worrying about styling and layouting. 
 * 
 * @param {object} obj
 * @param {ReactElement} obj.menu 
 * - The icon button that is used to reveal navigation links/pages that were contained on small-screen devices. 
 * - You can use the `<Menu />` for a quick usage, but if you wish to have your own implementation, start with {@link https://mui.com/material-ui/react-button/#icon-button MUI }.
 * @param {ReactElement} obj.menuItems - Navigation links. We recommend you to use the `<MenuItems />` to only worry about passing minimal functionalities instead of styling and layouting.
 * 
 * @component
 * @category Components
 * @subcategory Atoms
 * 
 * @example
 * const menu = (<Menu handleOpenNavMenu={openMenu}/>);
 * const menuItems = (
      <MenuItems
        handleCloseNavMenu={closeMenu}
        contents={contents}
        anchorEl={anchorEl}
      />
    );
 * 
 * <MenuContainer menu={menu} menuItems={menuItems}/>
 */
const MenuContainer = ({ menu, menuItems}) => {
  return (
    <Box sx={menuContainerStyles}>
        {menu}
        {menuItems}
    </Box>
  )
}

MenuContainer.propTypes = {
  menu: PropTypes.element,
  menuItems: PropTypes.element,
};

export default MenuContainer