export enum Section {
  MAIN = "main-section",
  ABOUT = "about-section",
  PROJECTS = "projects-section",
  CONTACT = "contact-section",
}

export const scrollToSection = (sectionId: Section) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
    });
  }
};
