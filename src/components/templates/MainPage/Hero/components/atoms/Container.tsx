import { Box, BoxProps } from "@mui/material";

const Container = (props: Pick<BoxProps, "sx" | "children">) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "stretch", ...props.sx }}>
      {props.children}
    </Box>
  );
};

export default Container;
