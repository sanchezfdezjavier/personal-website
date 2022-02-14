import styles from "./Projects.module.css";

import { projectsText } from "../../config";

import { Text } from "@nextui-org/react";

import crocos from "../../assets/projects-covers/website-crocos-project.jpg";
import telecode from "../../assets/projects-covers/telecode.png";
import ProjectCard from "../ProjectCard/ProjectCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import SectionText from "../SectionText/SectionText";

export default function Projects() {
  return (
    <div className="section-container">
      <SectionTitle>Projects</SectionTitle>
      <div className="section-text__container">
        <SectionText>{projectsText}</SectionText>
      </div>
      <div className={styles["projects-grid"]}>
        <ProjectCard image={crocos.src} title="NFT Collection" />
        <ProjectCard image={telecode.src} title="Hackthon" />
      </div>
    </div>
  );
}
