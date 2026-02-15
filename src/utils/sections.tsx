export enum Section {
  MAIN = "main-section",
  ABOUT = "about-section",
  PROJECTS = "projects-section",
  CONTACT = "contact-section",
}

export const sectionNames: { [key in Section]: string } = {
  [Section.MAIN]: "🍊",
  [Section.ABOUT]: "About",
  [Section.PROJECTS]: "Projects",
  [Section.CONTACT]: "Contact",
};
