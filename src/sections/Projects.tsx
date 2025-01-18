import { Section, SectionNav } from "../components/SectionNav";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

type Project = {
  title: string;
  description: string;
  technologies: string[];
};

interface ProjectProps {
  onIntersect: (isIntersecting: boolean) => void;
}

export function Projects({ onIntersect }: ProjectProps) {
  const ref = useIntersectionObserver(onIntersect);

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
    <section id={Section.PROJECTS} ref={ref} className="section">
      <SectionNav navigateToSection={Section.ABOUT} />
      <h2 id="projects-title">Projects</h2>
      <div className="skills">
        <div className="technologies">
          {["TypeScript", "React", "Node.js", "Swift", "CSS"].map(
            (skill, index) => (
              <span key={index} className="tech-tag">
                {skill}
              </span>
            )
          )}
        </div>
      </div>
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
      <SectionNav navigateToSection={Section.CONTACT} />
    </section>
  );
}
