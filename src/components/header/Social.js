import React from "react";

import "./Social.css";

const Social = () => {
    const user = {
        instagarm: "https://www.instagram.com/seong_bin__cho/",
        linkedIn: "https://www.linkedin.com/in/empty-seongbin",
        github: "https://github.com/emptycastIe",
        youtube: "https://www.youtube.com/@seong5195"
    };

  return (
    <ul class="wrapper">
      <li class="icon instagram">
        <span class="tooltip">Instagram</span>
        <span className="icon__span">
          <a href={user.instagarm} target="_blank" rel="noopener noreferrer">
            <i class="bi bi-instagram"></i>
          </a>
        </span>
      </li>

      <li class="icon linkedIn">
        <span class="tooltip">LinkedIn</span>
        <span className="icon__span">
          <a href={user.linkedIn} target="_blank" rel="noopener noreferrer">
            <i class="bi bi-linkedin"></i>
          </a>
        </span>
      </li>

      <li class="icon github">
        <span class="tooltip">Github</span>
        <span className="icon__span">
          <a href={user.github} target="_blank" rel="noopener noreferrer">
            <i class="bi bi-github"></i>
          </a>
        </span>
      </li>

      <li class="icon youtube">
        <span class="tooltip">Youtube</span>
        <span className="icon__span">
          <a href={user.youtube} target="_blank" rel="noopener noreferrer">
            <i class="bi bi-youtube"></i>
          </a>
        </span>
      </li>
    </ul>
  );
};

export default Social;
