export type Role = {
  title: string;
  company: string;
  location: string;
  start: string;
  /** Omit for the current role; renders the "Present" chip. */
  end?: string;
  /** e.g. "Software Engineer II → Technical Lead (Nov 2025)" */
  progression?: string;
  highlight?: string;
  bullets: string[];
  /** Revealed by "Show more". */
  moreBullets?: string[];
  tags: string[];
  /** Larger card with full detail. */
  featured?: boolean;
  /** Mobile timeline strip: point label ("Present" or start year) and short company name. */
  node: string;
  shortCompany: string;
  /** Mobile card: three key numbers taken from the bullets; the bullets open in the details sheet. */
  stats?: { value: string; label: string }[];
};

export const experience: Role[] = [
  {
    title: "Senior Software Engineer",
    company: "Home Trades Hub Australia",
    location: "Melbourne, VIC",
    start: "May 2026",
    bullets: [],
    tags: [],
    node: "Present",
    shortCompany: "HTHA",
  },
  {
    title: "Technical Lead",
    company: "Samsung Electronics",
    location: "Philippines",
    start: "Aug 2025",
    end: "May 2026",
    progression: "Software Engineer II → Technical Lead (Nov 2025)",
    highlight: "Promoted to Tech Lead within the first month",
    featured: true,
    bullets: [
      "Built 10 production features for Samsung b.IoT across 6 two-week sprints, enabling operators to monitor and control building appliances through a React web application.",
      "Coordinated a 5-member frontend team and collaborated with international cross-functional teams, successfully delivering 4 high-impact features under shared timelines.",
      "Established frontend sprint workflows, coding standards, and review practices, improving delivery predictability and code quality across the team.",
    ],
    moreBullets: [
      "Collaborated closely with backend engineers to define and align API contracts using Swagger, simplifying frontend state management and integration.",
      "Influenced and drove team execution within the first month, resulting in promotion to Tech Lead, measured by consistent feature delivery across the first 2 sprints.",
    ],
    tags: ["React", "TypeScript", "Swagger", "Team leadership"],
    node: "2025",
    shortCompany: "Samsung",
    stats: [
      { value: "10", label: "features shipped" },
      { value: "5", label: "member team" },
      { value: "6", label: "two-week sprints" },
    ],
  },
  {
    title: "Mid Level Front End Engineer",
    company: "Digitalinnov",
    location: "Pasay, PH",
    start: "Jun 2022",
    end: "Jul 2025",
    progression: "Front End Engineer → Mid Level Front End Engineer (Oct 2022)",
    bullets: [
      "Built BayanEd Admin Panel, a complex web app, in 8 months with 5 large features, 5,868 lines of code, and 1,944 tests for the non-profit Bayan Family of Foundations.",
      "Built a prototype of CyberLife, a link-in-bio solution web app, in 2 weeks with 3 medium features for the thesis of 5 BS Business Administration students.",
    ],
    tags: ["React Admin", "MUI", "TanStack Query", "Vitest", "Figma"],
    node: "2022",
    shortCompany: "Digitalinnov",
    stats: [
      { value: "8 mo", label: "BayanEd build" },
      { value: "1,944", label: "tests written" },
      { value: "2 wk", label: "CyberLife prototype" },
    ],
  },
];
