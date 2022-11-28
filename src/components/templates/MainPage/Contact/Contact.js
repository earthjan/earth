import React from "react";

import PropTypes from "prop-types";

import { Box } from "@mui/material";

import { TextTitle, TextGray } from "../../../atoms/atoms";

import styles from "./styles";

// const MAX_MESSAGE = 1000;

const Contact = ({ id, downloadLinks: { CV, resume }, handleSubmit }) => {
  // const [messageLength, setMessageLength] = React.useState(MAX_MESSAGE);

  // const handleMessage = (e) => {
  //   setMessageLength(() => MAX_MESSAGE - e.target.value.length);
  // };

  return (
    <>
      <form name="contact" netlify netlify-honeypot="bot-field" hidden>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <input type="text" name="subject" />
        <textarea name="message"></textarea>
      </form>

      <Box id={id} {...styles.root}>
        <TextTitle>Contact</TextTitle>
        <TextGray>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </TextGray>
        <Box {...styles.formBase}>
          <form name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
          ,
          {/* <form
            name="contact"
            netlify={true}
            data-netlify="true"
            method="POST"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Stack spacing={1}>
              <TextField label="Name:" type="texts" name="name" maxLength={50} />
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
          </form> */}
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
