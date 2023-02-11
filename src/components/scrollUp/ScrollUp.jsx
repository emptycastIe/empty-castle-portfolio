import React from 'react'

import './ScrollUp.css';

const ScrollUp = () => {
    window.addEventListener("scroll", function() {
        const scrollUp = document.querySelector(".scrollup");
        if(this.scrollY >= 560) {
            scrollUp.classList.add("show-scroll");
        } else {
            scrollUp.classList.remove("show-scroll");
        }
    });

  return (
    <>
      <a href="#home" className="scrollup">
        <i class="bi bi-arrow-up-square-fill"></i>
      </a>
    </>
  );
};

export default ScrollUp;