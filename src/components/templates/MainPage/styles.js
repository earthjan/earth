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

  bioPadding: {
    px: {
      xs: "15px",
      md: "15vw",
      /**
       * It needs to be in pixel if the screen is > max width (xl) so that we can ignore the width screen at this point.
       */
      xl: "250px",
    },
  },

  projectsPadding: {
    px: {
      xs: "15px",
      md: "15vw",
      lg: "5vw",
      /**
       * It needs to be in pixel if the screen is > max width (xl) so that we can ignore the width screen at this point.
       */
      xl: "150px",
    },
  },

  contactPadding: {
    px: {
      xs: "15px",
      md: "15vw",
      lg: "5vw",
      /**
       * It needs to be in pixel if the screen is > max width (xl) so that we can ignore the width screen at this point.
       */
      xl: "150px",
    },
  },
};

export default styles;
