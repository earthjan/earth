import publishedContents from "../assets/webps/content_list_published_contents.webp";
import trendingEduclips from "../assets/webps/educlip_trending_list.webp";
import addingAdmin from "../assets/webps/adding_admin.webp";
import cyberLife from "../assets/webps/cyberLife.webp";

export type Project = {
  title: string;
  /** Small uppercase line above the title, parts are divided. */
  eyebrow?: string[];
  /** Filled badge over the media. */
  badge?: string;
  description: string;
  chips: (string | string[])[];
  images: { src: string; alt: string }[];
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: "BayanEd Admin Panel",
    badge: "Built & maintained by me",
    description:
      "Allows the non-profit Bayan Family of Foundations to publish free and paid video courses, upload short videos to promote courses, create vouchers for subscriptions and paid course access, and manage users and 7 admins.",
    chips: ["5 large features", "1,944 tests", ["React", "MUI", "TypeScript"]],
    images: [
      { src: publishedContents, alt: "List of published contents" },
      { src: trendingEduclips, alt: "List of trending Educlips" },
      { src: addingAdmin, alt: "A modal to add an admin" },
    ],
  },
  {
    title: "CyberLife",
    eyebrow: ["Thesis prototype", "2 weeks"],
    description:
      "Allows users to have their own public page, manage this page, and sign in with simple email/password authentication. Built for the thesis of 5 BS Business Administration students.",
    chips: [["Next.js", "MUI", "TypeScript"]],
    images: [{ src: cyberLife, alt: "Mockups of CyberLife" }],
    link: { label: "Try app", href: "https://cyberlife-web.vercel.app/" },
  },
];
