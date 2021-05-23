import React from "react";
import icon1 from "../../images/placeImg.jpg";
import {
  ProjectContainer,
  ProjectWrapper,
  ProjectCard,
  ProjectH1,
  ProjectIcon,
  ProjectH2,
  ProjectP,
} from "./ProjectsElement";

const Projects = () => {
  return (
    <ProjectContainer id="work">
      <ProjectH1>Projects</ProjectH1>
      <ProjectWrapper>
        <ProjectCard>
          <ProjectIcon src={icon1} />
          <ProjectH2>Selected Work</ProjectH2>
          <ProjectP>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia conseuat duis enim velit mollit.
          </ProjectP>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={icon1} />
          <ProjectH2>Selected Work</ProjectH2>
          <ProjectP>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia conseuat duis enim velit mollit.{" "}
          </ProjectP>
        </ProjectCard>

        <ProjectCard>
          <ProjectIcon src={icon1} />
          <ProjectH2>Selected Work</ProjectH2>
          <ProjectP>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia conseuat duis enim velit mollit.{" "}
          </ProjectP>
        </ProjectCard>
      </ProjectWrapper>
    </ProjectContainer>
  );
};

export default Projects;
