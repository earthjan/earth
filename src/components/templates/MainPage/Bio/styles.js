import defaultTheme from "../../../../theme/defaultTheme";

/**
 * A global padding top for subtexts.
 */
const TEXT_PADDING_TOP = "10px";

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
      xl: "2.3rem",
    },
  },

  content: {
    fontSize: {
      lg: "1.3rem",
      xl: "1.5rem",
    },
    paddingTop: { xs: "10px" },
  },

  /**
   * `ReadMore` section
   */
  textTitle: defaultTheme.palette.secondary.main,
  /**
   * Skill section
   */
  skBase: {
    width: "100%",
  },
  stack: {
    padding: getSubtitleSpacing(),
  },
  skSubtitle: {
    fontWeight: "bold",
  },
  skUnorderedList: {
    paddingTop: TEXT_PADDING_TOP,
    my: "0",
  },
  skList: {
    color: "content.main",
  },

  /**
   * Experience section
   */
  expBase: {
    width: "100%",
  },
  expList1: {
    padding: getSubtitleSpacing(),
  },
  expSubtitle: {
    fontWeight: "bold",
  },
  expSubtitleDate: {
    /**
     * No padding-top for md screens as the layout is different
     */
    paddingTop: { xs: TEXT_PADDING_TOP, md: 0 },
    fontWeight: "bold",
  },
  expUnorderedList: {
    paddingTop: TEXT_PADDING_TOP,
    my: "0",
  },
  expList: {
    color: "content.main",
  },

  /**
   * Education section
   */
  edBase: {
    width: "100%",
  },
  edList1: {
    padding: getSubtitleSpacing(),
  },
  edSubtitle: {
    fontWeight: "bold",
  },
  edSubtitleLocation: {
    fontStyle: "italic",
  },
  edAdditionalInfo: {
    paddingTop: TEXT_PADDING_TOP,
  },
  edList2: {
    padding: getSubtitleSpacing("40px"),
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
