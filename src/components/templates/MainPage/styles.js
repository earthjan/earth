const styles = {
  mainPageBase: {
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
    maxWidth: "1536px",

    /**
     * To keep track the max width if it's right
     */
    border: 1,
    borderColor: "white",
  },
};

export default styles;
