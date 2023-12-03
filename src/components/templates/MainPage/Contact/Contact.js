import React from "react";

import PropTypes from "prop-types";

import {
  Box,
  Typography,
  InputAdornment,
  Button,
  Stack,
  Snackbar,
  Slide,
} from "@mui/material";

import { TextTitle, TextGray } from "../../../atoms/atoms";

import styles from "./styles";

// const MAX_MESSAGE = 1000;

const Contact = ({
  id,
  subtitle,
  downloadLinks: { CV, resume },
  handleSubmit,
}) => {
  const [messageLength, setMessageLength] = React.useState(MAX_MESSAGE);
  const [openNote, setOpenNote] = React.useState(false);

  // const handleMessage = (e) => {
  //   setMessageLength(() => MAX_MESSAGE - e.target.value.length);
  // };

  return (
    <>
      <Box id={id} {...styles.root}>
        <TextTitle>
          Contact 🚧{" "}
          <TextGray
            component="span"
            sx={{ fontSize: { xs: "0.8rem" }, fontStyle: "italic" }}
          >
            (Soon! Or, just email me{" "}
            <a
              href={"mailto:earthjan22@gmail.com?subject=Hi Earth!"}
              target="_blank"
              rel="noreferrer"
            >
              <TextLink fontSize={{ xs: "0.8rem" }} component="span">
                here!
              </TextLink>
            </a>
            )
          </TextGray>
        </TextTitle>
        <TextGray>{subtitle}</TextGray>
        <Box {...styles.formBase}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={1}>
              <TextField label="Name:" />
              <TextField label="Email:" />
              <TextField label={<Typography>Subject:</Typography>} />

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
                  onClick={() => setOpenNote(true)}
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

      <Snackbar
        open={openNote}
        message={
          <Typography fontSize={{ xs: "0.8rem", md: "1rem" }}>
            🚧 Soon! Or, just email me{" "}
            <a
              href={"mailto:earthjan22@gmail.com?subject=Hi Earth!"}
              target="_blank"
              rel="noreferrer"
            >
              <TextLink component="span">here!</TextLink>
            </a>
          </Typography>
        }
        onClose={(event, reason) => {
          if (reason === "clickaway" || reason === "escapeKeyDown") {
            return;
          }
          setOpenNote(false);
        }}
        autoHideDuration={4000}
        TransitionComponent={SlideTransition}
      />
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

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}
