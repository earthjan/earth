import { Stack, Box, Typography } from "@mui/material";

import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import links from "../../../../../../constants/links";

import TextLinkWithIcon from "../../../../../atoms/TextWithIcon/TextWithIcon";

const LinkList = () => {
  return (
    <Stack sx={{ alignItems: "center", justifyContent: "center", rowGap: 0.5 }}>
      <Box component="a" href={links.linkedin.url}>
        <TextLinkWithIcon text={links.linkedin.label} StartIcon={LinkedInIcon} />
      </Box>

       <Box component="a" href="mailto:earth.baquir.marzan@gmail.com">
        <TextLinkWithIcon
          text="earth.baquir.marzan@gmail.com"
          StartIcon={AlternateEmailIcon}
        />
      </Box>
    </Stack>
  );
};

export default LinkList;
