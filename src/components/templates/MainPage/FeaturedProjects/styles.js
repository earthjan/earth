/**
 * A global padding top for subtexts.
 */
const TEXT_PADDING_TOP = "10px";

const styles = {
  base: { 
    width: "100%", 
    py: TEXT_PADDING_TOP 
  },

  title: {
    fontSize: {
      xs: "1.5rem",
      lg: "2rem",
      xl: "2.3rem",
    },
  },

  subtitle: {
    paddingTop: TEXT_PADDING_TOP,
  },

  divider: {
    borderTop: 1,
    borderStyle: "dotted",
    my: {
      xs: "30px",
    },
  },

  /**
   * ProjectDescription section
   */
  pdBase: {
    width: "100%",
    paddingTop: TEXT_PADDING_TOP,
  },
  pdDescription: {
    padding: getSubtitleSpacing(),
  },
  pdUl: {
    my: 0,
  },
  pdView: {
    sx: {
      margin: getSubtitleSpacing(),
    },
    color: "emphasizedText",
  },

  /**
   * ProjectThumbnail section
   */
  ptImgBase: {
    height: {
      xs: "150px",
      sm: "250px"
    },
    width: {
      xs: "100%",
    },
    overflow: "hidden",
    border: 1,
    borderRadius: "5px",
  },

  projectGridBase: {
    paddingTop: "20px",
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
