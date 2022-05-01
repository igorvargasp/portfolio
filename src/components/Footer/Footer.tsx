import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { AiFillContacts } from "react-icons/ai";
import "./Footer.css";
import contact from "../assets/img/kisspng-information-technology-software-development-emergi-information-technology-5b0bd7d0aa2d01.0614660615275028006971.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { totalmem } from "os";

const Footer: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const sendMessage = () => {
    toast.loading("we are sending your message", {
      position: toast.POSITION.BOTTOM_CENTER,
    });

    if (
      name === undefined ||
      name === "" ||
      email === undefined ||
      email === "" ||
      message === undefined ||
      message === ""
    ) {
      return;
    }
    var data = {
      name: name,
      email: email,
      message: message,
    };
    emailjs
      .send("service_a0kjtww", "template_hw8y2k8", data, "avo2QEA49d1qlJ41X")
      .then(
        function (response) {
          toast.dismiss();
          toast.success("Message sent successfully!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          console.log("sucess", response.status, response.text);
        },
        function (err) {
          toast.dismiss();
          toast.error("Something went wrong, please try again!", {
            position: toast.POSITION.BOTTOM_CENTER,
          });
          console.log("failed", err);
        }
      );
  };

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
          <input
            placeholder="Name"
            className="input-style"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Your E-mail"
            className="input-style"
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className="input-style-textarea"
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            onClick={() => sendMessage()}
            type="submit"
            className="btn-footer"
          >
            Send
          </button>
          <ToastContainer />
        </div>
        <div className="footer-img">
          <img
            src={contact}
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
