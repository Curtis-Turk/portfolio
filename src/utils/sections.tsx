export enum SECTION {
  MAIN = "main-section",
  ABOUT = "about-section",
  PROJECTS = "projects-section",
  CONTACT = "contact-section",
}

export const SECTIONS = [
  { id: SECTION.MAIN, title: "🍊", order: 0 },
  { id: SECTION.ABOUT, title: "About", order: 1 },
  { id: SECTION.PROJECTS, title: "Projects", order: 2 },
  { id: SECTION.CONTACT, title: "Contact", order: 3 },
];
