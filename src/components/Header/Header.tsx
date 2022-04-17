import React from "react";
import { itemsHeader } from "./itemsHeader";
import "./header.css";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-logo">
          <img
            src={require("../assets/img/—Pngtree—owl dark vector art_5057248.png")}
            alt="logo"
            className="navbar-logo-img"
          />
        </div>
        <div className="navbar-items ">
          <ul className="nav-ul">
            {itemsHeader.map(({ label, icon }) => {
              return (
                <li className="items-label" key={Math.random()}>
                  <div className="icon-items">{icon}</div>
                  {label}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-welcome">Welcome!</span>
          <span className="heading-primary-main">
            I'M
            <span style={{ color: "#FF6A3D" }}>fullstack</span> developer
          </span>
          <span className="heading-primary-sub ">
            Here you can know everything about me!
          </span>
        </h1>
        <div className="text-box-footer">
          <span
            className="btn-text-box"
            onClick={() => {
              console.log("ola");
            }}
          >
            Curriculum
          </span>
          <span className="c-label">Download here!</span>
        </div>
      </div>

      <div className="header-image">
        <img
          src={require("../assets/img/—Pngtree—network code application development_6245286.png")}
          alt="image"
        />
      </div>
    </div>
  );
};

export default Header;
