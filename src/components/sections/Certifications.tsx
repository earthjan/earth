import { Box } from "@mui/material";

import { MetaLine } from "../ui/primitives";
import { certificationUrl, certifications } from "../../data/education";
import type { Certification } from "../../data/education";
import uxcel from "../../assets/logos/uxcel.png";
import { space, typeStyle, vars } from "../../theme/tokens";

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

export default function Certifications() {
  return (
    <Box className="reveal" sx={{ display: "flex", flexDirection: "column", gap: space(5) }}>
      <Box component="h3" sx={{ m: 0, ...typeStyle("h3"), lineHeight: "normal", color: vars.color.text.heading }}>
        Certifications
      </Box>
      <Box sx={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 440px), 1fr))", gap: space(5), alignItems: "stretch" }}>
        {certifications.map((c) => (
          <CertCard key={c.credentialId} cert={c} />
        ))}
      </Box>
    </Box>
  );
}
