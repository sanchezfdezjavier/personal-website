import styles from "./Projects.module.css";

import { projectsText } from "../../config";

import placeholderImg from "../../assets/projects-covers/website-crocos-project.jpg";

import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className={styles["projects__container"]}>
      <h2 className="h2-subtitle">Projects</h2>
      <p>{projectsText}</p>
      <div className={styles["projects-grid"]}>
        <ProjectCard image={placeholderImg.src} title="NFT Collection" />
        <ProjectCard image={placeholderImg.src} title="NFT Collection" />
        <ProjectCard image={placeholderImg.src} title="NFT Collection" />
        <ProjectCard image={placeholderImg.src} title="NFT Collection" />
      </div>
    </div>
  );
}
