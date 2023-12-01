/**
 * A global padding top for subtexts.
 */
const TEXT_PADDING_TOP = "10px";
/**
 * A global padding top project's base component.
 */
const PROJ_BASE_SPACING = "20px";
/**
 * A global `px` for project descriptions.
 */
const PD_SPACING = "20px";
/**
 * A global font-size for project description's contents.
 */
const PD_CONTENT_FONT_SIZE = {
  lg: "1.1rem",
  xl: "1.3rem",
};
/**
 * A global font-size for project description's tech stack content.
 */
const PD_TECH_STACK_FONT_SIZE = {
  xs: "0.9rem",
  lg: "1.1rem",
};

const styles = {
  base: {
    width: "100%",
    py: TEXT_PADDING_TOP,
  },

  title: {
    fontSize: {
      xs: "1.5rem",
      lg: "2rem",
      xl: "2.3rem",
    },
  },

  subtitle: {
    padding: getSubtitleSpacing(),
  },

  dividerBase: {
    display: { xs: "none", lg: "flex" },
    justifyContent: "center",
    my: "80px",
  },
  divider: {
    height: "1px",
    width: "550px",
  },

  /**
   * ProjectDescription section
   */
  pdBase: {
    width: "100%",
    paddingTop: {
      xs: TEXT_PADDING_TOP,
      lg: "0",
    },
  },
  pdTitle: {
    fontSize: {
      lg: "2rem",
      xl: "2.3rem",
    },
  },
  pdDescription: {
    padding: getSubtitleSpacing(),
    fontSize: PD_CONTENT_FONT_SIZE,
  },
  pdTechStackBase: {
    flexDirection: "row",
  },
  pdUl: {
    my: 0,
  },
  pdli: {
    fontSize: PD_TECH_STACK_FONT_SIZE,
  },
  pdView: {
    sx: {
      margin: getSubtitleSpacing("15px"),
    },
    color: "emphasizedText",
  },

  /**
   * ProjectThumbnail section
   */
  ptImgBase: {
    width: {
      xs: "100%",
    },
  },
  ptThumbnail: {
    height: "auto",
    width: "100%",
    border: 1,
    borderColor: "border.main",
    borderRadius: "5px",
  },

  /**
   * Project 1 section
   */
  prj1GridBase: {
    paddingTop: PROJ_BASE_SPACING,
  },
  prj1PdBase: {
    px: { xs: "10px", lg: PD_SPACING },
    // paddingLeft: { lg: PD_SPACING },
  },

  /**
   * Project 2 section
   */
  prj2GridBase: {
    paddingTop: { xs: PROJ_BASE_SPACING, lg: "0" },
    flexDirection: "row-reverse",
  },
  prj2PdBase: {
    px: { xs: "10px", lg: PD_SPACING },
    // paddingRight: { lg: PD_SPACING },
  },
};

export default styles;

/**
 * Sets the spacing of subtitles
 */
function getSubtitleSpacing(top = TEXT_PADDING_TOP) {
  return {
    xs: `${top} 0px 0px 15px`,
  };
}
