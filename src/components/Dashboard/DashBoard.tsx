import React from "react";

interface HeaderProps {
  label: [];
  title: String;
}

const DashBoard: React.FC<HeaderProps> = ({ label, title }) => {
  return (
    <div className="header">
      <div className="container-title">
        <span className="title">{title}</span>
      </div>

      <div className="header-items">
        <ul className="list-ul">
          {label.map((item) => {
            return <li className="list-items">{item}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;
