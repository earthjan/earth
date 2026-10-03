import { useState } from "react";
import { Box, Button } from "@mui/material";

import { MetaLine, Section, SectionTitle, Tag } from "../ui/primitives";
import { experience } from "../../data/experience";
import type { Role } from "../../data/experience";
import { space, typeStyle, vars } from "../../theme/tokens";

const decor = (
  <svg className="scrollspin" aria-hidden="true" width="340" height="340" viewBox="0 0 340 340" fill="none" style={{ position: "absolute", right: "-120px", top: "60px", pointerEvents: "none" }}>
    <circle cx="170" cy="170" r="160" stroke="#2E3A40" strokeWidth="1.5" />
    <circle cx="170" cy="10" r="5" fill="#607D8B" />
  </svg>
);

const muted = { fontSize: vars.font.size.sm, color: vars.color.text.muted } as const;
const bulletList = {
  m: 0,
  // the measure applies to the text, not the bullet indent
  boxSizing: "content-box",
  pl: space(5),
  maxWidth: vars.measure.lg,
  display: "flex",
  flexDirection: "column",
  gap: space(3),
  ...typeStyle("body1"),
  color: vars.color.text.secondary,
} as const;

function PresentChip() {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: space(2),
        p: `${space(2)} ${space(3)}`,
        borderRadius: vars.radius.pill,
        bgcolor: vars.color.accent.main,
        color: vars.color.text.onAccent,
        fontSize: vars.font.size.xs,
        fontWeight: vars.font.weight.bold,
        letterSpacing: vars.font.tracking.wider,
        textTransform: "uppercase",
      }}
    >
      <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: vars.color.text.onAccent }} />
      Present
    </Box>
  );
}

function Node({ current }: { current: boolean }) {
  if (current) {
    return (
      <Box component="span" sx={{ position: "relative", mt: space(8), width: 18, height: 18, flex: "0 0 18px" }}>
        <Box component="span" className="ping" sx={{ position: "absolute", inset: 0, borderRadius: "50%", bgcolor: vars.color.accent.main }} />
        <Box
          component="span"
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            bgcolor: vars.color.accent.main,
            boxShadow: `0 0 0 4px ${vars.color.surface["1"]}, 0 0 0 5px ${vars.color.steel["400"]}`,
          }}
        />
      </Box>
    );
  }
  return (
    <Box
      component="span"
      sx={{
        mt: space(8),
        width: 14,
        height: 14,
        flex: "0 0 14px",
        boxSizing: "border-box",
        borderRadius: "50%",
        border: `2px solid ${vars.color.steel["500"]}`,
        bgcolor: vars.color.surface["1"],
      }}
    />
  );
}

function RoleHeader({ role }: { role: Role }) {
  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", gap: role.end ? space(2) : space(1) }}>
        <Box component="h3" sx={{ m: 0, ...typeStyle("h4"), color: vars.color.text.heading }}>
          {role.title}
        </Box>
        <MetaLine parts={[role.company, role.location]} sx={{ fontSize: vars.font.size.base, color: vars.color.accent.main }} />
      </Box>
      {role.end ? (
        <Box component="span" sx={muted}>{`${role.start} - ${role.end}`}</Box>
      ) : (
        <Box sx={{ display: "flex", alignItems: "center", gap: space(3) }}>
          <Box component="span" sx={{ fontSize: vars.font.size.sm, color: vars.color.accent.main }}>{`${role.start} -`}</Box>
          <PresentChip />
        </Box>
      )}
    </>
  );
}

function RoleCard({ role }: { role: Role }) {
  const [expanded, setExpanded] = useState(false);
  const current = !role.end;
  const moreId = `role-${role.company.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-bullets`;
  const headerRow = {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "baseline",
    justifyContent: "space-between",
    gap: `${space(2)} ${space(6)}`,
  } as const;

  if (current) {
    return (
      <Box
        component="article"
        className="reveal card"
        sx={{
          ...headerRow,
          bgcolor: vars.color.surface.tint,
          border: `1px solid ${vars.color.outline.strong}`,
          borderRadius: vars.radius.md,
          p: space(8),
          boxShadow: vars.elevation["1"],
        }}
      >
        <RoleHeader role={role} />
      </Box>
    );
  }

  return (
    <Box
      component="article"
      className="reveal card"
      sx={{
        bgcolor: role.featured ? vars.color.surface["3"] : vars.color.surface["2"],
        border: role.featured ? `1px solid ${vars.color.outline.strong}` : undefined,
        borderRadius: vars.radius.md,
        p: space(8),
        display: "flex",
        flexDirection: "column",
        gap: space(6),
        boxShadow: role.featured ? vars.elevation["4"] : vars.elevation["1"],
      }}
    >
      <Box sx={headerRow}>
        <RoleHeader role={role} />
      </Box>

      {role.highlight ? (
        <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: space(3) }}>
          <Box
            component="span"
            sx={{
              p: `${space(2)} ${space(3)}`,
              borderRadius: vars.radius.pill,
              bgcolor: vars.color.steel["800"],
              fontSize: vars.font.size.sm,
              fontWeight: vars.font.weight.medium,
              color: vars.color.steel["50"],
            }}
          >
            {role.highlight}
          </Box>
          {role.progression && (
            <Box component="span" sx={{ fontSize: vars.font.size.xs, color: vars.color.text.muted }}>
              {role.progression}
            </Box>
          )}
        </Box>
      ) : (
        role.progression && (
          <Box component="span" sx={{ fontSize: vars.font.size.xs, color: vars.color.text.muted }}>
            {role.progression}
          </Box>
        )
      )}

      <Box component="ul" id={moreId} sx={bulletList}>
        {role.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
        {expanded && role.moreBullets?.map((b) => <li key={b}>{b}</li>)}
      </Box>

      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: space(2) }}>
        {role.tags.map((t) => (
          <Tag key={t}>{t}</Tag>
        ))}
        {role.moreBullets && (
          <Button
            variant="text"
            size="medium"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-controls={moreId}
            sx={{ ml: "auto", minHeight: 44, px: space(3) }}
            endIcon={
              <svg className="chev" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: expanded ? "rotate(180deg)" : "none" }} aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            }
          >
            {expanded ? "Show less" : "Show more"}
          </Button>
        )}
      </Box>
    </Box>
  );
}

export default function Experience() {
  return (
    <Section id="experience" alt decor={decor}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: space(12) }}>
        <SectionTitle>Experience</SectionTitle>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          {experience.map((role, i) => {
            const last = i === experience.length - 1;
            const current = !role.end;
            return (
              <Box key={role.title} className="tlrow" sx={{ display: "flex", gap: space(6) }}>
                <Box className="tl" aria-hidden="true" sx={{ flex: "0 0 28px", display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Node current={current} />
                  {!last && (
                    <Box
                      component="span"
                      className="line"
                      sx={{
                        flex: 1,
                        width: 2,
                        mt: space(3),
                        background: current
                          ? `linear-gradient(${vars.color.accent.main}, ${vars.color.steel["800"]})`
                          : vars.color.steel["800"],
                      }}
                    />
                  )}
                </Box>
                <Box sx={{ flex: 1, minWidth: 0, pb: last ? 0 : space(8) }}>
                  <RoleCard role={role} />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Section>
  );
}
