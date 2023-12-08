import React from "react";
import PropTypes from "prop-types";

import { Stack, Typography } from "@mui/material";

import styles from "./styles";

const TextWithIcon = ({
  text,
  Icon,
  StartIcon,
}: {
  text: string;
  Icon?: React.FC<{ sx: any }>;
  StartIcon?: React.FC<{ sx: any }>;
}) => {
  return (
    <Stack sx={styles.textWithIconBase}>
      {StartIcon && <StartIcon sx={styles.textWithIconIcon} />}

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
