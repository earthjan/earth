import { Box, Button } from "@mui/material";

import { footer, links } from "../../data/profile";
import { space, typeStyle, vars } from "../../theme/tokens";

const iconLink = {
  width: 44,
  height: 44,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: vars.color.accent.main,
} as const;

export default function Footer() {
  return (
    <Box
      component="footer"
      id="contact"
      sx={{
        position: "relative",
        overflow: "hidden",
        p: `${space(24)} ${space(6)} ${space(10)}`,
        bgcolor: vars.color.surface["1"],
        borderTop: `1px solid ${vars.color.surface["3"]}`,
      }}
    >
      <svg aria-hidden="true" width="100%" height="80" viewBox="0 0 1200 80" preserveAspectRatio="none" fill="none" style={{ position: "absolute", left: 0, top: "24px", pointerEvents: "none" }}>
        <path className="wave" d="M0 40 C 150 0, 300 0, 450 40 S 750 80, 900 40 S 1100 0, 1200 40" stroke="#2E3A40" strokeWidth="1.5" strokeDasharray="120 120" />
      </svg>
      <Box sx={{ position: "relative", maxWidth: vars.container, mx: "auto", display: "flex", flexDirection: "column", gap: space(10) }}>
        <Box className="reveal" sx={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: space(6) }}>
          <Box component="h2" sx={{ m: 0, maxWidth: "18ch", ...typeStyle("h2"), color: vars.color.text.heading }}>
            {footer.cta}
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: space(3) }}>
            <Button variant="outlined" href={links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </Button>
            <Button variant="contained" href={links.mailto} sx={{ boxShadow: "none" }}>
              Email me
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: space(4),
            pt: space(6),
            borderTop: `1px solid ${vars.color.outline.subtle}`,
          }}
        >
          <Box component="span" sx={{ ...typeStyle("caption"), color: vars.color.text.muted }}>
            {footer.credit}
          </Box>
          <Box sx={{ display: "flex", gap: space(1) }}>
            <Box component="a" className="icn" href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" sx={iconLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" /></svg>
            </Box>
            <Box component="a" className="icn" href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" sx={iconLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>
            </Box>
            <Box component="a" className="icn" href={links.mailto} aria-label="Email" sx={iconLink}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
