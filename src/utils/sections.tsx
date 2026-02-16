export enum SECTION {
  MAIN = "main-section",
  ABOUT = "about-section",
  PROJECTS = "projects-section",
  CONTACT = "contact-section",
}

export const sectionNames: { [key in SECTION]: string } = {
  [SECTION.MAIN]: "🍊",
  [SECTION.ABOUT]: "About",
  [SECTION.PROJECTS]: "Projects",
  [SECTION.CONTACT]: "Contact",
};
