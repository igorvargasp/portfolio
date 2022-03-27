import React from "react";
import "./Projects.css";
import { AiFillFolder } from "react-icons/ai";

const Projects: React.FC = () => {
  return (
    <div className="project-div">
      <div className="project-div-primary">
        <AiFillFolder size={"2vw"} />
        <h3>Projects</h3>
      </div>
      <div className="project-div-secondary">
        <a
          href="https://github.com/igorvargasp"
          className="project-div-logo-github"
        >
          <img
            src={require("../assets/img/GitHub-Logo.png")}
            alt="Github"
            className="img-github"
          />
        </a>
        <a
          href="https://gitlab.com/igor.paes"
          className="project-div-logo-gitlab"
        >
          <img
            src={require("../assets/img/gitlab.png")}
            alt="Gitlab"
            className="img-gitlab"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/igorvargasp/"
          className="project-div-logo-linkdin"
        >
          <img
            src={require("../assets/img/linkedin-logo-png-1837.png")}
            alt="Linkdin"
            className="img-linkdin"
          />
        </a>
      </div>
    </div>
  );
};

export default Projects;
