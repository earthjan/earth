const styles = {
  landingPageBase: {
    backgroundColor: "primary.main",
    minWidth: "320px",
    height: {
      xs: "100vh",
    },

    /**
     * Centers element when device width > max
     */
    display: { xl: "flex" },
    justifyContent: { xl: "center" },
  },
  maxWidthSetter: {
    /**
     * Used by extra background to emphasize the landing page text
     */
    position: "relative",
    zIndex: "1",
    maxWidth: "1536px",

    /**
     * To keep track the max width if it's right
     */
    border: 1,
    borderColor: "white",
  },

  gridBase: {
    px: {
      xs: "15px",
    },
    paddingTop: {
      xs: "30vh",
      sm: "40vh",
      md: "30vh",
      lg: "20vh",
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
      md: "2rem",
      lg: "2.5rem",
      xl: "30px",
    },
  },
  mainTextContentSpan: {
    fontWeight: {
      xs: "medium",
    },
    fontSize: {
      xs: "2.5rem",
      md: "4rem",
      lg: "6rem",
      xl: "8rem",
    },
  },

  upperSubtitleBase: {
    paddingLeft: getSubtitlePaddingX(),
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
    paddingRight: getSubtitlePaddingX(),
  },

  subtitleBottom: {
    fontSize: getSubtitleFontSize(),
    width: {
      md: "30vw",
      xl: "400px",
    },
  },

  scrollDownBase: {
    position: "absolute",
    top: "90vh",
    left: {
      xs: "40vw",
      sm: "45vw",
      /**
       * Instead of vw, it depends on the set max width.
       */
      xl: "50%",
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
    marginTop: "15px",
  },

  extraBg: {
    /**
     * Hides it on <md screens as it's harder than I thought to keep it on the same spot.
     */
    display: {
      xs: "none",
      md: "block",
    },
    position: "absolute",
    height: {
      md: "300px",
    },
    width: {
      md: "60%",
      xl: "75%"
    },
    backgroundColor: "secondary.main",
    top: { 
      md: "30vh", 
      lg: "20vh", 
      xl: "25vh" 
    },
    left: { 
      xs: "25vw", 
      md: "35vw", 
      xl: "25%" 
    },
    zIndex: "-1",
    borderRadius: "5px",
  },
};

export default styles;

// =================== HELPER FUNCTIONS ===================

function getSubtitleFontSize() {
  return {
    sm: "0.8rem",
    lg: "1rem",
  };
}

function getSubtitlePaddingX() {
  return {
    md: "60px",
    lg: "70px",
  };
}
