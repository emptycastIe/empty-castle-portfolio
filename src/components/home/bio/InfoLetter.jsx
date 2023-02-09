import React from 'react'

import './InfoLetter.scss';

export const InfoLetter = () => {
  return (
    <div className="home__titles flex flex--direction--column">
      <h1 className="home__title home__title-early">
        <p>
          Developer<span>&</span>
        </p>
      </h1>
      <h1 className="home__title home__title-late">
        <p>
            Designer
        </p>
      </h1>
    </div>
  );
};

export default InfoLetter;
