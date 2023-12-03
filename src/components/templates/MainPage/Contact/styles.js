import { globalSpacing } from "../../../../theme/defaultTheme";

const styles = {
  root: { marginTop: { xs: "50px" } },

  formBase: {
    marginTop: globalSpacing.MarginSpacing,
    width: { sm: "400px" },
  },
  inputAdornment: {
    marginBottom: "210px",
    "& .MuiTypography-root": {
      color: "content.main",
    },
  },

  messageBase: { position: "relative" },
  messageLength: {
    position: "absolute",
    width: "100%",
    bottom: 0,
    right: 5,
    textAlign: "right",
    color: "content.main",
    fontSize: "0.8rem",
  },

  actionButtonsStack: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  submit: {
    sx: { width: "80px" },
    color: "secondary",
  },
  download: {
    fontStyle: "italic",
    fontSize: { xs: "0.8rem" },
  },
};

export default styles;
