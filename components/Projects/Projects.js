import styles from "./Projects.module.css";

import { projectsText } from "../../config";

import { Text } from "@nextui-org/react";

import placeholderImg from "../../assets/projects-covers/website-crocos-project.jpg";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionTitle from "../SectionTitle/SectionTitle";

export default function Projects() {
  return (
    <div className="section-container">
      <SectionTitle>Projects</SectionTitle>
      <p className="section-text">{projectsText}</p>

      <div className="section-text">
        <Text>{projectsText}</Text>
      </div>
      <div className={styles["projects-grid"]}>
        <ProjectCard image={placeholderImg.src} title="NFT Collection" />
        <ProjectCard image={placeholderImg.src} title="NFT Collection" />
        <ProjectCard image={placeholderImg.src} title="NFT Collection" />
        <ProjectCard image={placeholderImg.src} title="NFT Collection" />
      </div>
    </div>
  );
}
