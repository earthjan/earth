import React from "react";

import { TextField as MUITextField, InputAdornment } from "@mui/material";

import styles from "./styles";

const TextField = ({ label, variant, onChange }) => {
  return (
    <MUITextField
      InputProps={{
        startAdornment: (
          <InputAdornment position="start" sx={styles.inputAdornment}>
            {label}
          </InputAdornment>
        ),
      }}
      variant={variant}
      sx={styles.textfield}
      onChange={onChange}
    />
  );
};

export default TextField;
