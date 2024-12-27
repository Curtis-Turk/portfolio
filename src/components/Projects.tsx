import React from "react";
import { Section } from "../Section";
import { SectionNav } from "./SectionNav";

type Project = {
  title: string;
  description: string;
  technologies: string[];
};

export const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "Weather App",
      description:
        "Real-time weather application that displays forecast data using external API integration.",
      technologies: ["Swift", "REST API", "Combine", "UIKit"],
    },
    {
      title: "NTSU",
      description:
        "NTSU radio companion app which allows users to listen to songs on different platforms",
      technologies: ["Node.js", "React", "MongoDB", "Express"],
    },
    {
      title: "Portfolio Website",
      description: "A personal website to showcase my favourite projects",
      technologies: ["React", "TypeScript", "CSS"],
    },
  ];

  return (
    <section id="projects-section">
      <h2 id="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <SectionNav currentSection={Section.PROJECTS} />
    </section>
  );
};
