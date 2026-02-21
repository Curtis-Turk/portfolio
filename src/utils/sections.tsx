import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import Main from "../sections/Main";
import { Projects } from "../sections/Projects";
import type { FC } from "react";

export enum SECTION {
  MAIN = "main",
  ABOUT = "about",
  PROJECTS = "projects",
  CONTACT = "contact",
}

type Section = {
  id: SECTION;
  title: string;
  order: number;
  component: FC<any>;
  showInNav?: boolean;
};

export const SECTIONS: Section[] = [
  { id: SECTION.MAIN, title: "🍊", order: 0, component: Main },
  { id: SECTION.ABOUT, title: "About", order: 1, component: About },
  { id: SECTION.PROJECTS, title: "Projects", order: 2, component: Projects },
  { id: SECTION.CONTACT, title: "Contact", order: 3, component: Contact },
];
