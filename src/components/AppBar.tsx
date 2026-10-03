import { Box, Button } from "@mui/material";

import { navLinks } from "../data/profile";
import { space, typeStyle, vars } from "../theme/tokens";

/** Sits under the hero and sticks to the top once scrolled past it (like the original site). */
export default function AppBar() {
  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        bgcolor: vars.color.surface.appBar,
        backdropFilter: "blur(8px)",
        boxShadow: vars.elevation["4"],
      }}
    >
      <Box
        component="nav"
        aria-label="Primary"
        sx={{
          maxWidth: vars.container,
          mx: "auto",
          height: 64,
          px: space(6),
          display: "flex",
          alignItems: "center",
          gap: space(4),
        }}
      >
        <Box
          component="a"
          className="brand"
          href="#top"
          sx={{ ...typeStyle("brand"), textDecoration: "none", color: vars.color.steel["50"], whiteSpace: "nowrap" }}
        >
          Earth Jan Baquir Marzan
        </Box>
        <Box className="navlinks" sx={{ ml: "auto", display: "flex", gap: space(1) }}>
          {navLinks.map((link) => (
            <Box
              component="a"
              key={link.href}
              className="navlink"
              href={link.href}
              sx={{
                p: `${space(3)} ${space(4)}`,
                borderRadius: vars.radius.sm,
                ...typeStyle("button"),
                textDecoration: "none",
                color: vars.color.text.secondary,
              }}
            >
              {link.label}
            </Box>
          ))}
        </Box>
        <Button variant="contained" size="medium" href="#contact" sx={{ ml: space(2), boxShadow: "none" }}>
          Let&apos;s connect
        </Button>
      </Box>
    </Box>
  );
}
