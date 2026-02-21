import { useState } from "react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { SECTION } from "../utils/sections";
import { nameEmojis } from "../utils/names";
import { useName } from "../hooks/NameContext";

type Project = {
  title: string;
  description: string;
  link?: string;
  technologies: Technologies[];
  image?: string;
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
  const { currentName } = useName();
  const projects: Project[] = [
    {
      title: "MpScorecard",
      description:
        "A static site where you can enter your postcode to see how your MP stacks up on several pivotal votes.",
      technologies: [Technologies.TYPESCRIPT],
      link: "https://mpreportcard.netlify.app/",
      image: "/MPScorecard.png",
    },
    {
      title: "Remember to Vote",
      description:
        "A tool to get an SMS or WhatsApp reminder about your nearest polling station on election day.",
      technologies: [Technologies.TYPESCRIPT],
      link: "https://remembertovote.org.uk/",
      image: "/RememberToVote.png",
    },
    {
      title: "NTSu",
      description:
        "NTSU radio companion app which allows users to listen to songs on different platforms",
      technologies: [
        Technologies.NODE,
        Technologies.REACT,
        Technologies.MONGODB,
        Technologies.EXPRESS,
      ],
      link: "https://github.com/Curtis-Turk/NTSu",
      image: "/NTSU.png",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((i) => (i - 1 + projects.length) % projects.length);
  const next = () => setCurrentIndex((i) => (i + 1) % projects.length);
  const goTo = (index: number) => setCurrentIndex(index);

  const currentProject = projects[currentIndex];

  const projectCard = (project: Project) => (
    <div className="project-card carousel-card">
      <button
        onClick={() => project.link && window.open(project.link, "_blank")}
      >
        <h3>{project.title}</h3>
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="project-image"
          />
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
      </button>
    </div>
  );

  return (
    <section id={SECTION.PROJECTS} ref={ref} className="section">
      <h2 id="projects-title">Projects</h2>

      <div className="projects-carousel">
        <button className="orange" onClick={prev} aria-label="Previous project">
          {nameEmojis[currentName].colourDot}
        </button>
        {projectCard(currentProject)}
        <button className="orange" onClick={next} aria-label="Next project">
          {nameEmojis[currentName].colourDot}
        </button>
      </div>

      <div className="carousel-indicators">
        {projects.map((_, idx) => (
          <button
            key={idx}
            className={`indicator ${idx === currentIndex ? "active" : ""}`}
            onClick={() => goTo(idx)}
            aria-label={`Go to project ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
