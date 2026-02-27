import { About } from "../sections/About";
import { Contact } from "../sections/Contact";
import Experiments from "../sections/Experiments";
import Main from "../sections/Main";
import { Projects } from "../sections/Projects";
import type { FC } from "react";

export enum SECTION {
  MAIN = "main",
  ABOUT = "about",
  PROJECTS = "projects",
  EXPERIMENTS = "experiments",
  CONTACT = "contact",
}

export type Section = {
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
  {
    id: SECTION.EXPERIMENTS,
    title: "Experiments",
    order: 3,
    component: Experiments,
  },
  { id: SECTION.CONTACT, title: "Contact", order: 4, component: Contact },
];
