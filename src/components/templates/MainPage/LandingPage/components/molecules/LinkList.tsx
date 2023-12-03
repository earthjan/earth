import { Stack, Box, Typography } from "@mui/material";

import links from "../../../../../../constants/links";

import { HashLink } from "../../../../../atoms/atoms";
import LinkedInIcon from "../../../../../molecules/icons/LinkedInIcon";

const LinkList = () => {
  return (
    <Stack sx={{ alignItems: "center", justifyContent: "center", rowGap: 0.5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: 1,
        }}
      >
        <LinkedInIcon width="20px" height="20px" />
        <HashLink to={links.linkedin}>
          <Typography>{links.linkedin}</Typography>
        </HashLink>
      </Box>

      <Typography>earth.baquir.marzan@gmail.com</Typography>
    </Stack>
  );
};

export default LinkList;
