import React, { useState } from "react";

import Social from "./Social";
import Contact from "../contact/Contact";
import classes from "./Header.module.scss";

const Header = () => {
  // NOTE: Toggle menu
  const [toggle, setToggle] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`${classes.header}`}>
      <nav className={`${classes.nav} container`}>
        <div>
          <a
            href="index.html"
            className={`${classes.nav__logo} ${classes.underlined}`}
          >
            <span>Empty Castle</span>
          </a>
        </div>

        <div
          className={
            toggle
              ? `${classes.nav__menu} ${classes.show_menu}`
              : `${classes.nav__menu}`
          }
        >
          <ul className={`${classes.nav__list}`}>
            <li className={`${classes.nav__list__item}`}>
              <a
                href="#about"
                className={`${classes.nav__link} ${classes.active_link} ${classes.underlined}`}
              >
                <i className={`bi bi-person ${classes.nav__icon}`}></i>
                About
              </a>
            </li>

            <li className={`${classes.nav__list__item}`}>
              {" "}
              <a
                href="#projects"
                className={`${classes.nav__link} ${classes.active_link} ${classes.underlined}`}
              >
                <i className={`bi bi-file-code ${classes.nav__icon}`}></i>
                Projects
              </a>
            </li>

            <li className={`${classes.nav__list__item}`}>
              {" "}
              <a
                href="#skills"
                className={`${classes.nav__link} ${classes.active_link} ${classes.underlined}`}
              >
                <i className={`bi bi-boxes ${classes.nav__icon}`}></i>
                Skills
              </a>
            </li>

            <li className={`${classes.nav__list__item}`}>
              {" "}
              <button
                className={`${classes.contact__button}`}
                onClick={() => setIsOpen(true)}
              >
                <i className={`bi bi-send ${classes.nav__icon}`}></i>
                Contact
              </button>
              {isOpen && <Contact onClose={setIsOpen} />}
            </li>
          </ul>

          <i
            className={`bi bi-x ${classes.nav__close}`}
            onClick={() => setToggle(!toggle)}
          ></i>
        </div>

        <Social />

        <div
          className={`${classes.nav__toggle}`}
          onClick={() => setToggle(!toggle)}
        >
          <i className="bi bi-list"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
