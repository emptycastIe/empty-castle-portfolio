import React from "react";

import Card from "./card/Card";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects section">
      <div>
        <p className="small__subtitle">
          My Recent Work
        </p>
        <h1 className="big__title">
          Projects
        </h1>
      </div>

      <Card />
    </section>
  );
};

export default Projects;
