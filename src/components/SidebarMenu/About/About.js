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
              I am a Front-End Developer with more than one year of experience,
              complemented by a six-year background in the IT industry,
              including roles from Customer Support Representative to HR &
              Reputation Manager. This diverse experience has given me a broad
              perspective on different aspects of technology and user
              engagement.
            </p>
          </div>

          <div className="col-md-6">
            <p className="p-about">
              Alongside my front-end development skills, I have a strong
              foundation in UI/UX Design. I believe that understanding both is
              essential for creating effective and responsive websites. This
              combination of skills enables me to develop websites that are not
              only visually appealing but also provide an excellent user
              experience for our clients.
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
                HTML, CSS/SCSS, JavaScript, DOM Manipulation, React, Redux
                Basics, Back-End Basics, API, GitHub, Bootstrap, Hosting,
                Flexbox, Responsive Web Design, Figma, Adobe Photoshop, Adaptive
                Design, UI Design, UX Research, CJM, User Flows, Wireframing,
                Prototyping
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
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/758/original/10.png?1686165153"
                  title="Front-End Developer Certificate"
                  className="certificate-img"
                />
              </a>
              <a
                href="https://www.shecodes.io/certificates/c59b5f960e9b9c588c8b340d3b415f48"
                target="_blank"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/786/original/8.png?1686168778"
                  title="React Development Certificate"
                  className="certificate-img"
                />
              </a>
              <a
                href="https://www.shecodes.io/certificates/2e9750e04026ee23ed0f5ca2d143f52e"
                target="_blank"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/787/original/6.png?1686169038"
                  title="Responsive Web Development Certificate"
                  className="certificate-img"
                />
              </a>
              <a
                href="https://www.shecodes.io/certificates/52c6c8863207c60cc92e03cc33127f4e"
                target="_blank"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/788/original/4.png?1686169068"
                  title="Advanced Web Development Certificate"
                  className="certificate-img"
                />
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-89d13e8c-c724-40c0-8610-b9dd7439ae71/"
                target="_blank"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/096/157/original/udemy.png?1694132955"
                  title="Full Stack Web Development Certificate"
                  className="certificate-img"
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
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/782/original/UI_UX_Designer_Certificate_Tetiana_Korchynska.jpg?1686168107"
                  title="UI/UX Design Certificate"
                  className="certificate-img"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1ujrqOH-qoEM2XcWcJR96U9k2RVNDF2vw/view?usp=sharing"
                target="_blank"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/783/original/UI_UX_Designer_Certificate_Tetiana_Korchynska_pt1.jpg?1686168113"
                  title="UI/UX Supplement Pt.1"
                  className="certificate-img"
                />
              </a>
              <a
                href="https://drive.google.com/file/d/1s7qKLBHfCsrnwXnVg0-5XUlTbwytxMTZ/view?usp=sharing"
                target="_blank"
              >
                <img
                  src="https://s3.amazonaws.com/shecodesio-production/uploads/files/000/084/784/original/UI_UX_Designer_Certificate_Tetiana_Korchynska_pt2.jpg?1686168119"
                  title="UI/UX Supplement Pt.2"
                  className="certificate-img"
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
