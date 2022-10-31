import React from "react";

import { Typography } from "@mui/material";

import styles from "./styles";

const TextTitle = ({ children, color, fontSize }) => {
  return <Typography sx={styles.title(color, fontSize)}>{children}</Typography>;
};

export default TextTitle;
