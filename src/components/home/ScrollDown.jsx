import React from 'react'

import classes from './ScrollDown.module.scss';

const ScrollDown = () => {
  return (
    <div className={`${classes.home__scroll}`}>
      <a
        href="#about"
        className={`${classes.home__scroll_button} button--flex`}
      >
        <span>
          Click Me <i class="bi bi-arrow-down-short"></i>
        </span>
      </a>
    </div>
  );
};

export default ScrollDown;