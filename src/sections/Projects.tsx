import { useState } from "react";
import { SectionNav } from "../components/SectionNav";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { Section } from "../utils/sections";

type Project = {
  title: string;
  description: string;
  link?: string;
  technologies: Technologies[];
};

interface ProjectProps {
  onIntersect: (isIntersecting: boolean) => void;
}

enum Technologies {
  TYPESCRIPT = "TypeScript",
  REACT = "React",
  SWIFT = "Swift",
  NODE = "Node",
  CSS = "CSS",
  MONGODB = "MongoDB",
  EXPRESS = "Express",
  COMBINE = "Combine",
  UIKIT = "UIKit",
  SWIFTUI = "SwiftUI",
  TAILWIND = "Tailwind",
}

export function Projects({ onIntersect }: ProjectProps) {
  const ref = useIntersectionObserver(onIntersect);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const projects: Project[] = [
    {
      title: "MpScorecard",
      description:
        "A static site where you can enter your postcode to see how your MP stacks up on several pivotal votes.",
      technologies: [Technologies.TYPESCRIPT],
      link: "https://mpreportcard.netlify.app/",
    },
    {
      title: "Remember to Vote",
      description:
        "A tool to get an SMS or WhatsApp reminder about your nearest polling station on election day.",
      technologies: [Technologies.TYPESCRIPT],
      link: "https://remembertovote.org.uk/",
    },
    {
      title: "NTSU",
      description:
        "NTSU radio companion app which allows users to listen to songs on different platforms",
      technologies: [
        Technologies.NODE,
        Technologies.REACT,
        Technologies.MONGODB,
        Technologies.EXPRESS,
      ],
    },
  ];

  const projectCards = projects.map((project, index) => (
    <div key={index} className="project-card">
      {project.link && (
        <a href={project.link} target="_blank" rel="noreferrer">
          <h3 className="">{project.title}</h3>
        </a>
      )}
      <p>{project.description}</p>
      <div className="technologies">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className={`tech-tag ${hoveredSkill === tech ? "highlight" : ""}`}
            onMouseEnter={() => setHoveredSkill(tech)}
            onMouseLeave={() => setHoveredSkill(null)}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  ));

  return (
    <section id={Section.PROJECTS} ref={ref} className="section">
      <SectionNav navigateToSection={Section.ABOUT} />
      <h2 id="projects-title">Projects</h2>
      <div className="projects-grid">{projectCards}</div>
      <SectionNav navigateToSection={Section.CONTACT} />
    </section>
  );
}
