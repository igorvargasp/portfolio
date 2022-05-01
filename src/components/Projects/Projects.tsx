import React from "react";
import "./Projects.css";
import { AiFillFolder } from "react-icons/ai";
import github from "../assets/img/GitHub-Logo.png";
import gitlab from "../assets/img/gitlab.png";
import linkdin from "../assets/img/linkedin-logo-png-1837.png";

const Projects: React.FC = () => {
  return (
    <div className="project-div">
      <div className="project-div-primary">
        <AiFillFolder size={"2vw"} />
        <h3 className="project-title">Projects</h3>
      </div>
      <div className="project-div-secondary">
        <a
          href="https://github.com/igorvargasp"
          className="project-div-logo-github"
        >
          <img src={github} alt="Github" className="img-github" />
        </a>
        <a
          href="https://gitlab.com/igor.paes"
          className="project-div-logo-gitlab"
        >
          <img src={gitlab} alt="Gitlab" className="img-gitlab" />
        </a>
        <a
          href="https://www.linkedin.com/in/igorvargasp/"
          className="project-div-logo-linkdin"
        >
          <img src={linkdin} alt="Linkdin" className="img-linkdin" />
        </a>
      </div>
    </div>
  );
};

export default Projects;
