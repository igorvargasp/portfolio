import React from "react";
import "./Skills.css";

const Skill: React.FC = () => {
  return (
    <div className="skill-outer-div">
      <div className="skill-title">
        <span>Skills</span>
      </div>
      <div>
        <div>
          <img
            alt="image"
            src={require("../assets/img/785a1b9c359640da6bc9cfe3670b42ba.png")}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Skill;
