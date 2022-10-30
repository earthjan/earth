const styles = {
  appBar: {
    sx: {
      position: "sticky",
      top: "-100px",
      transition: "top 0.3s",
      boxShadow: 0,
    },
    /**
     * Setting the MUI AppBar in sx is more complicated
     */
    color: "secondary",
  },

  container: { 
    mx: { xs: "20px", xl: "60px" }
  },

  toolbar: { justifyContent: "space-between" },

  menuIcon: {
    display: { md: "none" },
    color: "titleText.main",
  },
  menu: {
    "& .MuiPopover-paper": {
      backgroundColor: "secondary.main",
      border: 1,
      borderColor: "textTitle.main",
      borderRadius: "5px",
    },
  },
};

export default styles;
