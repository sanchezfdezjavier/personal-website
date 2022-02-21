import styles from "./Projects.module.css";

import { projectsText, projects } from "../../config";

import ProjectCard from "../ProjectCard/ProjectCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionText from "../SectionText/SectionText";

export default function Projects() {
  const projectsList = projects.map((project) => {
    return (
      <ProjectCard
        key={project.title}
        image={project.image.src}
        title={project.title}
        projectLink={project.link}
      />
    );
  });
  return (
    <div className="section-container">
      <SectionTitle>Projects</SectionTitle>
      <div className="section-text__container">
        <SectionText>{projectsText}</SectionText>
      </div>
      <div className={styles["projects-grid"]}>{projectsList}</div>
    </div>
  );
}
