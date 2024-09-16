import React from "react";
import "./Experience.css";

function Experience() {
  return (
    <div className="experience-page">
      <h1 className="experience-page-header">Relevant work experience</h1>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {/* Chad Foundation*/}
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
              Web Developer
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <a
                href="https://www.facebook.com/profile.php?id=100063710691467"
                target="_blank"
                rel="noopener noreferrer"
                className="experience-company-name"
              >
                The Chad Foundation
              </a>
              <h5 className="experience-years">Nov 2023 - present</h5>
              <ul className="experience-ul">
                <li className="experience-li">
                  developed The CHAD's website using React
                </li>
                <li className="experience-li">
                  focused on translating complex design elements into a
                  user-friendly, responsive, functional website interface
                </li>
                <li className="experience-li">
                  worked closely with a team to execute design and functionality
                  specifications effectively
                </li>
                <li className="experience-li">
                  implemented updates and maintenance for the website in
                  alignment with the preferences and directives of the CHAD
                  Foundation owner additionally making UI/UX design decisions
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* AI Trainer - Web Developer */}
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
              AI Trainer - Web Developer
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <a
                href="https://outlier.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="experience-company-name"
              >
                Outlier
              </a>
              <h5 className="experience-years">February, 2024 - ongoing</h5>
              <ul className="experience-ul">
                <li className="experience-li">
                  facilitated Genesis AI's multifaceted development by
                  leveraging my web development expertise in creating complex
                  tasks for the model's training, ensuring its development
                </li>
                <li className="experience-li">
                  conducted detailed evaluations of the colleague's inputs and
                  AI-completed tasks, delivering comprehensive feedback, and
                  making suggestions for improvements in task design and
                  execution
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* Junior Front-End Developer */}
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
              Junior Front-End Developer
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
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
              <h5 className="experience-years">Jun 2023 - March, 2024</h5>
              <ul className="experience-ul">
                <li className="experience-li">
                  contributed to the development of client websites and landing
                  pages by designing, writing, and implementing code snippets
                  and components (HTML, CSS, JS, React)
                </li>
                <li className="experience-li">
                  collaborated with the team to improve website functionality
                  and user experience
                </li>
                <li className="experience-li">
                  troubleshot and debugged issues
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
              data-bs-target="#panelsStayOpen-collapseFour"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFour"
            >
              HR & Reputation Manager
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFour"
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
              <h5 className="experience-years">Feb 2019 - Jul 2022</h5>
              <ul className="experience-ul">
                <li className="experience-li">
                  recruited and searched for new partners for specific projects
                </li>
                <li className="experience-li">
                  improved the website's reputation - professionally processed
                  user reviews on popular platforms, including Sitejabber,
                  Glassdoor, and Trustpilot; motivated partners to leave
                  feedback regarding cooperation
                </li>
                <li className="experience-li">
                  designed content in Figma and created monthly content plans
                  for the company's corporate pages on Facebook, Twitter, and
                  Instagram
                </li>
                <li className="experience-li">
                  wrote technical tasks for the IT Department
                </li>
                <li className="experience-li">
                  participated in strategic sessions for drawing up a company
                  development plan and product & service improvement, identified
                  risks and problems, as well as generated ideas for their
                  elimination
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
              data-bs-target="#panelsStayOpen-collapseFive"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseFive"
            >
              Customer Support Representative
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseFive"
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
                  managed customers' orders from the moment of their creation to
                  completion and provided customer support throughout this
                  entire cycle
                </li>
                <li className="experience-li">
                  managed customers' feedback and complaints
                </li>
                <li className="experience-li">
                  provided assistance via live chat, email, and over the phone
                </li>
                <li className="experience-li">
                  participated in teamwork and contributed to the achievement of
                  the overall company and team targets
                </li>
                <li className="experience-li">
                  mentored new members of the team
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
