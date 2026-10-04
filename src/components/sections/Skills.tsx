import { Box } from "@mui/material";

import { Section, SectionTitle } from "../ui/primitives";
import { twoColumn } from "../ui/layout";
import { PagerDots, SnapScroller } from "../ui/SnapScroller";
import { useSnapScroller } from "../ui/useSnapScroller";
import { skillGroups, skills } from "../../data/profile";
import type { SkillGroup } from "../../data/profile";
import { mq, space, tokens, vars } from "../../theme/tokens";

const ICONS: Record<SkillGroup["icon"], string> = {
  code: "M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z",
  flask: "M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z",
  palette: "M12 3a9 9 0 0 0 0 18c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z",
};

function GroupCard({ group }: { group: SkillGroup }) {
  const primary = !!group.primary;
  return (
    <Box
      sx={{
        flexBasis: `calc(100% - ${space(6)}) !important`,
        maxWidth: tokens.size.scrollCard.skillGroup,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: space(4),
        p: space(5),
        borderRadius: vars.radius.md,
        bgcolor: primary ? vars.color.surface.tint : vars.color.surface["2"],
        border: `1px solid ${primary ? vars.color.outline.strong : vars.color.outline.subtle}`,
        boxShadow: primary ? vars.elevation["2"] : "none",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: space(3) }}>
        <Box
          component="span"
          aria-hidden="true"
          sx={{
            flex: "0 0 40px",
            width: 40,
            height: 40,
            borderRadius: "50%",
            bgcolor: primary ? vars.color.accent.main : vars.color.steel["800"],
            color: primary ? vars.color.text.onAccent : vars.color.steel["100"],
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d={ICONS[group.icon]} />
          </svg>
        </Box>
        <Box component="h3" sx={{ m: 0, fontFamily: vars.font.display, fontSize: vars.font.size.lg, lineHeight: 1.3, fontWeight: vars.font.weight.bold, color: vars.color.text.heading }}>
          {group.title}
        </Box>
      </Box>
      <Box component="ul" aria-label={group.title} sx={{ m: 0, p: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: space(2) }}>
        {group.skills.map((s) => (
          <Box
            component="li"
            key={s}
            sx={{
              p: `${space(2)} ${space(4)}`,
              borderRadius: vars.radius.pill,
              bgcolor: primary ? vars.color.accent.stateHover : vars.color.surface["3"],
              border: `1px solid ${primary ? vars.color.steel["600"] : vars.color.outline.default}`,
              fontSize: vars.font.size.md,
              lineHeight: 1.4,
              color: primary ? vars.color.text.heading : vars.color.text.primary,
            }}
          >
            {s}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

/** Skills at md and below: three swipeable groups, specialties first. */
function SkillGroups() {
  const { ref, index, onScroll, go } = useSnapScroller();
  return (
    <Box className="mob-md" sx={{ width: "100%" }}>
      <SnapScroller scrollerRef={ref} onScroll={onScroll} label="Skill groups">
        {skillGroups.map((g) => (
          <GroupCard key={g.title} group={g} />
        ))}
      </SnapScroller>
      <PagerDots count={skillGroups.length} index={index} onSelect={go} label={(i) => `Show ${skillGroups[i].title}`} />
    </Box>
  );
}

const decor = (
  <div className="decor-md" aria-hidden="true" style={{ position: "absolute", left: "6%", bottom: "40px", width: "200px", height: "200px", pointerEvents: "none" }}>
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
      <Box sx={{ ...twoColumn, alignItems: "stretch", [mq.down("md")]: { rowGap: space(8) } }}>
        <SectionTitle sx={{ flex: "1 1 260px" }}>Skills</SectionTitle>
        <SkillGroups />
        <Box
          component="ul"
          className="reveal desk-md"
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
