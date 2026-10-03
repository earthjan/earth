import { Box } from "@mui/material";

import { Section, SectionTitle } from "../ui/primitives";
import { twoColumn } from "../ui/layout";
import { skills } from "../../data/profile";
import { space, vars } from "../../theme/tokens";

const decor = (
  <div aria-hidden="true" style={{ position: "absolute", left: "6%", bottom: "40px", width: "200px", height: "200px", pointerEvents: "none" }}>
    <svg className="spinr" width="200" height="200" viewBox="0 0 200 200" fill="none">
      <circle cx="100" cy="100" r="90" stroke="#2E3A40" strokeWidth="1.5" />
      <circle cx="100" cy="100" r="55" stroke="#2E3A40" strokeWidth="1.5" strokeDasharray="3 8" />
      <circle cx="100" cy="10" r="6" fill="#607D8B" />
      <circle cx="155" cy="100" r="4" fill="#90A4AE" />
    </svg>
  </div>
);

export default function Skills() {
  return (
    <Section id="skills" alt decor={decor}>
      <Box sx={{ ...twoColumn, alignItems: "stretch" }}>
        <SectionTitle sx={{ flex: "1 1 260px" }}>Skills</SectionTitle>
        <Box
          component="ul"
          className="reveal"
          aria-label="Skills"
          sx={{ flex: "999 1 520px", minWidth: 0, m: 0, p: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: space(3), alignContent: "flex-start" }}
        >
          {skills.map((s) => (
            <Box
              component="li"
              key={s}
              className="chip"
              sx={{
                p: `${space(3)} ${space(5)}`,
                borderRadius: vars.radius.pill,
                bgcolor: vars.color.surface["3"],
                border: `1px solid ${vars.color.outline.default}`,
                fontSize: vars.font.size.md,
                color: vars.color.text.primary,
              }}
            >
              {s}
            </Box>
          ))}
        </Box>
      </Box>
    </Section>
  );
}
