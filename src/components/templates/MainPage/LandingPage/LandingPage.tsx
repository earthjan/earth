import React from "react";

import { Box, Typography, IconButton, Stack, Button } from "@mui/material";
import SouthIcon from "@mui/icons-material/South";

import { HashLink, TextGray, GridItem } from "../../../atoms/atoms";

import mainPageSectionIds from "../../../../constants/mainPageSectionIds";
import links from "../../../../constants/links";

import LinkedInIcon from "../../../molecules/icons/LinkedInIcon";
import ReactIcon from "../../../molecules/icons/ReactIcon";
import TypeScriptIcon from "../../../molecules/icons/TypeScriptIcon";
import MuiIcon from "../../../molecules/icons/MuiIcon";
import GitHubIcon from "../../../molecules/icons/GitHubIcon";
import GitIcon from "../../../molecules/icons/GitIcon";
import ViteIcon from "../../../molecules/icons/ViteIcon";
import Html5Icon from "../../../molecules/icons/Html5Icon";
import CssIcon from "../../../molecules/icons/CssIcon";
import RTLIcon from "../../../molecules/icons/RtlIcon";
import VitestIcon from "../../../molecules/icons/VitestIcon";
import ReduxIcon from "../../../molecules/icons/ReduxIcon";

import styles from "./styles";
import defaultTheme from "../../../../theme/defaultTheme";

const _styles = {
  container: {
    display: "flex",
    justifyContent: "stretch",
  },
  text: {
    textAlign: {
      xs: "center",
      md: "end",
    },
  },
};

const LandingPage = ({ scrollToURL }: any) => {
  return (
    <Stack
      sx={{
        alignItems: "center",
        rowGap: 4,
        height: "100vh",
        justifyContent: "center",
        px: 1,
      }}
    >
      <Box sx={_styles.container}>
        <Typography
          variant="h4"
          sx={{ ..._styles.text, color: defaultTheme.palette.text.secondary }}
        >
          <Typography
            component="span"
            variant="h2"
            fontWeight="bold"
            color={defaultTheme.palette.secondary.main}
          >
            Real-world experience
          </Typography>{" "}
          for your{" "}
          <Typography
            component="span"
            variant="h3"
            fontWeight="medium"
            color={defaultTheme.palette.text.primary}
          >
            {" "}
            Web Project{" "}
          </Typography>
          needs
        </Typography>
      </Box>
      <Box sx={_styles.container}>
        <Typography
          sx={{
            width: {
              xs: "100%",
            },
            ..._styles.text,
            color: defaultTheme.palette.text.secondary,
          }}
        >
          Backed by a degree in IT and real-world front-end development
          experiences, I'm ready to bring your web project to life.
        </Typography>
      </Box>
      <Box
        sx={{
          ..._styles.container,
          justifyContent: "flex-end",
          flexDirection: {
            xs: "column",
          },

          rowGap: 2,
        }}
      >
        <Stack
          sx={{
            order: {
              xs: 2,
            },
            px: {
              xs: 5,
            },
          }}
        >
          <Typography sx={_styles.text}>Using</Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              backgroundColor: defaultTheme.palette.accent.main,

              p: 2,

              borderRadius: 5,
            }}
          >
            <ReactIcon />
            <TypeScriptIcon />
            <MuiIcon />
            <GitHubIcon />
            <GitIcon />
            <ViteIcon />
            <Html5Icon />
            <CssIcon />
            <RTLIcon />
            <VitestIcon />
            <ReduxIcon />
          </Box>
        </Stack>

        <Stack
          sx={{
            alignItems: "center",
            order: {
              xs: 1,
            },
            rowGap: 2,
          }}
        >
          <Box
            sx={{
              ..._styles.container,
              justifyContent: "center",
              alignItems: "center",
              columnGap: 1,
            }}
          >
            <Button
              variant="contained"
              color={"secondary" as any}
              sx={{
                fontWeight: "bold",
                borderRadius: 10,
              }}
            >
              Contact Me
            </Button>
            <HashLink to={`/#${mainPageSectionIds.projects}`}>
              <Button
                variant="outlined"
                color="titleText"
                sx={{ borderRadius: 10 }}
              >
                View Projects
              </Button>
            </HashLink>
          </Box>

          <Stack
            sx={{ alignItems: "center", justifyContent: "center", rowGap: 0.5 }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                columnGap: 1,
              }}
            >
              <LinkedInIcon width="20px" height="20px" />
              <HashLink to={links.linkedin}>
                <Typography>{links.linkedin}</Typography>
              </HashLink>
            </Box>

            <Typography>earth.baquir.marzan@gmail.com</Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default LandingPage;

// =============== HELPER COMPONENTS/FUNCTIONS ===============

function Span({ text }: any) {
  return (
    <Typography component="span" sx={styles.mainTextContentSpan}>
      {" "}
      {text}{" "}
    </Typography>
  );
}

// function MainContent() {
//   return (
//     <GridItem container={true}>
//       <GridItem container={true} sx={styles.mainTextContentParent}>
//         <Typography sx={styles.mainTextContent}>
//           Full-stack <Span text="Web Developer" />
//         </Typography>
//       </GridItem>
//       <GridItem container={true} sx={styles.mainTextContentParent}>
//         <Typography sx={styles.mainTextContent}>
//           with
//           <Span text="Bachelor Degree" />
//           in
//           <Span text="IT" />
//         </Typography>
//       </GridItem>
//     </GridItem>
//   );
// }
