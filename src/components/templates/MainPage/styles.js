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
     * Overrides the py on >md
     */
    paddingTop: {
      md: "100px",
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
      xs: "1.3rem",
      sm: "2rem",
      md: "2.5rem",
    },
  },
  mainTextContentSpan: {
    fontWeight: {
      xs: "bold",
      sm: "medium",
    },
    fontSize: {
      xs: "1.8rem",
      sm: "3rem",
      md: "5rem",
    },
  },

  upperSubtitleBase: {
    paddingLeft: getSubtitlePaddingX()
  },
  subtitleUpper: {
    fontSize: getSubtitleFontSize(),
  },

  bottomSubtitleBase: {
    justifyContent: {
      md: "flex-end",
    },
    paddingRight: getSubtitlePaddingX()
  },

  subtitleBottom: {
    fontSize: getSubtitleFontSize(),
    width: {
        md: "30vw"
    }
  },

  extraBg: {
    position: "absolute",
    height: {
      xs: "60%",
    },
    width: {
      xs: "60vw",
    },
    backgroundColor: "secondary.main",
    top: { xs: "20%" },
    left: { xs: "25%", md: "35%" },
    zIndex: "-1",
    borderRadius: "5px",
  },
};

export default styles;

// =================== HELPER FUNCTIONS ===================

function getSubtitleFontSize() {
  return {
    xs: "0.8rem",
  };
}

function getSubtitlePaddingX() {
    return {
        md: "60px"
    }
}