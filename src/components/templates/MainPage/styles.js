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
  },

  mainTextContentParent: {
    justifyContent: {
      xs: "flex-start",
    },
  },
  mainTextContent: {
    fontSize: {
      xs: "1.3rem",
      sm: "2rem"
    },
  },
  mainTextContentSpan: {
    fontWeight: {
      xs: "bold",
      sm: "medium"
    },
    fontSize: {
      xs: "1.8rem",
      sm: "3rem"
    },
  },

  subtitle: {
    fontSize: {
      xs: "0.8rem",
    },
  },

  extraBg: {
    position: "absolute",
    height: {
        xs: "60%"
    },
    width: {
        xs: "60vw"
    },
    backgroundColor: "secondary.main",
    top: { xs: "20%" },
    left: { xs: "25%" },
    zIndex: "-1",
    borderRadius: "5px",
  }
};

export default styles;

// =================== HELPER FUNCTIONS ===================
