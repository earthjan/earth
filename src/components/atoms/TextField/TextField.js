import React from "react";

import PropTypes from "prop-types";

import { TextField as MUITextField, InputAdornment } from "@mui/material";

import styles from "./styles";

/**
 * A custom textfield
 * 
 * @param {object} props
 * @param {string | object | ReactElement} props.label - Input label
 * @param {string | object} props.variant - Textfield variant
 * @param {function} props.onChange - onChange handler
 * 
 * @example 
 * // Basic usage
 * (
 *  // With simple `label`
 *  <TextField label="Name:" />
 * 
 *  // With complex `label`
 *  <TextField
        label={
          <Typography>
            Subject
            <Typography component="span" fontSize="0.7rem">
              {" "}
              (optional)
            </Typography>
            :
          </Typography>
        }
    />
 * )
 */
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
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
  ]),
  variant: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onChange: PropTypes.func,
};

export default TextField;
