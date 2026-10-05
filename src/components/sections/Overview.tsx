import { useState } from "react";
import { Box, Button } from "@mui/material";

import { Chip, Section, SectionTitle } from "../ui/primitives";
import { twoColumn } from "../ui/layout";
import { overview } from "../../data/profile";
import { mq, space, typeStyle, vars } from "../../theme/tokens";

const decor = (
  <svg className="scrollspin" aria-hidden="true" width="460" height="460" viewBox="0 0 460 460" fill="none" style={{ position: "absolute", right: "-160px", top: "-40px", pointerEvents: "none" }}>
    <circle cx="230" cy="230" r="220" stroke="#2E3A40" strokeWidth="1.5" strokeDasharray="2 10" />
    <circle cx="230" cy="10" r="5" fill="#607D8B" />
  </svg>
);


export default function Overview() {
  const [expanded, setExpanded] = useState(false);
  return (
    <Section id="overview" decor={decor}>
      <Box sx={twoColumn}>
        <SectionTitle sx={{ flex: "1 1 260px" }}>Overview</SectionTitle>
        <Box className="reveal" sx={{ flex: "999 1 520px", minWidth: 0, display: "flex", flexDirection: "column", gap: space(5) }}>
          <Box component="p" sx={{ m: 0, maxWidth: vars.measure.md, ...typeStyle("lead"), lineHeight: 1.6, color: vars.color.text.primary }}>
            {overview.lead}
          </Box>
          {/* md and below: the paragraphs fold behind "Show more" */}
          <Box id="overview-more" sx={{ display: "flex", flexDirection: "column", gap: space(5), [mq.down("md")]: { display: expanded ? "flex" : "none" } }}>
            {overview.paragraphs.map((p) => (
              <Box component="p" key={p} sx={{ m: 0, maxWidth: vars.measure.md, ...typeStyle("body1"), color: vars.color.text.secondary }}>
                {p}
              </Box>
            ))}
          </Box>
          <Button
            className="mob-md"
            variant="text"
            size="medium"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls="overview-more"
            endIcon={
              <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: expanded ? "rotate(180deg)" : "none" }} aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            }
            sx={{ alignSelf: "flex-start", my: space(2, true), ml: space(3, true), minHeight: 44, px: space(3) }}
          >
            {expanded ? "Show less" : "Show more"}
          </Button>
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
