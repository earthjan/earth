import { Suspense, lazy, useEffect, useState } from "react";
import { Box, Button } from "@mui/material";

import { MetaLine } from "../ui/primitives";
import { SnapScroller } from "../ui/SnapScroller";
import { useSnapScroller } from "../ui/useSnapScroller";
import { experience } from "../../data/experience";
import type { Role } from "../../data/experience";
import { dateRange, highlightBadge, roleTitle } from "./roleStyles";
import { space, tokens, typeStyle, vars } from "../../theme/tokens";

// The sheet (MUI Drawer + Modal) only exists on small screens: load it on demand.
const loadSheet = () => import("./RoleSheet");
const RoleSheet = lazy(loadSheet);

const NODE = tokens.size.node;

function PresentChip() {
  return (
    <Box
      component="span"
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: space(2),
        p: `${space(1)} ${space(3)}`,
        borderRadius: vars.radius.pill,
        bgcolor: vars.color.accent.main,
        color: vars.color.text.onAccent,
        fontSize: vars.font.size.xs,
        fontWeight: vars.font.weight.bold,
        letterSpacing: vars.font.tracking.wider,
        textTransform: "uppercase",
      }}
    >
      <Box component="span" sx={{ width: 6, height: 6, borderRadius: "50%", bgcolor: vars.color.surface["0"] }} />
      Present
    </Box>
  );
}

/** Filled pulsing dot for the current role (timeline strip and the current card). */
function LiveDot({ ring }: { ring: string }) {
  return (
    <>
      <Box component="span" className="ping" sx={{ position: "absolute", inset: 0, borderRadius: "50%", bgcolor: vars.color.accent.main }} />
      <Box
        component="span"
        sx={{ position: "absolute", inset: 0, borderRadius: "50%", bgcolor: vars.color.accent.main, boxShadow: `0 0 0 4px ${ring}, 0 0 0 5px ${vars.color.steel["400"]}` }}
      />
    </>
  );
}

