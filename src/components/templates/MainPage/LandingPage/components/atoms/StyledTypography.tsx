import { Typography, TypographyProps } from "@mui/material";

const StyledTypography = (props: TypographyProps) => {
  return (
    <Typography
      {...props}
      sx={{
        textAlign: {
          xs: "center",
          md: "end",
        },
        fontSize: {
          sm: "1.2rem",
        },
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
};

export default StyledTypography;
