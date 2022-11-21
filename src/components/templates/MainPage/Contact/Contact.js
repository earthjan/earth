import React from "react";

import PropTypes from "prop-types";

import { Box, Typography, InputAdornment, Button, Stack } from "@mui/material";

import { TextTitle, TextGray, TextField, TextLink } from "../../../atoms/atoms";

import styles from "./styles";

const MAX_MESSAGE = 1000;

const Contact = ({ downloadLinks: { CV, resume }, handleSubmit }) => {
  const [messageLength, setMessageLength] = React.useState(MAX_MESSAGE);

  const handleMessage = (e) => {
    setMessageLength(() => MAX_MESSAGE - e.target.value.length);
  };

  return (
    <Box {...styles.root}>
      <TextTitle>Contact</TextTitle>
      <TextGray>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </TextGray>
      <Box component="form" onSubmit={handleSubmit} {...styles.form}>
        <Stack spacing={1}>
          <TextField label="Name:"/>
          <TextField label="Email:"/>
          <TextField label={<Typography>Subject:</Typography>}/>

          <Box sx={styles.messageBase}>
            <TextField
              maxLength={MAX_MESSAGE}
              multiline
              rows={10}
              inputAdornment={
                <InputAdornment position="start" sx={styles.inputAdornment}>
                  Message:
                </InputAdornment>
              }
              onChange={handleMessage}
            />
            <Typography sx={styles.messageLength}>{messageLength}</Typography>
          </Box>

          <Stack {...styles.actionButtonsStack}>
            <Button
              type="submit"
              variant="contained"
              color={styles.submit.color}
              sx={styles.submit.sx}
            >
              Send
            </Button>

            <Stack>
              <a href={CV}>
                <TextLink {...styles.download}>Download my CV</TextLink>
              </a>
              <a href={resume}>
                <TextLink {...styles.download}>Download my Resume</TextLink>
              </a>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

Contact.propTypes = {
  downloadLinks: PropTypes.exact({
    CV: PropTypes.string,
    resume: PropTypes.string,
  }),
};

export default Contact;
