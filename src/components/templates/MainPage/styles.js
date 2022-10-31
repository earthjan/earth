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
    borderColor: "white",
  },

  logo: {
    height: {
      xs: "30px",
      md: "35px",
      xl: "45px",
    },
    width: {
      xs: "90px",
      md: "95px",
      xl: "105px",
    },
  },

  bioPadding: { px: "15px" },
};

export default styles;
