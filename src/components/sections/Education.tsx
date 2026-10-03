import { Box } from "@mui/material";

import { CheckIcon, MetaLine, Section, SectionTitle } from "../ui/primitives";
import Certifications from "./Certifications";
import { awards, degree } from "../../data/education";
import type { Award } from "../../data/education";
import { space, typeStyle, vars } from "../../theme/tokens";

const decor = (
  <svg className="scrollspin" aria-hidden="true" width="200" height="200" viewBox="0 0 200 200" fill="none" style={{ position: "absolute", right: "8%", top: "40px", pointerEvents: "none" }}>
    <circle cx="100" cy="100" r="90" stroke="#2E3A40" strokeWidth="1.5" strokeDasharray="6 6" />
    <circle cx="100" cy="10" r="5" fill="#607D8B" />
  </svg>
);

const icons: Record<Award["icon"], JSX.Element> = {
  medal: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CFD8DC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 2l4 6 4-6" />
      <circle cx="12" cy="15" r="6" />
      <path d="M12 12.2l.9 1.8 2 .3-1.45 1.4.35 2-1.8-.95-1.8.95.35-2L9.1 14.3l2-.3z" fill="#CFD8DC" stroke="none" />
    </svg>
  ),
  trophy: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#CFD8DC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16v4a8 8 0 0 1-16 0z" />
      <path d="M8 20h8M12 16v4" />
      <path d="M4 6H2v1a3 3 0 0 0 3 3M20 6h2v1a3 3 0 0 1-3 3" />
    </svg>
  ),
};

function AwardCard({ award }: { award: Award }) {
  return (
    <Box
      className="card"
      sx={{
        flex: "1 1 260px",
        minWidth: 0,
        boxSizing: "border-box",
        p: space(6),
        borderRadius: vars.radius.md,
        bgcolor: award.primary ? vars.color.surface.tint : vars.color.surface["3"],
        border: `1px solid ${award.primary ? vars.color.steel["500"] : vars.color.outline.default}`,
        display: "flex",
        flexDirection: "column",
        gap: space(5),
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: space(3) }}>
        <Box component="span" sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: vars.color.steel["800"], display: "flex", alignItems: "center", justifyContent: "center" }}>
          {icons[award.icon]}
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <Box component="h4" sx={{ m: 0, ...typeStyle("h5"), lineHeight: "normal", color: vars.color.text.heading }}>
            {award.title}
          </Box>
          <MetaLine
            parts={award.meta}
            sx={{ fontSize: vars.font.size.xs, letterSpacing: vars.font.tracking.wider, color: vars.color.steel["300"] }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "baseline", gap: space(3) }}>
        <Box component="span" sx={{ ...typeStyle("stat"), color: vars.color.text.heading }}>
          {award.gwa}
        </Box>
        <Box component="abbr" title="General weighted average" sx={{ fontSize: vars.font.size.sm, letterSpacing: vars.font.tracking.wider, textTransform: "uppercase", color: vars.color.accent.main, textDecoration: "none" }}>
          GWA
        </Box>
      </Box>
    </Box>
  );
}

export default function Education() {
  return (
    <Section id="education" decor={decor}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: space(12) }}>
        <SectionTitle>Education</SectionTitle>

        <Box component="article" className="reveal" sx={{ display: "flex", flexDirection: "column", gap: space(6) }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: `${space(3)} ${space(6)}` }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: space(2) }}>
              <Box component="h3" sx={{ m: 0, ...typeStyle("h3"), lineHeight: "normal", color: vars.color.text.heading }}>
                {degree.title}
              </Box>
              <MetaLine parts={[degree.school, degree.years]} sx={{ fontSize: vars.font.size.base, color: vars.color.accent.main }} />
            </Box>
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: space(2),
                p: `${space(2)} ${space(4)}`,
                borderRadius: vars.radius.pill,
                bgcolor: vars.color.accent.main,
                color: vars.color.text.onAccent,
                fontSize: vars.font.size.md,
                fontWeight: vars.font.weight.bold,
              }}
            >
              <CheckIcon />
              {degree.honor}
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: space(5) }}>
            {awards.map((a) => (
              <AwardCard key={a.title} award={a} />
            ))}
          </Box>

          <Box component="p" sx={{ m: 0, maxWidth: vars.measure.md, ...typeStyle("body2"), color: vars.color.text.muted }}>
            {degree.footnote}
          </Box>
        </Box>

        <Certifications />
      </Box>
    </Section>
  );
}
