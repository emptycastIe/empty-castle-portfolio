import React from 'react';

import classes from './Footer.module.scss';

import logo from '../../assets/img/icon.png';

const Footer = () => {
    const user = {
      github: "https://github.com/emptycastIe"
    };

  return (
    <footer class={`${classes.footer}`}>
      <ul class={`${classes.footer__nav}`}>
        <li class={`${classes.footer__item}`}>
          <a class={`${classes.footer__link}`} href="#about">
            About
          </a>
        </li>
        <li class={`${classes.footer__item}`}>
          <a class={`${classes.footer__link}`} href="#projects">
            Projects
          </a>
        </li>
        <li class={`${classes.footer__item}`}>
          <a class={`${classes.footer__link}`} href="#skills">
            Skills
          </a>
        </li>
        <li class={`${classes.footer__item}`}>
          <a class={`${classes.footer__link}`} href="#home">
            Privacy Policy
          </a>
        </li>
        <li class={`${classes.footer__item}`}>
          <a class={`${classes.footer__link}`} href="#home">
            Terms of Use
          </a>
        </li>
      </ul>
      <img src={logo} alt="Logo" class={`${classes.footer__logo}`} />
      <p class={`${classes.footer__copyright}`}>
        All rights reserved &copy;&nbsp;
        <a
          class={`${classes.footer__link}`}
          target="_blank"
          href={user.github}
          rel="noopener noreferrer"
        >
          Empty Castle
        </a>
      </p>
    </footer>
  );
};

export default Footer;