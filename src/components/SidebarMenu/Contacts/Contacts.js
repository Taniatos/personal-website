import React from "react";
import "./Contacts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
          I'm looking forward to getting in touch!
        </p>

        <a
          href="#"
          class="btn-flip"
          data-back="tanakorchyska@gmail.com"
          data-front="My email address"
        ></a>

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
