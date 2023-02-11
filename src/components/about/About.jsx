import React from "react";

import "./About.scss";
import Card from "./Card";
import Qualification from "./Qualification";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="about__header">
        <p className="small__subtitle">Get To Know</p>
        <h1 className="big__title">About Me</h1>
      </div>

      <Card />

      <div className="about__subtitle-2">
        <p>My Personal Journey</p>

        <p>(Click them to check out)</p>
      </div>

      <Qualification />
    </section>
  );
};

export default About;
