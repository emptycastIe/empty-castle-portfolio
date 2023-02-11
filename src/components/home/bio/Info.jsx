import React, { useState } from "react";

import InfoLetter from "./InfoLetter";
import Subtitle from "./Subtitle";
import Contact from "../../contact/Contact";
import "./Info.scss";

const Info = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="home__info flex flex--direction--column">
      <Subtitle />

      <InfoLetter />

      <div className="home__description">
        I'm a graphic designer, UX/UI designer, and web developer based in
        Minnesota. I'm very <span>passionate</span> and <span>dedicated</span>{" "}
        to my work.
      </div>

      <button className="button button--talk" onClick={() => setIsOpen(true)}>
        Let's Talk &rarr;
      </button>
      {isOpen && <Contact onClose={setIsOpen} />}
    </div>
  );
};

export default Info;
