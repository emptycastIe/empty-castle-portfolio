import React, { useState } from "react";

import classes from "./Qualification.module.scss";

const Qualification = () => {
  const [toggle, setToggle] = useState(true);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <div className={`${classes.qualification}`}>
      <div className={`${classes.qualification__container}`}>
        <div className={`${classes.qualification__tabs}`}>
          <div
            className={
              toggle === true
                ? `${classes.qualification__button} ${classes.qualification__active}`
                : `${classes.qualification__button}`
            }
            onClick={() => toggleTab(true)}
          >
            <i
              className={`bi bi-mortarboard ${classes.qualification__icon}`}
            ></i>
            &nbsp;Education
          </div>

          <div
            className={
              toggle === false
                ? `${classes.qualification__button} ${classes.qualification__active}`
                : `${classes.qualification__button}`
            }
            onClick={() => toggleTab(false)}
          >
            <i className={`bi bi-buildings ${classes.qualification__icon}`}></i>
            &nbsp;Experience
          </div>
        </div>

        <div className={`${classes.qualification__sections}`}>
          <div
            className={
              toggle === true
                ? `${classes.qualification__content} ${classes.qualification__content_active}`
                : `${classes.qualification__content}`
            }
          >
            <div className={`${classes.qualification__data}`}>
              <div>
                <h3 className={`${classes.qualification__title}`}>
                  Winona State University
                </h3>

                <span className={`${classes.qualification__subtitle}`}>
                  Bachelor's Degree
                </span>

                <div className={`${classes.qualification__calender}`}>
                  <i className="bi bi-calendar"></i>
                  &nbsp;2023 - present
                </div>
              </div>

              <div>
                <span className={`${classes.qualification__rounder}`}></span>
                <span className={`${classes.qualification__line}`}></span>
              </div>
            </div>

            <div className={`${classes.qualification__data}`}>
              <div></div>

              <div>
                <span className={`${classes.qualification__rounder}`}></span>
                <span className={`${classes.qualification__line}`}></span>
              </div>

              <div>
                <h3 className={`${classes.qualification__title}`}>RCTC</h3>

                <span className={`${classes.qualification__subtitle}`}>
                  Associate's Degree
                </span>

                <div className={`${classes.qualification__calender}`}>
                  <i className="bi bi-calendar"></i>
                  &nbsp;2022 - 2022
                </div>
              </div>
            </div>

            <div className={`${classes.qualification__data}`}>
              <div>
                <h3 className={`${classes.qualification__title}`}>RCTC</h3>

                <span className={`${classes.qualification__subtitle}`}>
                  Associate's Degree
                </span>

                <div className={`${classes.qualification__calender}`}>
                  <i className="bi bi-calendar"></i>
                  &nbsp;2019 - 2020
                </div>
              </div>

              <div>
                <span className={`${classes.qualification__rounder}`}></span>
                <span className={`${classes.qualification__line}`}></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === false
                ? `${classes.qualification__content} ${classes.qualification__content_active}`
                : `${classes.qualification__content}`
            }
          >
            <div className={`${classes.qualification__data}`}>
              <div>
                <h3 className={`${classes.qualification__title}`}>Hire Me</h3>

                <span className={`${classes.qualification__subtitle}`}>
                  Internship
                </span>

                <div className={`${classes.qualification__calender}`}>
                  <i className="bi bi-calendar"></i>
                  &nbsp;2023 - present
                </div>
              </div>

              <div>
                <span className={`${classes.qualification__rounder}`}></span>
                <span className={`${classes.qualification__line}`}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
