import React from 'react'

import classes from './HomeImg.module.scss';

const HomeImg = () => {
  return (
    <div className={`${classes.home__img} ${classes.flying}`}>
      <div className={`${classes.home__img_circle_purple}`}></div>
      <div className={`${classes.home__img_circle_green}`}></div>
      <div className={`${classes.home__img_circle_red}`}></div>
    </div>
  );
};

export default HomeImg;