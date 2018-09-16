import React from "react";

const About = () => {
  return (
    <div className="container about">
      <h4>About</h4>

      <p>
        This WebbApp was developed by{" "}
        <a href="http://www.suarezluis.com/" target="blank">
          Luis Suarez
        </a>{" "}
        during the 4th Austin Diversity Hackathon.
      </p>
      <img className="hackImage" src="./img/hackathon.png" alt="" />
      <br />
      <p className="container">
        This hackathon is a celebration of diversity. Anyone who supports
        diversity is welcome — no matter your level of technical knowledge. They
        provide a space for people of all backgrounds who want to start building
        their tech portfolio or finish up a tech project while learning new
        skills. Previous experience in tech is **NOT** required. If you are an
        advanced coder, they are looking for mentors. They are also looking for
        volunteers. If you are nervous about attending a hackathon, just
        volunteer and see what it is all about!
      </p>
    </div>
  );
};

export default About;
