import React from "react";

import PropTypes from "prop-types";

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

TextField.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  variant: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
};

export default TextField;
