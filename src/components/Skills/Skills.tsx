import React from "react";
import "./Skills.css";
import data, { SkillsProp } from "./ItemsSkills";
import { Rating } from "react-simple-star-rating";
import { AiFillSignal } from "react-icons/ai";

const Skill: React.FC = () => {
  return (
    <div className="skill-outer-div">
      <div className="skill-title">
        <AiFillSignal />
        <span>Skills</span>
      </div>
      <div className="skill-inner-div">
        <div className="skill-image">
          <img
            alt="image"
            src={require("../assets/img/785a1b9c359640da6bc9cfe3670b42ba.png")}
          />
        </div>
        <div className="skills-itens">
          <ul style={{ listStyleType: "none", padding: "3rem" }}>
            {data.map((item: SkillsProp) => {
              return (
                <div className="itens">
                  <li style={{ color: item.color }}>
                    {item.label}
                    <Rating
                      initialValue={item.rating}
                      ratingValue={0}
                      style={{ marginLeft: "0.5rem" }}
                      fillColor={item.color}
                    />
                  </li>
                </div>
              );
            })}
            <span
              style={{
                color: "white",
                fontWeight: "100",
                fontSize: "18px",
                paddingTop: "2rem",
              }}
            >
              Access my{" "}
              <a
                style={{
                  color: "#ff6a3d",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                href="#"
              >
                curriculum {""}
              </a>
              for more information!
            </span>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
