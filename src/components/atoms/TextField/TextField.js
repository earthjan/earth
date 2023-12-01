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
 * @param {number} props.maxLength - Max length
 * @param {any} props.multiline - If supplied, the textfield supports multiple lines.
 * @param {number} props.rows - Number of rows
 * @param {ReactElement} props.inputAdornment - Element passed to `InputProps`
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

    // With inputAdornment
    <TextField
      maxLength={1000}
      multiline
      rows={10}
      inputAdornment={
        <InputAdornment position="start" sx={styles.inputAdornment}>
          Message
        </InputAdornment>
      }
    />    
 * )
 */
const TextField = ({
  label,
  variant,
  onChange,
  maxLength,
  multiline,
  rows,
  inputAdornment,
}) => {
  return (
    <MUITextField
      InputProps={{
        startAdornment: inputAdornment ? (
          inputAdornment
        ) : (
          <InputAdornment position="start" sx={styles.inputAdornment}>
            {label}
          </InputAdornment>
        ),
      }}
      inputProps={{
        maxLength: maxLength,
      }}
      multiline={multiline}
      rows={rows}
      variant={variant}
      sx={styles.textfield}
      onChange={onChange}
      fullWidth
      // Disabled until netlify form is set up
      // required
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
  maxLength: PropTypes.number,
  multiline: PropTypes.any,
  rows: PropTypes.number,
  inputAdornment: PropTypes.element
};

export default TextField;
