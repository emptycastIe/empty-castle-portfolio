import React, { useState } from "react";

import Social from "./Social";
import logo from "./img/logo.jpg";
import "./Header.css";

const Header = () => {
  // NOTE: Toggle menu
  const [toggle, setToggle] = useState(false);

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          <img src={logo} alt={'Logo'} className="logo__img" />
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list">
            <li className="nav__list__item">
              <a href="#home" className="nav__link active-link underlined">
                <i className="bi bi-house nav__icon"></i>
                Home
              </a>
            </li>

            <li className="nav__list__item">
              <a href="#projects" className="nav__link active-link underlined">
                <i className="bi bi-file-code nav__icon"></i>
                Projects
              </a>
            </li>

            <li className="nav__list__item">
              <a href="#skills" className="nav__link active-link underlined">
                <i className="bi bi-boxes nav__icon"></i>
                Skills
              </a>
            </li>

            <li className="nav__list__item">
              <a
                href="#contact"
                className="nav__link active-link contact"
              >
                <i className="bi bi-send nav__icon"></i>
                Contact
              </a>
            </li>
          </ul>

          <i
            className="bi bi-x nav__close"
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <Social />

        <div className="nav__toggle" onClick={() => setToggle(!toggle)}>
          <i className="bi bi-list"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
