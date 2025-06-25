import {
  Box,
  Button,
  CardActions,
  Chip,
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
import CyberLife from "../../../../assets/jpgs/cyberLife.jpg";

import { SPACING } from "../../../../constants/styles";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import mainPageSectionIds from "../../../../constants/mainPageSectionIds";
import ShowMoreText from "react-show-more-text";
import { PropsWithChildren } from "react";

import "../../../../App.css";

export default function Projects() {
  return (
    <Stack id={mainPageSectionIds.projects}>
      <FeaturedProjects />
    </Stack>
  );
}

function FeaturedProjects() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("lg"));

  return (
    <Stack>
      <Typography variant="h2">Featured Projects</Typography>
      <Stack mt={theme.spacing(SPACING)} gap={theme.spacing(SPACING * 2)}>
        <Stack>
          {isSmallScreen ? (
            <BayanEdAdminPanelProjectSmallScreen />
          ) : (
            <BayanEdAdminPanelProjectLargeScreen />
          )}
        </Stack>

        <Stack>
          {isSmallScreen ? (
            <CyberLifeProjectSmallScreen />
          ) : (
            <CyberLifeProjectLargeScreen />
          )}
        </Stack>
      </Stack>
    </Stack>
  );
}

function BayanEdAdminPanelProjectSmallScreen() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

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
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mb: theme.spacing(SPACING),
          }}
        >
          <Typography variant="h3">BayanEd Admin Panel</Typography>
          <Chip
            color="secondary"
            size="small"
            label="Built & Maintained by Me"
          />
        </Box>
        <ShowMoreText
          className="smt-truncated-text"
          more={
            <ToggleTruncatedTextButton>Read More</ToggleTruncatedTextButton>
          }
          less={<ToggleTruncatedTextButton>See Less</ToggleTruncatedTextButton>}
          lines={3}
          width={isXs ? 300 : 0}
          anchorClass=""
          expanded={false}
        >
          <Typography>
            Built BayanEd Admin Panel a complex web app in 8 months with 5 large
            features, 5,868 lines of code, and 1,944 tests that allows a
            non-profit org <BffLink /> publish free and paid video courses,
            upload short videos to promote courses, create vouchers to give
            subscriptions and paid course access, and manage users and 7 admins.
          </Typography>
        </ShowMoreText>

        <TechStack
          stack={[
            "React",
            "MUI",
            "TypeScript",
            "Vitest",
            "React Testing Library",
            "Figma",
            "FigJam",
          ]}
        />
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
          Try Demo
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
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

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
        <CardContent
          sx={{
            overflow: "auto",
            maxHeight: "250px",
          }}
        >
          <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            mb: theme.spacing(SPACING),
          }}
        >
          <Typography variant="h3">BayanEd Admin Panel</Typography>
          <Chip
            color="secondary"
            size="small"
            label="Built & Maintained by Me"
          />
        </Box>
          <ShowMoreText
            className="smt-truncated-text"
            more={
              <ToggleTruncatedTextButton>Read More</ToggleTruncatedTextButton>
            }
            less={
              <ToggleTruncatedTextButton>See Less</ToggleTruncatedTextButton>
            }
            lines={3}
            width={isXs ? 300 : 0}
            anchorClass=""
            expanded={false}
          >
            <Typography>
              Built BayanEd Admin Panel a complex web app in 8 months with 5
              large features, 5,868 lines of code, and 1,944 tests that allows a
              non-profit org <BffLink /> publish free and paid video courses,
              upload short videos to promote courses, create vouchers to give
              subscriptions and paid course access, and manage users and 7
              admins.
            </Typography>
          </ShowMoreText>

          <TechStack
            stack={[
              "React",
              "MUI",
              "TypeScript",
              "Vitest",
              "React Testing Library",
              "Figma",
              "FigJam",
            ]}
          />
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
            Try Demo
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

