import React from "react";

import classes from "./Social.module.scss";

const Social = () => {
    const user = {
        instagarm: "https://www.instagram.com/seong_bin__cho/",
        linkedIn: "https://www.linkedin.com/in/empty-seongbin",
        github: "https://github.com/emptycastIe",
        youtube: "https://www.youtube.com/@seong5195"
    };

  return (
    <ul class={`${classes.wrapper}`}>
      <li class={`${classes.icon} ${classes.instagram}`}>
        <span class={`${classes.tooltip}`}>Instagram</span>
        <span className={`${classes.icon__span}`}>
          <a href={user.instagarm} target="_blank" rel="noopener noreferrer">
            <i class="bi bi-instagram"></i>
          </a>
        </span>
      </li>

      <li class={`${classes.icon} ${classes.linkedIn}`}>
        <span class={`${classes.tooltip}`}>LinkedIn</span>
        <span className={`${classes.icon__span}`}>
          <a href={user.linkedIn} target="_blank" rel="noopener noreferrer">
            <i class="bi bi-linkedin"></i>
          </a>
        </span>
      </li>

      <li class={`${classes.icon} ${classes.github}`}>
        <span class={`${classes.tooltip}`}>Github</span>
        <span className={`${classes.icon__span}`}>
          <a href={user.github} target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
          </a>
        </span>
      </li>

      <li class={`${classes.icon} ${classes.youtube}`}>
        <span class={`${classes.tooltip}`}>Youtube</span>
        <span className={`${classes.icon__span}`}>
          <a href={user.youtube} target="_blank" rel="noopener noreferrer">
            <i class="bi bi-youtube"></i>
          </a>
        </span>
      </li>
    </ul>
  );
};

export default Social;
