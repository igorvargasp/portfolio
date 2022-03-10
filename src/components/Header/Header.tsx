import React from "react";
import "./header.css";

interface HeaderProps {
  label: [];
  title: String;
}

const Header: React.FC<HeaderProps> = ({ label, title }) => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-items">
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              paddingLeft: "20%",
              gap: "3rem",
              paddingTop: "1%",
            }}
          >
            {label.map((item) => {
              return <li className="items-label">{item}</li>;
            })}
          </ul>
        </div>

        <div className="navbar-contact">
          <span className="contact-label">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
