import React from "react";
import { itemsHeader } from "./itemsHeader";
import "./header.css";
import { AiFillContacts } from "react-icons/ai";

const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="navbar">
        <div className="navbar-items ">
          <ul className="nav-ul">
            {itemsHeader.map(({ label, icon }) => {
              return (
                <li className="items-label">
                  <div className="icon-items">{icon}</div>
                  <span>{label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="navbar-contact">
          <div className="icon-contact">
            <AiFillContacts size="2vh" color="white" />
          </div>
          <span>Contact</span>
        </div>
      </div>

      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Welcome To My Portfolio</span>
          <span className="heading-primary-sub">
            Here you can know everything about me!
          </span>
        </h1>
        <div className="text-box-footer">
          <span className="btn-text-box">Download</span>
          <span className="c-label">You can find my curriculum here</span>
        </div>
      </div>
      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
