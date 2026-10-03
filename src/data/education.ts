export const degree = {
  title: "BS Information Technology",
  school: "Philippine State College of Aeronautics",
  years: "2018 - 2022",
  honor: "Graduated with Academic Distinction",
  footnote:
    "On the Philippine grading scale, 1.00 is the highest possible grade. Relevant coursework in web development and database management.",
};

export type Award = {
  title: string;
  meta: string[];
  gwa: string;
  icon: "medal" | "trophy";
  primary?: boolean;
};

export const awards: Award[] = [
  {
    title: "Academic Distinction",
    meta: ["2022", "Institute of Computer Studies"],
    gwa: "1.55",
    icon: "medal",
    primary: true,
  },
  {
    title: "Dean's List",
    meta: ["2018", "Institute of Computer Studies"],
    gwa: "1.43",
    icon: "trophy",
  },
];

export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  credentialId: string;
  description: string;
  skills: string[];
};

export const certificationUrl = (c: Certification) =>
  `https://app.uxcel.com/certificates/${c.credentialId}`;

const UED = ["User Experience Design (UED)"];

export const certifications: Certification[] = [
  {
    name: "UX Writing",
    issuer: "Uxcel",
    issued: "Apr 2025",
    credentialId: "HXWDRGDWPRR6",
    description:
      "Earned my UX Writing course certificate, covering fundamentals of writing good microcopies and the impact of helper texts on user engagement and branding.",
    skills: UED,
  },
  {
    name: "Typography",
    issuer: "Uxcel",
    issued: "Apr 2025",
    credentialId: "KX7O8B27OVEW",
    description:
      "Earned a certificate course on core Typographic Principles, covering type anatomy, hierarchy, spacing, and effective use of typography in visual communication.",
    skills: UED,
  },
  {
    name: "Mobile Design",
    issuer: "Uxcel",
    issued: "Mar 2025",
    credentialId: "REPN0NMTQKKX",
    description:
      "Certified in mobile UX design, covering essential principles for designing intuitive experiences on mobile devices. Skills include optimizing small-screen interfaces, designing for on-the-go users, and creating seamless interactions across various mobile platforms.",
    skills: UED,
  },
  {
    name: "Common Design Patterns",
    issuer: "Uxcel",
    issued: "Feb 2025",
    credentialId: "46UMB9RRXMYC",
    description:
      "Certified in UX design patterns, covering best practices for landing pages, login/sign-up, checkout flows, email design, and common app features. Skilled in creating intuitive, user-friendly experiences across various digital interfaces.",
    skills: UED,
  },
  {
    name: "UX Design Patterns with Checklist Design",
    issuer: "Uxcel",
    issued: "Jan 2025",
    credentialId: "WP3BCHYVKS58",
    description:
      "Certified in UX design patterns, focusing on often-overlooked interactions like form submissions, payments, account actions, error handling, and user feedback. Skilled in creating seamless, intuitive experiences that enhance usability and engagement.",
    skills: UED,
  },
  {
    name: "UX Design Foundations",
    issuer: "Uxcel",
    issued: "Jan 2025",
    credentialId: "PIXUBSSRDDRB",
    description:
      "Earned my UX Design Foundations certificate, gaining a comprehensive understanding of user research, empathy mapping, wireframing, prototyping, and usability testing. Also learned core visual design principles such as color theory, typography, composition, iconography, and animation to create intuitive, user-friendly products. This course offered valuable insights into design roles, responsibilities, and real-world best practices for a successful UX career.",
    skills: UED,
  },
];
