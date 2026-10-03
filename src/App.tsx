import { Box } from "@mui/material";

import Hero from "./components/hero/Hero";
import AppBar from "./components/AppBar";
import Overview from "./components/sections/Overview";
import Experience from "./components/sections/Experience";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import Education from "./components/sections/Education";
import Footer from "./components/sections/Footer";
import { vars } from "./theme/tokens";

export default function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: vars.color.surface["0"], color: vars.color.text.primary, fontFamily: vars.font.text }}>
      <a className="skip-link" href="#overview">
        Skip to content
      </a>
      <Hero />
      <AppBar />
      <main>
        <Overview />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer />
    </Box>
  );
}
