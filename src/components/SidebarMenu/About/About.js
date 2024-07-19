import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="container">
        <h1 className="about-header">About</h1>
        {/* Description */}
        <div className="row">
          <div className="col-md-6">
            <p className="p-about">
              I am a Front-End Developer with over 7 years in the IT industry,
              including 2 years specializing in coding. I am now further
              enhancing my skills as a part-time student in Boston University's
              MS in Software Development program, one of the top 100
              universities globally. This program provides me with a highly
              demanded knowledge of computer language theory, algorithms,
              databases, networks, security, operating systems, and software
              development.
            </p>
          </div>

          <div className="col-md-6">
            <p className="p-about">
              Alongside my programming skills, I have a strong foundation in
              UI/UX Design. This combination of skills enables me to develop
              websites that are not only visually appealing but also provide an
              excellent user experience for the customers. My true passion lies
              in utilizing all my combined commercial experience and academic
              knowledge to build the most effective user interfaces and web
              applications.
            </p>
          </div>
        </div>
        {/* Skills */}
        <div className="row">
          <div className="col-md-6">
            <div className="p-about-header-div">
              <p className="p-about-header">Technical skills</p>
            </div>
            <div className="p-about-skills-div">
              <p className="p-about-skills">
                JavaScript, React.js, Node.js, Typescript, Python, HTML, CSS /
                SCSS, Responsive Web Design, Figma, UI/UX Design, UX Research,
                CJM, User Flows, Wireframing, Prototyping, GitHub, Bootstrap,
                Hosting, Visual Studio, Anaconda Navigator, Spyder IDE, Jira,
                Slack, Discourse, Discord
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="p-about-header-div">
              <p className="p-about-header">Soft skills</p>
            </div>
            <div className="p-about-skills-div">
              <p className="p-about-skills">
                Determined, enthusiastic, perceptive, flexible, and initiative
                in work; ability to work efficiently both individually and in a
                team; critical thinking and decision-making skills; willingness
                to learn fast; good sense of humor; excellent organizational and
                time-management skills
              </p>
            </div>
          </div>
        </div>
        {/* Certificates */}
        <div className="row">
          {/* Certificates Front-End */}
          <div className="col-md-6">
            <div className="certificates-box">
              <strong>Certifications in Front-End Development</strong>
              <br />
              <a
                href="https://www.shecodes.io/certificates/67082-tetiana-korchynska/max"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/758/original/10.png?1686165153"
                  title="Front-End Developer Certificate"
                  className="certificate-img"
                  alt="certificate"
                />
              </a>
              <a
                href="https://www.shecodes.io/certificates/c59b5f960e9b9c588c8b340d3b415f48"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/786/original/8.png?1686168778"
                  title="React Development Certificate"
                  className="certificate-img"
                  alt="certificate"
                />
              </a>
              <a
                href="https://www.shecodes.io/certificates/2e9750e04026ee23ed0f5ca2d143f52e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/787/original/6.png?1686169038"
                  title="Responsive Web Development Certificate"
                  className="certificate-img"
                  alt="certificate"
                />
              </a>
              <a
                href="https://www.shecodes.io/certificates/52c6c8863207c60cc92e03cc33127f4e"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/788/original/4.png?1686169068"
                  title="Advanced Web Development Certificate"
                  className="certificate-img"
                  alt="certificate"
                />
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-89d13e8c-c724-40c0-8610-b9dd7439ae71/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/096/157/original/udemy.png?1694132955"
                  title="Full Stack Web Development Certificate"
                  className="certificate-img"
                  alt="certificate"
                />
              </a>
            </div>
          </div>
          {/* Certificates UI/UX */}
          <div className="col-md-6">
            <div className="certificates-box">
              <strong>Certifications in UI/UX Design</strong>
              <br />
              <a
                href="https://drive.google.com/file/d/1qBgbpYqgVg7L3k8eJbeCUNi-eZmimamK/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/782/original/UI_UX_Designer_Certificate_Tetiana_Korchynska.jpg?1686168107"
                  title="UI/UX Design Certificate"
                  className="certificate-img"
                  alt="certificate"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1ujrqOH-qoEM2XcWcJR96U9k2RVNDF2vw/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/783/original/UI_UX_Designer_Certificate_Tetiana_Korchynska_pt1.jpg?1686168113"
                  title="UI/UX Supplement Pt.1"
                  className="certificate-img"
                  alt="certificate"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1s7qKLBHfCsrnwXnVg0-5XUlTbwytxMTZ/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/784/original/UI_UX_Designer_Certificate_Tetiana_Korchynska_pt2.jpg?1686168119"
                  title="UI/UX Supplement Pt.2"
                  className="certificate-img"
                  alt="certificate"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
