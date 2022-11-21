import React from "react";
import PropTypes from "prop-types"

import { Stack, Typography } from "@mui/material";

import styles from "./styles";

const TextWithIcon = ({ text, Icon }) => {
  return (
    <Stack sx={styles.textWithIconBase}>
      <Typography sx={styles.textWithIconText}>{text}</Typography>

      {Icon && <Icon sx={styles.textWithIconIcon} />}
    </Stack>
  );
};

TextWithIcon.propTypes = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.object.isRequired,
};

export default TextWithIcon;
