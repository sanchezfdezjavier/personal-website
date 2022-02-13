import styles from "./Projects.module.css";

import { projectsText } from "../../config";

import { Text } from "@nextui-org/react";

import crocos from "../../assets/projects-covers/website-crocos-project.jpg";
import telecode from "../../assets/projects-covers/telecode.png";
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
        <ProjectCard image={crocos.src} title="NFT Collection" />
        <ProjectCard image={telecode.src} title="Hackthon" />
        <ProjectCard image={crocos.src} title="NFT Collection" />
        <ProjectCard image={crocos.src} title="NFT Collection" />
      </div>
    </div>
  );
}
