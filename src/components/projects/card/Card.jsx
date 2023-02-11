import React from "react";

import graphic from "../../../assets/img/graphic.jpg";
import frontend from "../../../assets/img/frontend.jpg";
import backend from "../../../assets/img/backend.jpg";

import classes from "./Card.module.scss";

const Card = () => {
  const user = {
    github: "https://github.com/emptycastIe",
  };

  return (
    <div className={classes.card}>
      <div className={`${classes.flip__card}`}>
        <div className={`${classes.flip__card_container}`}>
          <div className={`${classes.card_front}`}>
            <figure>
              <div className={`${classes.img_bg}`}></div>
              <img src={graphic} alt={"logo"} />
              <figcaption>Graphic Design</figcaption>
            </figure>

            <ul className={`${classes.card__lists}`}>
              <li className={`${classes.card_list}`}>2D</li>
              <li className={`${classes.card_list}`}>3D</li>
              <li className={`${classes.card_list}`}>Illustration</li>
              <li className={`${classes.card_list}`}>UX/UI</li>
              <a
                href={user.github}
                className={`${classes.card_button}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View More
              </a>
            </ul>
          </div>

          <div className={`${classes.card_back}`}>
            <figure>
              <div className={`${classes.img_bg}`}></div>
              <img src={graphic} alt={"logo"} />
            </figure>

            <a
              href={user.github}
              className={`${classes.card_button}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>
          </div>
        </div>
      </div>

      <div className={`${classes.flip__card}`}>
        <div className={`${classes.flip__card_container}`}>
          <div className={`${classes.card_front}`}>
            <figure>
              <div className={`${classes.img_bg}`}></div>
              <img src={frontend} alt={"logo"} />
              <figcaption>Front End</figcaption>
            </figure>

            <ul className={`${classes.card__lists}`}>
              <li className={`${classes.card_list}`}>HTML</li>
              <li className={`${classes.card_list}`}>CSS</li>
              <li className={`${classes.card_list}`}>JavaScript</li>
              <li className={`${classes.card_list}`}>React</li>
              <a
                href={user.github}
                className={`${classes.card_button}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View More
              </a>
            </ul>
          </div>

          <div className={`${classes.card_back}`}>
            <figure>
              <div className={`${classes.img_bg}`}></div>
              <img src={frontend} alt={"logo"} />
            </figure>

            <a
              href={user.github}
              className={`${classes.card_button}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>
          </div>
        </div>
      </div>

      <div className={`${classes.flip__card}`}>
        <div className={`${classes.flip__card_container}`}>
          <div className={`${classes.card_front}`}>
            <figure>
              <div className={`${classes.img_bg}`}></div>
              <img src={backend} alt={"logo"} />
              <figcaption>Back End</figcaption>
            </figure>

            <ul className={`${classes.card__lists}`}>
              <li className={`${classes.card_list}`}>Express</li>
              <li className={`${classes.card_list}`}>MongoDB</li>
              <li className={`${classes.card_list}`}>TypeScript</li>
              <a
                href={user.github}
                className={`${classes.card_button}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                View More
              </a>
            </ul>
          </div>

          <div className={`${classes.card_back}`}>
            <figure>
              <div className={`${classes.img_bg}`}></div>
              <img src={backend} alt={"logo"} />
            </figure>

            <a
              href={user.github}
              className={`${classes.card_button}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              View More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
