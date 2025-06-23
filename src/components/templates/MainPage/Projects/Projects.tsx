import {
  Box,
  Button,
  CardActions,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import TextLink from "../../../atoms/TextLink/TextLink";
import Carousel from "react-material-ui-carousel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import ContentListPublishedContents from "../../../../assets/webps/content_list_published_contents.webp";
import EduclipTrendingList from "../../../../assets/webps/educlip_trending_list.webp";
import AddingAdmin from "../../../../assets/webps/adding_admin.webp";

import { SPACING } from "../../../../constants/styles";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";

export default function Projects() {
  return (
    <Stack>
      <FeaturedProjects />
    </Stack>
  );
}

function FeaturedProjects() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Stack>
      <Typography variant="h2">Featured Project</Typography>
      <Stack mt={theme.spacing(SPACING)}>
        <Stack>
          {isSmallScreen ? (
            <BayanEdAdminPanelProjectSmallScreen />
          ) : (
            <BayanEdAdminPanelProjectLargeScreen />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

function BayanEdAdminPanelProjectSmallScreen() {
  const theme = useTheme();

  const thumbnailUrls = [
    {
      url: ContentListPublishedContents,
      alt: "List of published contents",
    },
    {
      url: EduclipTrendingList,
      alt: "List of trending Educlips",
    },
    {
      url: AddingAdmin,
      alt: "A modal to add an admin",
    },
  ];

  return (
    <Card>
      <CardMedia
        sx={{
          position: "relative",
        }}
      >
        <Carousel
          navButtonsAlwaysVisible
          indicatorContainerProps={{
            style: {
              marginTop: theme.spacing(SPACING * 2),
            },
          }}
        >
          {thumbnailUrls.map(({ url, alt }, idx) => (
            <Box
              key={idx}
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={url}
                alt={alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Carousel>

        <Typography
          variant="caption"
          color={theme.palette.text.secondary}
          sx={{
            position: "absolute",
            bottom: 15,
            textAlign: "center",
            width: "100%",
          }}
        >
          Or swipe to navigate
        </Typography>
      </CardMedia>

      <CardContent>
        <Typography variant="h3">BayanEd Admin Panel</Typography>
        <Typography>
          An admin panel used by <BffLink /> to publish video courses, create
          short clips to promote courses, create vouchers, and manage admins and
          users.
        </Typography>
        <Typography variant="body2" mt={theme.spacing(SPACING)}>
          Technologies: React, MUI, TypeScript, Vitest, React Testing Library,
          FigJam
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          fullWidth
          startIcon={<LaunchOutlinedIcon />}
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://main-demo.dxqyug1ga1ph6.amplifyapp.com/admin/contents",
              "_blank"
            );
          }}
        >
          View Demo
        </Button>
      </CardActions>
    </Card>
  );
}

function BffLink() {
  return (
    <TextLink href="https://www.bayanfamilyoffoundations.org/">
      Bayan Family of Foundations
    </TextLink>
  );
}

function BayanEdAdminPanelProjectLargeScreen() {
  const theme = useTheme();

  const thumbnailUrls = [
    {
      url: ContentListPublishedContents,
      alt: "List of published contents",
    },
    {
      url: EduclipTrendingList,
      alt: "List of trending Educlips",
    },
    {
      url: AddingAdmin,
      alt: "A modal to add an admin",
    },
  ];

  return (
    <Card
      sx={{
        display: "flex",
      }}
    >
      <Stack
        sx={{
          flex: "1",
          padding: theme.spacing(SPACING),
        }}
      >
        <CardContent>
          <Typography variant="h3">BayanEd Admin Panel</Typography>
          <Typography>
            An admin panel used by <BffLink /> to publish video courses, create
            short clips to promote courses, create vouchers, and manage admins
            and users.
          </Typography>
          <Typography variant="body2" mt={theme.spacing(SPACING)}>
            Technologies: React, MUI, TypeScript, Vitest, React Testing Library,
            FigJam
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            fullWidth
            startIcon={<LaunchOutlinedIcon />}
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://main-demo.dxqyug1ga1ph6.amplifyapp.com/admin/contents",
                "_blank"
              );
            }}
          >
            View Demo
          </Button>
        </CardActions>
      </Stack>

      <CardMedia
        sx={{
          flex: "2",
        }}
      >
        <Carousel navButtonsAlwaysVisible indicators={false}>
          {thumbnailUrls.map(({ url, alt }, idx) => (
            <Box
              key={idx}
              sx={{
                position: "relative",
                width: "100%",
                aspectRatio: "16 / 9",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component="img"
                src={url}
                alt={alt}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  display: "block",
                }}
              />
            </Box>
          ))}
        </Carousel>
      </CardMedia>
    </Card>
  );
}
