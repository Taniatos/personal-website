import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience-page">
      <h1 className="experience-page-header">Relevant work experience</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {/* Junior Front-End Developer */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Junior Front-End Developer
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <a
                href="https://www.wikibusines.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="experience-company-name"
              >
                Wikibusines
              </a>
              <h5 className="experience-years">Jun 2023 - present</h5>
              <ul className="experience-ul">
                <li className="experience-li">
                  contributing to the development of client websites and landing
                  pages by designing, writing, and implementing code snippets
                  and components (HTML, CSS, JS, React)
                </li>
                <li className="experience-li">
                  {" "}
                  collaborating with the team to enhance website functionality
                  and user experience
                </li>
                <li className="experience-li">
                  troubleshooting and debugging issues
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* HR & Reputation Manager */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              HR & Reputation Manager
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <a
                href="https://trionika.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="experience-company-name"
              >
                Trionika
              </a>
              <h5 className="experience-years">Feb 2019 - Apr 2023</h5>
              <ul className="experience-ul">
                <li className="experience-li">
                  recruiting and searching for new partners for specific
                  projects
                </li>
                <li className="experience-li">
                  {" "}
                  improving the website's reputation - professional processing
                  of user reviews on popular platforms, including Sitejabber,
                  Glassdoor, and Trustpilot; motivation of partners to leave
                  feedback regarding cooperation
                </li>
                <li className="experience-li">
                  designing content in Figma and creating monthly content plans
                  for the company's corporate pages on Facebook, Twitter, and
                  Instagram
                </li>
                <li className="experience-li">
                  writing technical tasks for the IT Department
                </li>
                <li className="experience-li">
                  participation in strategic sessions for drawing up a company
                  development plan and product & service improvement,
                  identification of risks and problems, as well as generation of
                  ideas for their elimination
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Customer Support Representative */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Customer Support Representative
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <a
                href="https://trionika.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="experience-company-name"
              >
                Trionika
              </a>
              <h5 className="experience-years">Sep 2017 - Feb 2019</h5>
              <ul className="experience-ul">
                <li className="experience-li">
                  management of customers' orders from the moment of their
                  creation to completion and customer support throughout this
                  entire cycle
                </li>
                <li className="experience-li">
                  providing assistance via live chat, email, and over the phone
                </li>
                <li className="experience-li">
                  mentoring new members of the team
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
