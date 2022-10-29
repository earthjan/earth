const styles = {
  landingPageBase: {
    /**
     * Used by extra background to emphasize the landing page text
     */
    position: "relative",
    zIndex: "1",
    backgroundColor: "primary.main",
    minWidth: "320px",
  },

  gridBase: {
    py: {
      xs: "135px",
    },
    px: {
      xs: "15px",
    },
    /**
     * Overrides the py on >md to center the main content
     */
    paddingTop: {
      md: "15%",
    },
  },

  mainTextContentParent: {
    justifyContent: {
      xs: "flex-start",
      md: "center",
    },
  },
  mainTextContent: {
    fontSize: {
      xs: "2rem",
      md: "2.5rem",
    },
  },
  mainTextContentSpan: {
    fontWeight: {
      xs: "medium",
    },
    fontSize: {
      xs: "3rem",
      md: "5rem",
    },
  },

  upperSubtitleBase: {
    paddingLeft: {
      md: getSubtitlePaddingX(),
    },
  },
  subtitleUpper: {
    fontSize: getSubtitleFontSize(),
  },

  bottomSubtitleBase: {
    justifyContent: {
      md: "flex-end",
    },
    paddingTop: {
      md: "10px",
    },
    paddingRight: {
      md: getSubtitlePaddingX(),
    },
  },

  subtitleBottom: {
    fontSize: getSubtitleFontSize(),
    width: {
      md: "30vw",
    },
  },

  scrollDownBase: {
    justifyContent: "center",
    paddingTop: {
      xs: "25vh",
      md: "15vh",
    },
  },
  scrollDownStack: {
    flexDirection: "column",
  },
  scrollDownIconBase: {
    justifyContent: "center",
  },
  scrollDownIcon: {
    position: "absolute",
    fontSize: {
      xs: "0.8rem",
    },
    color: "titleText.main",
    animation: "move 1s linear infinite alternate",
    "@keyframes move": {
      "0%": {
        top: "5px",
      },
      "100%": {
        top: "10px",
      },
    },
  },
  scrollDownLabel: {
    fontSize: {
      xs: "0.5rem",
    },
    color: "content.main",
    marginTop: "15px"
  },

  extraBg: {
    position: "absolute",
    height: {
      xs: "60vh",
      sm: "30vh",
      md: "60vh"
    },
    width: {
      xs: "60vw",
    },
    backgroundColor: "secondary.main",
    top: { xs: "10vh" },
    left: { xs: "25vw", md: "35%vw" },
    zIndex: "-1",
    borderRadius: "5px",
  },
};

export default styles;

// =================== HELPER FUNCTIONS ===================

function getSubtitleFontSize() {
  return {
    sm: "0.8rem",
  };
}

function getSubtitlePaddingX() {
  return {
    md: "60px",
  };
}
