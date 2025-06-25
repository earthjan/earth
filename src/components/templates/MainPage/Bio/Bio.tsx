import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import styles from "./styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { OFFSET, SPACING } from "../../../../constants/styles";
import { PropsWithChildren } from "react";
import TextLink from "../../../atoms/TextLink/TextLink";
import { useMediaQuery } from "@mui/system";
import ShowMoreText from "react-show-more-text";
import mainPageSectionIds from "../../../../constants/mainPageSectionIds";
import "../../../../App.css"

const Bio = ({ id, overview }: any) => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const paragraphSpacing: number =
    parseInt(theme.typography.fontSize.toFixed()) *
    parseInt(theme.typography.body1.lineHeight?.toString() ?? "1.5") *
    1.5;
  return (
    <Box
      id={id}
      sx={{
        ...styles.base,
        gap: theme.spacing(SPACING),
      }}
    >
      <Stack
        sx={{
          px: {
            sm: "5vw",
            lg: "20vw",
            /**
             * It needs to be in pixel if the screen is > max width (xl) so that we can ignore the width screen at this point.
             */
            xl: "300px",
          },
        }}
      >
        <Typography variant="h2">{overview.title}</Typography>

        {overview.paragraphs.map((p: string, index: number) => (
          <Typography
            key={index}
            sx={{
              pt: index === 0 ? 0 : theme.typography.pxToRem(paragraphSpacing),
            }}
          >
            {p}
          </Typography>
        ))}
      </Stack>

      <Divider sx={{ my: theme.spacing(SPACING * 2) }} />

      <Stack gap={theme.spacing(SPACING * 4)}>
        <Stack id={mainPageSectionIds.workExperience}>
          <Typography variant="h2">Work Experiences</Typography>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box
                sx={{
                  display: "flex",
                  gap: {
                    xs: theme.spacing(SPACING),
                    sm: theme.spacing(),
                  },
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  justifyContent: {
                    sm: "space-between",
                  },
                  alignItems: {
                    sm: "center",
                  },
                  width: "100%",
                }}
              >
                <Typography>
                  <Typography
                    component="span"
                    color={theme.palette.secondary.main}
                    fontWeight={theme.typography.fontWeightBold}
                  >
                    Front End Software Engineer
                  </Typography>
                  , Digitalinnov
                </Typography>

                <Typography
                  component={"span"}
                  fontSize={{
                    xs: theme.typography.caption.fontSize,
                    sm: theme.typography.body2.fontSize,
                  }}
                >
                  June 2022 - Present
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                width: {
                  lg: "60%",
                },
              }}
            >
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: theme.spacing(SPACING * 3),
                }}
              >
                <Stack gap={theme.typography.pxToRem(paragraphSpacing)}>
                  <Box component="li">
                    <ShowMoreText
                      className="smt-truncated-text"
                      more={
                        <ToggleTruncatedTextButton>
                          Read More
                        </ToggleTruncatedTextButton>
                      }
                      less={
                        <ToggleTruncatedTextButton>
                          See Less
                        </ToggleTruncatedTextButton>
                      }
                      lines={3}
                      width={isXs ? 300 : 0}
                      anchorClass=""
                      expanded={false}
                    >
                      <Typography>
                        Built a prototype of <HyperLinkedBayanEdAdminPanel /> in
                        under 1 month with 2 complex features, course and user
                        management, that helped land the client, a non-profit
                        org <HyperLinkedBff />, for 1 of 4 foundations,{" "}
                        <HyperLinkedBayanAcademy />, which currently involves
                        51,897 people trained, 17 years in the field, 3,000,00~
                        graduates, and 167 trusted partners.
                      </Typography>
                    </ShowMoreText>
                  </Box>

                  {
                    <TechStack
                      stack={[
                        "React Admin",
                        "React",
                        "TypeScript",
                        "MUI",
                        "TanStack Query",
                      ]}
                    />
                  }
                </Stack>

                <Stack gap={theme.spacing(SPACING)}>
                  <Box component="li">
                    <ShowMoreText
                      className="smt-truncated-text"
                      more={
                        <ToggleTruncatedTextButton>
                          Read More
                        </ToggleTruncatedTextButton>
                      }
                      less={
                        <ToggleTruncatedTextButton>
                          See Less
                        </ToggleTruncatedTextButton>
                      }
                      lines={3}
                      width={isXs ? 300 : 0}
                      anchorClass=""
                      expanded={false}
                    >
                      <Typography>
                        Designed the UI/UX of 31+ pages for the 5 large features
                        of <HyperLinkedBayanEdAdminPanel /> web app that allows
                        the org <HyperLinkedBff /> to use the app seamlessly,
                        like publishing video courses and adding 7 admins in the
                        early beta version by collaborating with the org’s
                        cross-functional team of 3.
                      </Typography>
                    </ShowMoreText>
                  </Box>

                  {<TechStack stack={["Figma", "FigJam", "MUI"]} />}
                </Stack>

                <Stack gap={theme.typography.pxToRem(paragraphSpacing)}>
                  <Box component="li">
                    <ShowMoreText
                      className="smt-truncated-text"
                      more={
                        <ToggleTruncatedTextButton>
                          Read More
                        </ToggleTruncatedTextButton>
                      }
                      less={
                        <ToggleTruncatedTextButton>
                          See Less
                        </ToggleTruncatedTextButton>
                      }
                      lines={3}
                      width={isXs ? 300 : 0}
                      anchorClass=""
                      expanded={false}
                    >
                      <Typography>
                        Collaborated with the <HyperLinkedBff /> org’s
                        cross-functional team of 3 to build the{" "}
                        <HyperLinkedBayanEdAdminPanel /> web app, resulting in
                        rolling out the MVPs in 8 months and migrating their
                        video courses
                      </Typography>
                    </ShowMoreText>
                  </Box>

                  {
                    <TechStack
                      stack={[
                        "React Admin",
                        "React",
                        "TypeScript",
                        "MUI",
                        "Vitest",
                        "Figma",
                        "FigJam",
                      ]}
                    />
                  }
                </Stack>

                <Stack gap={theme.typography.pxToRem(paragraphSpacing)}>
                  <Box component="li">
                    <ShowMoreText
                      className="smt-truncated-text"
                      more={
                        <ToggleTruncatedTextButton>
                          Read More
                        </ToggleTruncatedTextButton>
                      }
                      less={
                        <ToggleTruncatedTextButton>
                          See Less
                        </ToggleTruncatedTextButton>
                      }
                      lines={3}
                      width={isXs ? 300 : 0}
                      anchorClass=""
                      expanded={false}
                    >
                      <Typography>
                        Built <HyperLinkedBayanEdAdminPanel /> a complex web app
                        in 8 months with 5 large features, 5,868 lines of code,
                        and 1,944 tests that allows a non-profit org{" "}
                        <HyperLinkedBff /> publish free and paid video courses,
                        upload short videos to promote courses, create vouchers
                        to give subscriptions and paid course access, and manage
                        users and 7 admins.
                      </Typography>
                    </ShowMoreText>
                  </Box>

                  {
                    <TechStack
                      stack={[
                        "React Admin",
                        "React",
                        "TypeScript",
                        "MUI",
                        "Vitest",
                        "React Testing Library",
                        "TanStack Query",
                        "Figma",
                        "FigJam",
                      ]}
                    />
                  }
                </Stack>

                <Stack gap={theme.typography.pxToRem(paragraphSpacing)}>
                  <Box component="li">
                    <ShowMoreText
                      className="smt-truncated-text"
                      more={
                        <ToggleTruncatedTextButton>
                          Read More
                        </ToggleTruncatedTextButton>
                      }
                      less={
                        <ToggleTruncatedTextButton>
                          See Less
                        </ToggleTruncatedTextButton>
                      }
                      lines={3}
                      width={isXs ? 300 : 0}
                      anchorClass=""
                      expanded={false}
                    >
                      <Typography>
                        Built a prototype of{" "}
                        <TextLink href="https://cyberlife-web.vercel.app/">
                          CyberLife
                        </TextLink>{" "}
                        , a link-in-bio solution web app, in 2 weeks with 3
                        medium features for the thesis of 5 BS business
                        administration students of{" "}
                        <TextLink href="https://dclc.edu.ph/">
                          Dr. Carlos S. Lanting College
                        </TextLink>{" "}
                        in Quezon City. The app allows users to have their own
                        public page, manage this page, and has simple
                        email/password authentication.
                      </Typography>
                    </ShowMoreText>
                  </Box>

                  {
                    <TechStack
                      stack={["NextJS", "React", "TypeScript", "MUI"]}
                    />
                  }
                </Stack>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Stack>

        <Stack id={mainPageSectionIds.skills}>
          <Typography variant="h2">Skills</Typography>

          <Box
            sx={{
              mt: theme.spacing(OFFSET),
              ml: theme.spacing(SPACING),
              display: "flex",
              gap: theme.spacing(),
              flexWrap: "wrap",
            }}
          >
            {[
              "TypeScript",
              "React",
              "React Admin",
              "NextJS",
              "MUI",
              "Vitest",
              "React Testing Library",
              "TanStack Query",
            ].map((label) => (
              <Chip key={label} label={label} size="small" />
            ))}
          </Box>
        </Stack>

        <Stack id={mainPageSectionIds.education}>
          <Typography variant="h2">Educations</Typography>

          <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Box
                sx={{
                  display: "flex",
                  gap: {
                    xs: theme.spacing(SPACING),
                    sm: theme.spacing(),
                  },
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                  },
                  justifyContent: {
                    sm: "space-between",
                  },
                  alignItems: {
                    sm: "center",
                  },
                  width: "100%",
                }}
              >
                <Typography
                  sx={{
                    flexGrow: 1,
                  }}
                >
                  <Typography
                    component="span"
                    color={theme.palette.secondary.main}
                    fontWeight={theme.typography.fontWeightBold}
                  >
                    Bachelor of Science, Information Technology in aviation,
                  </Typography>{" "}
                  Philippine State College of Aeronautics
                </Typography>

                <Typography
                  component={"span"}
                  fontSize={{
                    xs: theme.typography.caption.fontSize,
                    sm: theme.typography.body2.fontSize,
                  }}
                  sx={{
                    flexShrink: 0,
                  }}
                >
                  Oct 2022
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                component="ul"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: theme.spacing(SPACING * 3),
                  width: {
                    lg: "60%",
                  },
                }}
              >
                <Box component="li">
                  <Typography component="li">
                    GWA <Bold>1.551</Bold>
                  </Typography>
                  <Box component="ul">
                    <Typography component="li">
                      Academic Distinction, GWA <Bold>1.55</Bold> ,{" "}
                      <Italic>Institute of Computer Studies</Italic>, 2022
                    </Typography>
                    <Typography component="li">
                      Dean's list, GWA <Bold>1.43</Bold> ,{" "}
                      <Italic>Institute of Computer Studies</Italic>, 2018
                    </Typography>
                  </Box>
                </Box>

                <Typography component="li">
                  <Bold>Relevant Coursework:</Bold> Web Development and Database
                  Management
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Bio;

function TechStack(props: { stack: string[] }) {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Box
      sx={{
        display: "flex",
        gap: theme.spacing(SPACING),
        flexDirection: {
          xs: "column",
          sm: "row",
        },
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

function Italic(props: PropsWithChildren) {
  return (
    <Typography component="span" fontStyle="italic">
      {props.children}
    </Typography>
  );
}

function HyperLinkedBayanEdAdminPanel() {
  return (
    <TextLink href={"http://main-demo.dxqyug1ga1ph6.amplifyapp.com/"}>
      BayanEd Admin Panel
    </TextLink>
  );
}

function HyperLinkedBff() {
  return (
    <TextLink href={"https://www.bayanfamilyoffoundations.org/"}>
      Bayan Family of Foundations
    </TextLink>
  );
}

function HyperLinkedBayanAcademy() {
  return (
    <TextLink href={"https://www.bayanfamilyoffoundations.org/bayan-academy"}>
      Bayan Academy
    </TextLink>
  );
}

function ToggleTruncatedTextButton(props: PropsWithChildren) {
  return (
    <Button size="small" sx={{ textTransform: "none" }}>
      {props.children}
    </Button>
  );
}
