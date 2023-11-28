import React from "react";
import "./Contacts.css"; // Ensure this path is correct
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import {
  faLinkedin,
  faSquareGithub,
  faSquareBehance,
} from "@fortawesome/free-brands-svg-icons";

function Contacts() {
  return (
    <div className="contacts-page">
      <div className="contacts-box">
        <h1 className="contacts-header">Contact me</h1>
        <p className="contacts-subheader">
          I'm looking forward to get in thouch!
        </p>
        <div className="contacts-email">
          <a
            href="mailto:[tanakorchynska@gmal.com]"
            className="contacts-email-address"
          >
            tanakorchynska@gmail.com
          </a>
       
          <FontAwesomeIcon icon={faCopy} />
        </div>
        <div className="contacts-icons">
          {" "}
          <a
            href="https://www.linkedin.com/in/tetiana-korchynska/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://github.com/Taniatos"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSquareGithub} />
          </a>
          <a
            href="https://www.behance.net/0031c316"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faSquareBehance} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
