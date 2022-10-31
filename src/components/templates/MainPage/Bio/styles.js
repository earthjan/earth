const styles = {
  base: {
    width: "100%",

    /**
     * Centers the children elements
     */
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  pySetter: {
    paddingTop: { xs: "80px", md: "100px", xl: "150px" },
    paddingBottom: { xs: "20px" },
  },

  title: {
    fontSize: {
      xs: "1.5rem",
      lg: "2rem",
      xl: "2.3rem"
    },
  },

  content: {
    fontSize: {
      lg: "1.3rem",
      xl: "1.5rem"
    },
    paddingTop: { xs: "10px" },
  },
};

export default styles;