function CyberLifeProjectSmallScreen() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Card>
      <CardMedia>
        <Box
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
            src={CyberLife}
            alt={"Mockups of CyberLife"}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </Box>
      </CardMedia>

      <CardContent>
        <Typography variant="h3">CyberLife</Typography>
        <ShowMoreText
          className="smt-truncated-text"
          more={
            <ToggleTruncatedTextButton>Read More</ToggleTruncatedTextButton>
          }
          less={<ToggleTruncatedTextButton>See Less</ToggleTruncatedTextButton>}
          lines={3}
          width={isXs ? 300 : 0}
          anchorClass=""
          expanded={false}
        >
          <Typography>
            Built a prototype of CyberLife, a link-in-bio solution web app, in 2
            weeks with 3 medium features for the thesis of 5 BS business
            administration students of{" "}
            <TextLink href="https://dclc.edu.ph/">
              Dr. Carlos S. Lanting College
            </TextLink>{" "}
            in QuezonCity. The app allows users to have their own public page,
            manage this page, and has simple email/password authentication.
          </Typography>
        </ShowMoreText>

        <TechStack stack={["NextJS", "React", "MUI", "TypeScript"]} />
      </CardContent>

      <CardActions>
        <Button
          variant="contained"
          fullWidth
          startIcon={<LaunchOutlinedIcon />}
          onClick={(e) => {
            e.preventDefault();
            window.open("https://cyberlife-web.vercel.ap", "_blank");
          }}
        >
          Try App
        </Button>
      </CardActions>
    </Card>
  );
}

function CyberLifeProjectLargeScreen() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Card sx={{ display: "flex" }}>
      <Stack
        sx={{
          flex: 1,
          padding: theme.spacing(SPACING),
        }}
      >
        <CardContent
          sx={{
            overflow: "auto",
            maxHeight: "250px",
          }}
        >
          <Typography variant="h3">CyberLife</Typography>

          <ShowMoreText
            className="smt-truncated-text"
            more={
              <ToggleTruncatedTextButton>Read More</ToggleTruncatedTextButton>
            }
            less={
              <ToggleTruncatedTextButton>See Less</ToggleTruncatedTextButton>
            }
            lines={3}
            width={isXs ? 300 : 0}
            anchorClass=""
            expanded={false}
          >
            <Typography>
              Built a prototype of CyberLife, a link-in-bio solution web app, in
              2 weeks with 3 medium features for the thesis of 5 BS business
              administration students of{" "}
              <TextLink href="https://dclc.edu.ph/">
                Dr. Carlos S. Lanting College
              </TextLink>{" "}
              in QuezonCity. The app allows users to have their own public page,
              manage this page, and has simple email/password authentication.
            </Typography>
          </ShowMoreText>

          <TechStack stack={["NextJS", "React", "MUI", "TypeScript"]} />
        </CardContent>

        <CardActions>
          <Button
            variant="contained"
            fullWidth
            startIcon={<LaunchOutlinedIcon />}
            onClick={(e) => {
              e.preventDefault();
              window.open("https://cyberlife-web.vercel.ap", "_blank");
            }}
          >
            Try App
          </Button>
        </CardActions>
      </Stack>

      <CardMedia sx={{ flex: "2" }}>
        <Box
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
            src={CyberLife}
            alt={"Mockups of CyberLife"}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
        </Box>
      </CardMedia>
    </Card>
  );
}

function ToggleTruncatedTextButton(props: PropsWithChildren) {
  return (
    <Button size="small" sx={{ textTransform: "none" }}>
      {props.children}
    </Button>
  );
}

function TechStack(props: { stack: string[] }) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));
  const paragraphSpacing = useParagraphSpacing();

  return (
    <Box
      sx={{
        display: "flex",
        gap: theme.spacing(SPACING),
        flexDirection: {
          xs: "column",
          sm: "row",
        },
        mt: paragraphSpacing,
      }}
    >
      {!isXs && <Bold>Technologies:</Bold>}
      <Box
        sx={{
          display: "flex",
          gap: theme.spacing(),
          flexWrap: "wrap",
        }}
      >
        {props.stack.map((label) => (
          <Chip key={label} label={label} size="small" />
        ))}
      </Box>
    </Box>
  );
}

function Bold(props: PropsWithChildren) {
  const theme = useTheme();
  return (
    <Typography component="span" fontWeight={theme.typography.fontWeightBold}>
      {props.children}
    </Typography>
  );
}

function useParagraphSpacing() {
  const theme = useTheme();
  const paragraphSpacing: number =
    parseInt(theme.typography.fontSize.toFixed()) *
    parseInt(theme.typography.body1.lineHeight?.toString() ?? "1.5") *
    1.5;

  return theme.typography.pxToRem(paragraphSpacing);
}