/** Timeline strip: one point per role (newest left), doubles as the pager for the cards below. */
function TimelineStrip({ index, onSelect }: { index: number; onSelect: (i: number) => void }) {
  const last = experience.length - 1;
  return (
    <Box sx={{ position: "relative", display: "grid", gridTemplateColumns: `repeat(${experience.length}, 1fr)`, mb: space(4) }}>
      <Box
        component="span"
        aria-hidden="true"
        sx={{ position: "absolute", left: NODE.current / 2, right: NODE.current / 2, top: 20, height: 2, borderRadius: vars.radius.xs, bgcolor: vars.color.steel["800"] }}
      />
      <Box
        component="span"
        aria-hidden="true"
        sx={{
          position: "absolute",
          left: NODE.current / 2,
          top: 20,
          height: 2,
          borderRadius: vars.radius.xs,
          background: `linear-gradient(90deg, ${vars.color.accent.main}, ${vars.color.steel["500"]})`,
          width: `calc((100% - ${NODE.current}px) * ${last ? index / last : 0})`,
          transition: `width ${vars.duration.long} ${vars.ease.standard}`,
        }}
      />
      {experience.map((role, i) => {
        const selected = i === index;
        const current = !role.end;
        const align = i === 0 ? "flex-start" : i === last ? "flex-end" : "center";
        return (
          <Box
            component="button"
            type="button"
            key={role.title}
            onClick={() => onSelect(i)}
            aria-label={`Show ${role.title}, ${role.company}`}
            aria-current={selected}
            sx={{
              position: "relative",
              minHeight: 44,
              p: `${space(3)} 0 0`,
              border: 0,
              bgcolor: "transparent",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: align,
              textAlign: i === 0 ? "left" : i === last ? "right" : "center",
              gap: space(2),
              fontFamily: vars.font.text,
              color: selected ? vars.color.text.heading : vars.color.text.muted,
            }}
          >
            <Box component="span" sx={{ position: "relative", width: NODE.current, height: NODE.current, display: "flex", alignItems: "center", justifyContent: "center" }}>
              {current ? (
                <LiveDot ring={vars.color.surface["1"]} />
              ) : (
                <Box
                  component="span"
                  sx={{
                    width: NODE.past,
                    height: NODE.past,
                    boxSizing: "border-box",
                    borderRadius: "50%",
                    border: `2px solid ${selected ? vars.color.steel["400"] : vars.color.steel["500"]}`,
                    bgcolor: selected ? vars.color.steel["400"] : vars.color.surface["1"],
                    boxShadow: selected ? `0 0 0 4px ${vars.color.surface["1"]}, 0 0 0 5px ${vars.color.steel["400"]}` : "none",
                    transition: `box-shadow ${vars.duration.medium} ${vars.ease.standard}, background-color ${vars.duration.medium}`,
                  }}
                />
              )}
            </Box>
            <Box component="span" sx={{ ...typeStyle("overline") }}>{role.node}</Box>
            <Box component="span" sx={{ fontSize: vars.font.size.sm, lineHeight: 1.3, color: selected ? vars.color.accent.main : undefined }}>
              {role.shortCompany}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}

function Stats({ stats }: { stats: NonNullable<Role["stats"]> }) {
  return (
    <Box
      component="ul"
      sx={{
        display: "flex",
        m: 0,
        p: `${space(4)} 0`,
        listStyle: "none",
        borderTop: `1px solid ${vars.color.outline.default}`,
        borderBottom: `1px solid ${vars.color.outline.default}`,
      }}
    >
      {stats.map((s, i) => (
        <Box
          component="li"
          key={s.label}
          sx={{
            flex: "1 1 0",
            minWidth: 0,
            display: "flex",
            flexDirection: "column",
            gap: space(1),
            pl: i ? space(3) : 0,
            pr: i < stats.length - 1 ? space(3) : 0,
            borderLeft: i ? `1px solid ${vars.color.outline.default}` : 0,
          }}
        >
          <Box
            component="span"
            sx={{
              fontFamily: vars.font.display,
              fontSize: vars.font.size["3xl"],
              lineHeight: 1.1,
              fontWeight: vars.font.weight.heavy,
              letterSpacing: vars.font.tracking.tight,
              color: vars.color.text.heading,
              whiteSpace: "nowrap",
            }}
          >
            {s.value}
          </Box>
          <Box component="span" sx={{ fontSize: vars.font.size.xs, lineHeight: 1.35, color: vars.color.text.muted }}>
            {s.label}
          </Box>
        </Box>
      ))}
    </Box>
  );
}

function RoleCard({ role, onDetails }: { role: Role; onDetails: () => void }) {
  const current = !role.end;
  const hasDetails = role.bullets.length > 0;
  return (
    <Box
      component="article"
      aria-label={`${role.title}, ${role.company}`}
      sx={{
        position: "relative",
        overflow: "hidden",
        flexBasis: `calc(100% - ${space(6)}) !important`,
        maxWidth: tokens.size.scrollCard.experience,
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: space(4),
        p: space(5),
        borderRadius: vars.radius.md,
        bgcolor: current ? vars.color.surface.tint : role.featured ? vars.color.surface["3"] : vars.color.surface["2"],
        border: `1px solid ${current || role.featured ? vars.color.outline.strong : vars.color.outline.subtle}`,
        boxShadow: role.featured ? vars.elevation["4"] : vars.elevation["1"],
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: space(3), minHeight: 28 }}>
        <Box component="span" sx={{ fontSize: vars.font.size.sm, color: current ? vars.color.accent.main : vars.color.text.muted }}>
          {dateRange(role)}
        </Box>
        {current && <PresentChip />}
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: space(1) }}>
        <Box component="h3" sx={roleTitle}>{role.title}</Box>
        <MetaLine parts={[role.company, role.location]} sx={{ fontSize: vars.font.size.md, color: vars.color.accent.main }} />
      </Box>

      {role.highlight && <Box component="span" sx={highlightBadge}>{role.highlight}</Box>}
      {role.stats && <Stats stats={role.stats} />}

      {hasDetails && (
        <Button
          variant="text"
          size="medium"
          onClick={onDetails}
          aria-haspopup="dialog"
          endIcon={
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M6 15l6-6 6 6" />
            </svg>
          }
          sx={{ alignSelf: "flex-start", mt: "auto", mb: space(2, true), ml: space(3, true), minHeight: 44, px: space(3) }}
        >
          View details
        </Button>
      )}

      {current && !hasDetails && (
        // decorative: a live pulse fills the card until this role has highlights
        <Box aria-hidden="true" sx={{ position: "relative", flex: 1, minHeight: 160, display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
          <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
            <circle className="spin" cx="80" cy="80" r="72" stroke={tokens.color.decor.line} strokeWidth="1.5" strokeDasharray="3 10" style={{ transformOrigin: "80px 80px" }} />
            <circle cx="80" cy="80" r="44" stroke={tokens.color.decor.line} strokeWidth="1.5" />
          </svg>
          <Box component="span" sx={{ position: "absolute", left: "50%", top: "50%", width: NODE.current, height: NODE.current, ml: `-${NODE.current / 2}px`, mt: `-${NODE.current / 2}px` }}>
            <LiveDot ring={vars.color.surface.tint} />
          </Box>
        </Box>
      )}
    </Box>
  );
}

/** Experience at md and below: timeline strip + swipeable condensed cards + details sheet. */
export default function ExperienceMobile() {
  const { ref, index, onScroll, go } = useSnapScroller();
  // the role stays mounted while the sheet slides out
  const [active, setActive] = useState<Role | null>(null);
  const [open, setOpen] = useState(false);

  // prefetch the sheet once the page is idle, but only where this layout is shown
  useEffect(() => {
    if (!window.matchMedia(`(max-width: ${tokens.layout.breakpoint.md}px)`).matches) return;
    const t = window.setTimeout(loadSheet, 2000);
    return () => window.clearTimeout(t);
  }, []);
  return (
    <Box className="mob-md">
      <TimelineStrip index={index} onSelect={go} />
      <SnapScroller scrollerRef={ref} onScroll={onScroll} label="Roles">
        {experience.map((role) => (
          <RoleCard key={role.title} role={role} onDetails={() => { setActive(role); setOpen(true); }} />
        ))}
      </SnapScroller>
      {active && (
        <Suspense fallback={null}>
          <RoleSheet role={active} open={open} onClose={() => setOpen(false)} />
        </Suspense>
      )}
    </Box>
  );
}

