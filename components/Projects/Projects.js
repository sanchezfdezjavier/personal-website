import styles from "./Projects.module.css";

import placeholderImg from "../../assets/projects-covers/website-crocos-project.jpg";

import ProjectCard from "../ProjectCard/ProjectCard";

export default function Projects() {
  return (
    <div className={styles["projects__container"]}>
      <h2 className="h2-subtitle">Projects</h2>
      <p>
        Et sunt qui labore enim eu enim laboris minim dolor. Occaecat enim nisi
        incididunt cupidatat. Deserunt et laboris Lorem enim occaecat sint velit
        deserunt proident in id deserunt reprehenderit.
      </p>
      <div className={styles["projects-grid"]}>
        <ProjectCard image={placeholderImg.src} title="NFT Collection" />
        <ProjectCard image={placeholderImg.src} title="NFT Collection" />
        <ProjectCard image={placeholderImg.src} title="NFT Collection" />
        <ProjectCard image={placeholderImg.src} title="NFT Collection" />
      </div>
    </div>
  );
}
