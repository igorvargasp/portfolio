import React from "react";
import "./aboutMe.css";
import { AiOutlineUser } from "react-icons/ai";

const AboutMe: React.FC = () => {
  return (
    <div className="about-me-div">
      <div style={{ width: "100%", position: "relative" }}>
        <hr className="line" />
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginTop: "5px",
        }}
      >
        <div className="perfil-div">
          <img
            alt="teste"
            src={require("../assets/img/perfil.jpg")}
            className="perfil-photo"
          />
        </div>

        <div className="description-div">
          <div className="title-div">
            <AiOutlineUser size="2.5vw" style={{ color: "#9DAAF2" }} />
            <h3>ABOUT ME</h3>
          </div>
          <p>
            My name is igor, i’m software developer. I've started to learn how
            to code at my university where i graduated on 2022, majoring in
            internet systems. I've got a scholarship as a backend developer at
            compasso with a collab between my university and compasso. After 4
            months i've got hired as chatbot developer intern and then after 8
            months i've finished my internship on 2021. On december of 2021 i
            got hired full time as a cloud developer by IBM and it's where i
            work currently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
