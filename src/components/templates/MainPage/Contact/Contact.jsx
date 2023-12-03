import React from "react";

import PropTypes from "prop-types";

import { Box, Stack, InputAdornment, Typography, Button } from "@mui/material";

import { TextTitle, TextGray, TextLink, TextField } from "../../../atoms/atoms";

import styles from "./styles";

const MAX_MESSAGE = 1000;

const Contact = ({ id, downloadLinks: { CV, resume }, handleSubmit }) => {
  const [messageLength, setMessageLength] = React.useState(MAX_MESSAGE);

  const handleMessage = (e) => {
    setMessageLength(() => MAX_MESSAGE - e.target.value.length);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const myForm = e.target;
  //   const formData = new FormData(myForm);

  //   fetch("/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
  //     body: encode({ "form-name": "contact",  new URLSea(formData).toString() }),
  //   })
  //     .then(() => alert("Success!"))
  //     .catch((error) => alert(error));
  // };

  return (
    <>
      <Box id={id} {...styles.root}>
        <TextTitle>Contact</TextTitle>
        <TextGray>
          Need a web developer for your project? Contact me with the form below
          and let’s work together!
        </TextGray>
        <Box {...styles.formBase}>
          <form name="contact" method="POST">
            <input type="hidden" name="form-name" value="contact" />

            <Stack spacing={1}>
              <TextField label="Name:" type="text" name="name" maxLength={50} />
              <TextField
                label="Email:"
                type="email"
                name="email"
                maxLength={50}
              />
              <TextField
                label="Subject:"
                type="text"
                name="subject"
                maxLength={50}
              />

              <Box sx={styles.messageBase}>
                <TextField
                  name="message"
                  type="text"
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
                <Typography sx={styles.messageLength}>
                  {messageLength}
                </Typography>
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
          </form>
        </Box>
      </Box>
    </>
  );
};

Contact.propTypes = {
  downloadLinks: PropTypes.exact({
    CV: PropTypes.string,
    resume: PropTypes.string,
  }),
};

export default Contact;
