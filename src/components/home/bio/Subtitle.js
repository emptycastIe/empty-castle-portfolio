import React from 'react'

import './Subtitle.css';

const Subtitle = () => {
  return (
    <div className="flex flex--gap">
      <h3 className="home__subtitle home__subtitle-developer">
        <span>Full Stack Developer</span>
      </h3>

      <h3 className="home__subtitle home__subtitle-designer">
        <span>UX/UI Designer</span>
      </h3>
    </div>
  );
};

export default Subtitle;