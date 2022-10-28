const styles = {
  landingPageBase: {
    /**
     * Used by extra background to emphasize the landing page text
     */
    position: "relative",
    backgroundColor: "primary.main",
    minWidth: "320px",
    zIndex: "1",
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
    },
  },
  mainTextContentSpan: {
    fontWeight: {
      xs: "bold",
    },
    fontSize: {
      xs: "1.8rem",
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
