import React from "react";

import InfoLetter from "./InfoLetter.js";
import Subtitle from "./Subtitle.js";
import './Info.css';

const Info = () => {
  return (
    <div className="home__info flex flex--direction--column">
      <Subtitle />

      <InfoLetter />

      <div className="home__description">
          Hi! My name is Seongbin Cho from Seoul, South Korea. I am a graphic designer, UX/UI designer and full stack web developer.
      </div>

      <a href="#contact" className="button button--talk">
        Let's Talk &rarr;
      </a>
    </div>
  );
};

export default Info;
