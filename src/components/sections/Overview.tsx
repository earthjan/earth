import { Box } from "@mui/material";

import { Chip, Section, SectionTitle } from "../ui/primitives";
import { twoColumn } from "../ui/layout";
import { overview } from "../../data/profile";
import { space, typeStyle, vars } from "../../theme/tokens";

const decor = (
  <svg className="scrollspin" aria-hidden="true" width="460" height="460" viewBox="0 0 460 460" fill="none" style={{ position: "absolute", right: "-160px", top: "-40px", pointerEvents: "none" }}>
    <circle cx="230" cy="230" r="220" stroke="#2E3A40" strokeWidth="1.5" strokeDasharray="2 10" />
    <circle cx="230" cy="10" r="5" fill="#607D8B" />
  </svg>
);


export default function Overview() {
  return (
    <Section id="overview" decor={decor}>
      <Box sx={twoColumn}>
        <SectionTitle sx={{ flex: "1 1 260px" }}>Overview</SectionTitle>
        <Box className="reveal" sx={{ flex: "999 1 520px", minWidth: 0, display: "flex", flexDirection: "column", gap: space(5) }}>
          <Box component="p" sx={{ m: 0, maxWidth: vars.measure.md, ...typeStyle("lead"), lineHeight: 1.6, color: vars.color.text.primary }}>
            {overview.lead}
          </Box>
          {overview.paragraphs.map((p) => (
            <Box component="p" key={p} sx={{ m: 0, maxWidth: vars.measure.md, ...typeStyle("body1"), color: vars.color.text.secondary }}>
              {p}
            </Box>
          ))}
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: space(2), mt: space(1) }}>
            {overview.facts.map((parts) => (
              <Chip key={parts.join()} parts={parts} />
            ))}
          </Box>
        </Box>
      </Box>
    </Section>
  );
}
