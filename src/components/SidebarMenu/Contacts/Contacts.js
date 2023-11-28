import React, { useState } from "react";
import "./Contacts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareBehance,
} from "@fortawesome/free-brands-svg-icons";

function Contacts() {

  const [copyText, setCopyText] = useState("tanakorchyska@gmail.com");


  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText("tanakorchyska@gmail.com");
      setCopyText("Copied!");
      setTimeout(() => setCopyText("tanakorchyska@gmail.com"), 3000); 
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <div className="contacts-page">
      <div className="contacts-box">
        <h1 className="contacts-header">Contact me</h1>
        <p className="contacts-subheader">
          I'm looking forward to getting in touch!
        </p>

        <button
          className="btn-flip"
          onClick={handleCopy}
          data-back={copyText}
          data-front="My email address"
        ></button>

        <div className="contacts-icons">
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
