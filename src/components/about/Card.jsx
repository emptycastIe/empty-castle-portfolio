import React from "react";

import img from "../../assets/img/me.jpg";
import classes from './Card.module.scss';

const Card = () => {
  return (
    <div className={`${classes.about__card}`}>
      <div className={`${classes.about__card_front}`}>
        <div className={`${classes.about__card_user}`}>
          <div>
            <div className={`${classes.about__card_title}`}>Web Developer</div>
          </div>

          <div>
            <img src={img} alt="img" className={`${classes.about__card_img}`} />
          </div>

          <div>
            <div className={`${classes.about__card_location}`}>
              Rochester, MN
            </div>
          </div>
        </div>

        <div className={`${classes.about__card_info}`}>
          <h1 className="name">Seongbin Cho</h1>

          <div className={`${classes.coords}`}>
            <span>RCTC / Wionna State 2+2</span>
            <span>Joined in September, 2019</span>
          </div>

          <div className={`${classes.coords}`}>
            <span>Computer Science</span>
            <span>Seoul, Korea</span>
          </div>

          <div className={`${classes.stats}`}>
            <div>
              <div className={`${classes.about__card__green_title}`}>
                Experience
              </div>
              <i className="bi bi-lightbulb-fill"></i>
              <div className={`${classes.about__card__green_value}`}>0+ Years</div>
            </div>
            <div>
              <div className={`${classes.about__card__green_title}`}>Completed</div>
              <i className="bi bi-check-square-fill"></i>
              <div className={`${classes.about__card__green_value}`}>
                0+ Projects
              </div>
            </div>
            <div>
              <div className={`${classes.about__card__green_title}`}>Support</div>
              <i className="bi bi-headset"></i>
              <div className={`${classes.about__card__green_value}`}>
                Online 24/7
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`${classes.about__card_back}`}>
        <div></div>

        <div className={`${classes.about__card_back_info}`}>
          <h1>Seongbin Cho</h1>
          <p>
            Full Stack Developer & UX/UI Designer. I create web pages with UX/UI
            designs. I'm very passionate about developing my skills and learning
            new things.
          </p>
          <span>
            <i className="bi bi-check-circle"></i>
            Move your cursor over the green card for more information.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
