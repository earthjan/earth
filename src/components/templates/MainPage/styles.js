const styles = {
  mainPageBase: {
    backgroundColor: "primary.main",
    minWidth: "320px",
    height: {
      // xs: "100vh",
    },

    /**
     * Centers element when device width > max
     */
    display: { xl: "flex" },
    justifyContent: { xl: "center" },
  },

  maxWidthSetter: {
    maxWidth: "1536px",

    /**
     * To keep track the max width if it's right
     */
    border: 1,
    // borderColor: "white",
  },

  logoBase: {
  },
  logo: {
    height: {
      xs: "30px",
    },
    width: {
      xs: "90px",
    }
  },

  textWithIconBase: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  textWithIconText: {
    textDecoration: "underline",
    color: "links.main",
  },
  textWithIconIcon: {
    color: "links.main",
    paddingLeft: "15px",
  },
};

export default styles;
