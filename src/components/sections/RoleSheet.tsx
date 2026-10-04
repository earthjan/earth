import { Box, Drawer } from "@mui/material";

import { MetaLine, Tag } from "../ui/primitives";
import type { Role } from "../../data/experience";
import { dateRange, highlightBadge, roleTitle } from "./roleStyles";
import { space, tokens, typeStyle, vars } from "../../theme/tokens";

/** MD2 modal bottom sheet with everything the card leaves out: progression, all bullets, tech. */
export default function RoleSheet({ role, open, onClose }: { role: Role | null; open: boolean; onClose: () => void }) {
  const titleId = "role-sheet-title";
  return (
    <Drawer
      anchor="bottom"
      open={open}
      onClose={onClose}
      transitionDuration={{ enter: tokens.motion.duration.long, exit: tokens.motion.duration.medium }}
      slotProps={{
        backdrop: { sx: { bgcolor: vars.color.surface.scrim } },
        paper: {
          role: "dialog",
          "aria-modal": true,
          "aria-labelledby": titleId,
          sx: {
            maxHeight: "85svh",
            // tablets: a centered sheet instead of a full-width one
            width: "100%",
            maxWidth: 640,
            mx: "auto",
            boxSizing: "border-box",
            display: "flex",
            flexDirection: "column",
            gap: space(4),
            p: `0 ${space(5)} calc(${space(8)} + env(safe-area-inset-bottom))`,
            borderRadius: `${vars.radius.lg} ${vars.radius.lg} 0 0`,
            bgcolor: vars.color.surface["3"],
            backgroundImage: "none",
            boxShadow: vars.elevation["8"],
            "& > *": { flexShrink: 0 },
          },
        },
      }}
    >
      {role && (
        <>
          <Box component="span" aria-hidden="true" sx={{ alignSelf: "center", width: 32, height: 4, mt: space(2), borderRadius: vars.radius.pill, bgcolor: vars.color.outline.strong }} />
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: space(2, true), mr: space(2, true) }}>
            <Box component="span" sx={{ fontSize: vars.font.size.sm, color: vars.color.text.muted }}>{dateRange(role)}</Box>
            <Box
              component="button"
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="icn"
              sx={{ width: 44, height: 44, p: 0, border: 0, borderRadius: "50%", bgcolor: "transparent", color: vars.color.text.secondary, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
              </svg>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: space(1) }}>
            <Box component="h3" id={titleId} sx={roleTitle}>{role.title}</Box>
            <MetaLine parts={[role.company, role.location]} sx={{ fontSize: vars.font.size.md, color: vars.color.accent.main }} />
          </Box>
          {role.highlight && <Box component="span" sx={highlightBadge}>{role.highlight}</Box>}
          {role.progression && (
            <Box component="span" sx={{ fontSize: vars.font.size.xs, lineHeight: 1.4, color: vars.color.text.muted }}>{role.progression}</Box>
          )}
          <Box
            component="ul"
            sx={{ m: 0, pl: space(5), display: "flex", flexDirection: "column", gap: space(3), ...typeStyle("body1"), color: vars.color.text.secondary }}
          >
            {[...role.bullets, ...(role.moreBullets ?? [])].map((b) => (
              <li key={b}>{b}</li>
            ))}
          </Box>
          {role.tags.length > 0 && (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: space(2) }}>
              {role.tags.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </Box>
          )}
        </>
      )}
    </Drawer>
  );
}
