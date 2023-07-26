import { projectsText, projects } from "../config";

import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";
import SectionText from "./SectionText";

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
    <div className="mt-[10rem] flex w-11/12 flex-col items-start justify-center md:w-1/2">
      <SectionTitle>Projects</SectionTitle>
      <SectionText>{projectsText}</SectionText>
      <div className="grid grid-cols-1 gap-[3rem] md:grid-cols-2 lg:gap-[4rem]">
        {projectsList}
      </div>
    </div>
  );
}
