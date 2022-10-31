import React from "react";
import PropTypes from "prop-types";

import MuiMenu from "@mui/material/Menu";

import styles from "./styles";

/**
 * Custom MUI `Menu` to provide custom styling.
 * 
 * @param {object} props 
 * @param {function} props.children - A render prop that takes the `handleClose` param.
 * @param {function} props.button - A render prop that takes the `handleClick` param.
 * 
 * @example
 * // Basic usage
 * (
 *  function CustomNavButton() {
        const links = [
          {
            text: "Download my Resume",
            url: "download-resume",
          },
          {
            text: "Download my CV",
            url: "download-cv",
          },
        ];

        const handleDownload = (url) => {
          console.log("downloading..", url)
        }

        return (
          <>
            <Menu
              button={(onClick) => (
                <NavButton content="CV / Resume" onClick={onClick} />
              )}
            >
              {(onClick) =>
                links.map((link, key) => (
                  <MenuItem
                    key={key}
                    onClick={() => {
                      handleDownload(link.url);
                      onClick();
                    }}
                  >
                    <TextWithIcon
                      text={link.text}
                      Icon={VerticalAlignBottomIcon}
                    />
                  </MenuItem>
                ))
              }
            </Menu>
          </>
        );
      },
    }
 * )
 */
const Menu = ({ children, button }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {button && button(handleClick)}
      <MuiMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx={styles.menu}
      >
        {children(handleClose)}
      </MuiMenu>
    </>
  );
};

export default Menu;

Menu.propTypes = {
  children: PropTypes.func.isRequired,
  button: PropTypes.func.isRequired
};
