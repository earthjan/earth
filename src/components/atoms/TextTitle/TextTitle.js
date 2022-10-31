import React from "react";

import { Typography } from "@mui/material";

import styles from "./styles";

const TextTitle = ({ children, color }) => {
  return <Typography sx={styles.title(color)}>{children}</Typography>;
};

export default TextTitle;
