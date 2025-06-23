import { Typography, TypographyProps, useTheme } from "@mui/material";

export default function TextLink(
  props: TypographyProps & Pick<HTMLAnchorElement, "href">
) {
  const theme = useTheme();

  return (
    <Typography
      component="a"
      href={props.href}
      sx={{
        color: theme.palette.links.main,
        textDecoration: "underline",
        cursor: "pointer",
        ...props.sx,
      }}
    >
      {props.children}
    </Typography>
  );
}
