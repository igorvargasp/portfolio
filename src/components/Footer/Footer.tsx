import React from "react";
import { AiFillContacts } from "react-icons/ai";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-contact-div">
        <AiFillContacts size="4vh" color="#F4DB7D" />
        <span
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            fontFamily: "Roboto",
            color: "#F4DB7D",
          }}
        >
          Contact
        </span>
      </div>
      <div className="footer-content-div">
        <div className="footer-form">
          <input placeholder="Name" className="input-style" />
          <input placeholder="E-mail" className="input-style" />
          <textarea placeholder="Message" className="input-style-textarea" />
          <button type="submit" className="btn-footer">
            Send
          </button>
        </div>
        <div className="footer-img">
          <img
            src={require("../assets/img/kisspng-information-technology-software-development-emergi-information-technology-5b0bd7d0aa2d01.0614660615275028006971.png")}
            alt="img"
            style={{
              marginBottom: "2rem",
              position: "absolute",
              bottom: "5rem",
              width: "30vw",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
