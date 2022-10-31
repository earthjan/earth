/**
 * A global padding top for subtexts.
 */
const TEXT_PADDING_TOP = "10px";

const styles = {
  accordion: {
    backgroundColor: "primary.main",
    paddingTop: { xs: "50px" },
  },

  accordionSummary: {
    "& .MuiAccordionSummary-content": {
      display: "none",
    },
  },

  expandIcon: {
    color: "content.main",
  },

  textTitle: "emphasizedText.main",

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
    paddingTop: TEXT_PADDING_TOP,
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
    fontStyle: "italic"
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
