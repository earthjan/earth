import { Box } from "@mui/material";

import { MetaLine } from "../ui/primitives";
import { PagerDots, SnapScroller } from "../ui/SnapScroller";
import { useSnapScroller } from "../ui/useSnapScroller";
import { certificationUrl, certifications } from "../../data/education";
import type { Certification } from "../../data/education";
import uxcel from "../../assets/logos/uxcel.png";
import { space, tokens, typeStyle, vars } from "../../theme/tokens";

/** Whole card opens the credential: the "Show credential" link stretches over the card. */
function CertCard({ cert }: { cert: Certification }) {
  return (
    <Box
      component="article"
      className="card certcard"
      sx={{
        position: "relative",
        boxSizing: "border-box",
        p: `${space(6)} ${space(16)} ${space(6)} ${space(6)}`,
        borderRadius: vars.radius.md,
        bgcolor: vars.color.surface["2"],
        border: `1px solid ${vars.color.outline.subtle}`,
        display: "flex",
        flexDirection: "column",
        gap: space(4),
      }}
    >
      <Box
        component="span"
        className="ccorner"
        aria-hidden="true"
        sx={{
          position: "absolute",
          top: 16,
          right: 16,
          width: 36,
          height: 36,
          borderRadius: "50%",
          bgcolor: vars.color.surface["3"],
          color: vars.color.accent.main,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M9 7h8v8" />
        </svg>
      </Box>

      <Box sx={{ display: "flex", alignItems: "flex-start", gap: space(4) }}>
        <Box
          component="span"
          sx={{ flex: "0 0 48px", width: 48, height: 48, borderRadius: vars.radius.lg, bgcolor: vars.color.surface["3"], display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <img src={uxcel} alt={cert.issuer} width={28} height={28} />
        </Box>
        <Box sx={{ minWidth: 0, display: "flex", flexDirection: "column", gap: space(1) }}>
          <Box component="h4" sx={{ m: 0, ...typeStyle("h5"), color: vars.color.text.heading }}>
            {cert.name}
          </Box>
          <MetaLine parts={[cert.issuer, `Issued ${cert.issued}`]} sx={{ fontSize: vars.font.size.md, color: vars.color.accent.main }} />
          <Box component="span" sx={{ fontSize: vars.font.size.xs, color: vars.color.text.muted }}>
            Credential ID {cert.credentialId}
          </Box>
        </Box>
      </Box>

      <Box component="p" sx={{ m: 0, maxWidth: vars.measure.md, ...typeStyle("body2"), lineHeight: 1.65, color: vars.color.text.secondary }}>
        {cert.description}
      </Box>

      <Box sx={{ mt: "auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: space(3) }}>
        <Box component="span" sx={{ display: "inline-flex", alignItems: "center", gap: space(2), fontSize: vars.font.size.sm, color: vars.color.text.muted }}>
          Skills
          {cert.skills.map((s) => (
            <Box component="span" key={s} sx={{ p: `${space(1)} ${space(3)}`, borderRadius: vars.radius.pill, bgcolor: vars.color.surface["4"], color: vars.color.steel["100"] }}>
              {s}
            </Box>
          ))}
        </Box>
        <Box
          component="a"
          className="stretch vlink"
          href={certificationUrl(cert)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Show credential for ${cert.name} (opens in a new tab)`}
          sx={{
            minHeight: 40,
            px: space(4),
            display: "inline-flex",
            alignItems: "center",
            gap: space(2),
            borderRadius: vars.radius.pill,
            border: `1px solid ${vars.color.outline.strong}`,
            color: vars.color.steel["100"],
            ...typeStyle("label"),
            textDecoration: "none",
            transition: `background-color ${vars.duration.short}, border-color ${vars.duration.short}`,
          }}
        >
          Show credential
          <svg className="varrow" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

/**
 * Mobile credential "ticket": the whole card is the link. The tear-off stub carries the credential ID
 * and the arrow, so the card reads as something to verify.
 */
function CertTicket({ cert }: { cert: Certification }) {
  const notch = {
    content: '""',
    position: "absolute",
    top: -9,
    width: 18,
    height: 18,
    borderRadius: "50%",
    // matches the section background so the stub looks punched out
    bgcolor: vars.color.surface["0"],
  } as const;
  return (
    <Box
      component="a"
      className="tix"
      href={certificationUrl(cert)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Show credential for ${cert.name} (opens in a new tab)`}
      sx={{
        position: "relative",
        flexBasis: `${tokens.size.scrollCard.ticket}px !important`,
        display: "flex",
        flexDirection: "column",
        borderRadius: vars.radius.md,
        bgcolor: vars.color.surface["2"],
        boxShadow: vars.elevation["1"],
        color: "inherit",
        textDecoration: "none",
      }}
    >
      <Box sx={{ flex: 1, display: "flex", flexDirection: "column", gap: space(3), p: space(5) }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: space(3) }}>
          <Box component="span" sx={{ flex: "0 0 40px", width: 40, height: 40, borderRadius: vars.radius.lg, bgcolor: vars.color.surface["3"], display: "flex", alignItems: "center", justifyContent: "center" }}>
            <img src={uxcel} alt="" width={24} height={24} />
          </Box>
          <Box component="span" sx={{ display: "flex", flexDirection: "column", gap: "2px", fontSize: vars.font.size.md, color: vars.color.accent.main }}>
            {cert.issuer}
            <Box component="small" sx={{ fontSize: vars.font.size.xs, color: vars.color.text.muted }}>{`Issued ${cert.issued}`}</Box>
          </Box>
        </Box>
        <Box component="h4" sx={{ m: 0, fontFamily: vars.font.display, fontSize: vars.font.size.lg, lineHeight: 1.3, fontWeight: vars.font.weight.bold, color: vars.color.text.heading }}>
          {cert.name}
        </Box>
        <Box
          component="p"
          sx={{
            m: 0,
            fontSize: vars.font.size.md,
            lineHeight: 1.6,
            color: vars.color.text.secondary,
            display: "-webkit-box",
            WebkitLineClamp: 4,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {cert.description}
        </Box>
        {cert.skills.map((s) => (
          <Box component="span" key={s} sx={{ alignSelf: "flex-start", mt: "auto", p: `${space(1)} ${space(3)}`, borderRadius: vars.radius.pill, bgcolor: vars.color.surface["4"], fontSize: vars.font.size.xs, lineHeight: 1.5, color: vars.color.steel["100"] }}>
            {s}
          </Box>
        ))}
      </Box>
      <Box
        aria-hidden="true"
        sx={{
          position: "relative",
          height: 0,
          mx: space(4),
          borderTop: `1px dashed ${vars.color.outline.strong}`,
          "&::before": { ...notch, left: `calc(${space(4)} * -1 - 9px)` },
          "&::after": { ...notch, right: `calc(${space(4)} * -1 - 9px)` },
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: space(3), p: `${space(4)} ${space(4)} ${space(4)} ${space(5)}` }}>
        <Box component="span" sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <Box component="small" sx={{ ...typeStyle("overline"), color: vars.color.text.muted }}>Credential ID</Box>
          <Box component="span" sx={{ fontSize: vars.font.size.md, fontWeight: vars.font.weight.medium, letterSpacing: vars.font.tracking.wider, color: vars.color.text.heading }}>
            {cert.credentialId}
          </Box>
        </Box>
        <Box
          component="span"
          className="tix-go"
          aria-hidden="true"
          sx={{ flex: "0 0 40px", width: 40, height: 40, borderRadius: "50%", border: `1px solid ${vars.color.outline.strong}`, color: vars.color.accent.main, display: "flex", alignItems: "center", justifyContent: "center" }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 17L17 7M9 7h8v8" />
          </svg>
        </Box>
      </Box>
    </Box>
  );
}

/** Certifications at md and below: swipeable tickets. */
function CertTickets() {
  const { ref, index, onScroll, go } = useSnapScroller();
  return (
    <Box className="mob-md">
      <SnapScroller scrollerRef={ref} onScroll={onScroll} label="Certifications">
        {certifications.map((c) => (
          <CertTicket key={c.credentialId} cert={c} />
        ))}
      </SnapScroller>
      <PagerDots count={certifications.length} index={index} onSelect={go} label={(i) => `Show ${certifications[i].name}`} />
    </Box>
  );
}

export default function Certifications() {
  return (
    <Box className="reveal" sx={{ display: "flex", flexDirection: "column", gap: space(5) }}>
      <Box component="h3" sx={{ m: 0, ...typeStyle("h3"), lineHeight: "normal", color: vars.color.text.heading }}>
        Certifications
      </Box>
      <CertTickets />
      <Box className="desk-md" sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 440px), 1fr))", gap: space(5), alignItems: "stretch" }}>
        {certifications.map((c) => (
          <CertCard key={c.credentialId} cert={c} />
        ))}
      </Box>
    </Box>
  );
}
